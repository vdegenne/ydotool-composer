import {MdDialog} from '@material/web/dialog/dialog.js';

// MdDialog.shadowRootOptions.delegatesFocus = false;

MdDialog.addInitializer(async (instance: MdDialog) => {
	await instance.updateComplete;
	instance.dialog.prepend(instance.scrim);
	instance.scrim.style.inset = 0;
	instance.scrim.style.zIndex = -1;

	const {getOpenAnimation, getCloseAnimation} = instance;
	instance.getOpenAnimation = () => {
		const animations = getOpenAnimation.call(this);
		animations.container = [...animations.container, ...animations.dialog];
		animations.dialog = [];
		return animations;
	};
	instance.getCloseAnimation = () => {
		const animations = getCloseAnimation.call(this);
		animations.container = [...animations.container, ...animations.dialog];
		animations.dialog = [];
		return animations;
	};
});
