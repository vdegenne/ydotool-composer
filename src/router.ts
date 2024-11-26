import {installRouter} from 'pwa-helpers';

interface Router {
	navigateComplete: Promise<void>;
}

const router = {
	navigateComplete: Promise.resolve(),
};

installRouter(async (location) => {
	router.navigateComplete = new Promise(async (resolve) => {
		// do something
		resolve();
	});
});

declare global {
	interface Window {
		router: Router;
	}
}

window.router = router;
