import type {MdDialog} from '@material/web/all.js';
import {customElement} from 'custom-element-decorator';
import {html, LitElement} from 'lit';
import {withStyles} from 'lit-with-styles';
import {query, state} from 'lit/decorators.js';
import {codes, store} from './store.js';
import {withController} from '@snar/lit';

declare global {
	interface Window {
		searchKeyDialog: SearchKeyDialog;
	}
	interface HTMLElementTagNameMap {
		'search-key-dialog': SearchKeyDialog;
	}
}

@customElement({name: 'search-key-dialog', inject: true})
@withController(store)
@withStyles()
export class SearchKeyDialog extends LitElement {
	@state() open = false;

	constructor() {
		super();
	}

	@query('md-dialog') dialog!: MdDialog;

	render() {
		let result: [string, string][] | undefined;
		if (store.search !== '') {
			result = Object.entries(codes).filter(([key, code]) => {
				return (
					key.includes(store.search) || code.toString().includes(store.search)
				);
			});
		}

		return html`<!-- -->
			<md-dialog
				fullscreen
				?open="${this.open}"
				@opened=${() => {
					this.renderRoot.querySelector<HTMLElement>('[autofocus]')?.focus();
				}}
				@closed=${() => {
					// this.remove();
					this.open = false;
				}}
			>
				<header slot="headline">Search a key</header>

				<form
					slot="content"
					method="dialog"
					id="form"
					class="flex flex-col gap-6"
				>
					${store.F.TEXTFIELD('Search', 'search')}

					<md-chip-set>
						${result
							? result.map(
									(item) =>
										html`<!---->
											<md-filter-chip elevated inert>
												${item[0]} : ${item[1]}
											</md-filter-chip>`,
								)
							: html`<md-filter-chip elevated inert
									>No results</md-filter-chip
								>`}
					</md-chip-set>
				</form>

				<div slot="actions">
					<md-text-button form="form">Close</md-text-button>
				</div>
			</md-dialog>
			<!-- --> `;
	}

	async show() {
		this.open = true;
	}
}

export const searchKeyDialog = new SearchKeyDialog();
