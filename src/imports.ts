export async function getThemeStore() {
	const {themeStore} = await import('./styles/styles.js');
	return themeStore;
}

export async function getSettingsDialog() {
	const {settingsDialog} = await import('./settings/settings-dialog.js');
	return settingsDialog;
}

export async function openSearchKeyCodeDialog() {
	const {searchKeyDialog} = await import('./search-key-dialog.js');
	searchKeyDialog.show();
}
