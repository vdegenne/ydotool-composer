import type {MdDialog} from '@material/web/all.js';
import {customElement} from 'custom-element-decorator';
import {LitElement, html} from 'lit';
import {withStyles} from 'lit-with-styles';
import {state, query} from 'lit/decorators.js';
import styles from './settings-dialog.css?inline';
import {withController} from '@snar/lit';
import {renderThemeElements} from '../styles/theme-elements.js';
import {themeStore} from '../styles/styles.js';

@customElement({name: 'settings-dialog', inject: true})
@withStyles(styles)
@withController(themeStore)
class SettingsDialog extends LitElement {
	@state() open = false;

	@query('md-dialog') dialog!: MdDialog;

	render() {
		return html`
			<md-dialog ?open=${this.open} @close=${() => (this.open = false)}>
				<header slot="headline">
					<md-icon>settings</md-icon>
					Settings
				</header>

				<form slot="content" method="dialog" id="form">
					${renderThemeElements()}
				</form>

				<div slot="actions">
					<md-text-button form="form">Close</md-text-button>
				</div>
			</md-dialog>
		`;
	}

	async show() {
		if (this.dialog.open) {
			const dialogClose = new Promise((resolve) => {
				const resolveCB = () => {
					resolve(null);
					this.dialog.removeEventListener('closed', resolveCB);
				};
				this.dialog.addEventListener('closed', resolveCB);
			});
			this.dialog.close();
			await dialogClose;
		}
		this.open = true;
	}

	close(returnValue?: string) {
		return this.dialog.close(returnValue);
	}
}

declare global {
	interface Window {
		settingsDialog: SettingsDialog;
	}
	interface HTMLElementTagNameMap {
		'settings-dialog': SettingsDialog;
	}
}

export const settingsDialog = (window.settingsDialog = new SettingsDialog());
