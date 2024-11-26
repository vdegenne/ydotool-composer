import {withController} from '@snar/lit';
import {html, LitElement} from 'lit';
import {withStyles} from 'lit-with-styles';
import {customElement} from 'lit/decorators.js';
import {unsafeSVG} from 'lit/directives/unsafe-svg.js';
import {materialShellLoadingOff} from 'material-shell';
import {SVG_GITHUB, SVG_LOGO} from '../assets/assets.js';
import {store} from '../store.js';
import styles from './app-shell.css?inline';
import {bindInput} from 'relit';
import {copyToClipboard} from '../utils.js';

declare global {
	interface Window {
		app: AppShell;
	}
	interface HTMLElementTagNameMap {
		'app-shell': AppShell;
	}
}

@customElement('app-shell')
@withStyles(styles)
@withController(store)
export class AppShell extends LitElement {
	firstUpdated() {
		materialShellLoadingOff.call(this);
	}

	render() {
		return html`
			<header class="p-3 flex items-center gap-2 justify-between">
				<md-icon-button inert
					><md-icon>${unsafeSVG(SVG_LOGO)}</md-icon></md-icon-button
				>
				<span style="color:var(--md-sys-color-outline-variant)"
					>ydotool-composer</span
				>
				<md-icon-button
					href="https://github.com/vdegenne/ydotool-composer"
					target="_blank"
					><md-icon>${SVG_GITHUB}</md-icon></md-icon-button
				>
			</header>
			<div class="m-5 flex flex-col gap-2 flex-1">
				<md-filled-text-field
					supporting-text=${store.input
						? ''
						: 'Write human-readable keys e.g. "ctrl shift f"'}
					${bindInput(store, 'input')}
				>
					<md-icon-button
						slot="trailing-icon"
						@click=${(event: PointerEvent) => {
							const target = event.target as HTMLInputElement;
							store.input = '';
							store.updateComplete.then(() => {
								target.parentElement.focus();
							});
						}}
						><md-icon>close</md-icon></md-icon-button
					>
				</md-filled-text-field>
				<p class="mt-0"></p>

				${store.input
					? store.errors.length
						? html`<!-- -->
								<div style="color:var(--md-sys-color-error)" class="flex gap-2">
									<span>unknown keys:</span>
									<div class="flex gap-2">
										${store.errors.map((error) => html`<b>${error}</b>`)}
									</div>
								</div>
								<!-- -->`
						: html`<!-- -->
								<md-outlined-text-field
									value=${store.output}
									supporting-text=${store.keysOutput.join('\u00A0\u00A0\u00A0')}
								>
									<md-icon-button
										slot="trailing-icon"
										@click=${() => {
											copyToClipboard(store.output);
										}}
									>
										<md-icon>content_copy</md-icon>
									</md-icon-button>
								</md-outlined-text-field>

								<!-- -->`
					: null}
			</div>

			<footer class="p-2">
				<md-text-button
					href="https://github.com/ReimuNotMoe/ydotool"
					target="_blank"
					>ydotool @ github</md-text-button
				>
			</footer>
		`;
	}
}

export const app = (window.app = new AppShell());
