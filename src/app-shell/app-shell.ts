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
			<header class="p-3 flex items-center justify-between">
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
			<div
				class="m-12 flex flex-col gap-3 flex-1 ml-auto mr-auto justify-center"
				style="width:min(calc(100% - 24px), 500px)"
			>
				<md-filled-text-field
					autofocus
					?error=${store.input && store.errors.length}
					supporting-text="${store.input
						? store.errors.length
							? `unknown keys:\u00A0  ${store.errors.join('\u00A0\u00A0\u00A0')}`
							: store.keysOutput.join('\u00A0\u00A0\u00A0')
						: 'Write human-readable keys e.g. "ctrl shift f"'}"
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

				<div
					?invisible=${!store.input || store.errors.length}
					class="flex flex-col gap-3"
				>
					<md-outlined-text-field
						value=${store.output}
						?inert=${!store.input || store.errors.length}
					>
						${false
							? html`
									<md-icon-button
										slot="trailing-icon"
										@click=${() => {
											copyToClipboard(store.output);
										}}
									>
										<md-icon>content_copy</md-icon>
									</md-icon-button>
								`
							: null}
					</md-outlined-text-field>
					<div class="flex gap-3">
						<md-filled-tonal-button
							@click="${() => copyToClipboard(store.output)}"
							style="width:calc(100% / 2 - 6px)"
						>
							<md-icon slot="icon">content_copy</md-icon>
							<span>${store.output}</span>
						</md-filled-tonal-button>
						<md-filled-tonal-button
							@click="${() => copyToClipboard('ydotool key ' + store.output)}"
							style="width:calc(100% / 2 - 6px)"
						>
							<md-icon slot="icon">content_copy</md-icon>
							<span>ydotool key ${store.output}</span>
						</md-filled-tonal-button>
					</div>
				</div>
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
