/**
 * When uncommenting a fix below, the element
 * subjected to the fix needs to be imported,
 * Please do not import the element from
 * `@material/web/all.js` directly but from the
 * element's folder directly, or all elements will
 * be bundled inside the final builds...
 */
import '@material/web/all.js';
import {DEV} from './constants.js';

// This is used during development to see what elements are used in the page.
if (DEV) {
	const {getAvailableElements} = await import('mwc3-back-helpers/browser.js');
	console.log(getAvailableElements());
}

// MdDialog.shadowRootOptions.delegatesFocus = false;

// MdDialog.addInitializer(async (instance: MdDialog) => {
// 	await instance.updateComplete;
// 	instance.dialog.prepend(instance.scrim);
// 	instance.scrim.style.inset = 0;
// 	instance.scrim.style.zIndex = -1;

// 	const {getOpenAnimation, getCloseAnimation} = instance;
// 	instance.getOpenAnimation = () => {
// 		const animations = getOpenAnimation.call(this);
// 		animations.container = [...animations.container, ...animations.dialog];
// 		animations.dialog = [];
// 		return animations;
// 	};
// 	instance.getCloseAnimation = () => {
// 		const animations = getCloseAnimation.call(this);
// 		animations.container = [...animations.container, ...animations.dialog];
// 		animations.dialog = [];
// 		return animations;
// 	};
// });

// MdOutlinedField.elementStyles.push(css`
// 	.container-overflow {
// 		background-color: var(
// 			--md-outlined-text-field-container-color,
// 			var(--md-sys-color-surface)
// 		);
// 	}
// `);

// MdListItem.elementStyles.push(css`
// 	a,
// 	button,
// 	li {
// 		width: 100%;
// 	}
// `);

// MdItem.elementStyles.push(css`
// 	[name='start']::slotted(*) {
// 		overflow: initial;
// 	}
// `);

// MdFilterChip.elementStyles.push(css`
// 	.leading.icon,
// 	#button {
// 		position: initial !important;
// 	}
// `);
