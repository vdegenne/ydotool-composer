import type {TemplateResult} from 'lit-html';
import '@material/web/button/text-button.js';

interface Options {
	headline: string;
	content: string | TemplateResult;
}

export function confirm({
	headline = 'Are you sure?',
	content = 'Are you sure to perform this action?',
}: Partial<Options> = {}) {
	return function (
		_target: any,
		_propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		const originalMethod = descriptor.value;
		descriptor.value = async function (...args: any[]) {
			const {materialConfirm} = await import('material-3-prompt-dialog');
			try {
				await materialConfirm({
					headline,
					content,
				});
			} catch {
				return;
			}
			return originalMethod.apply(this, args);
		};
		return descriptor;
	};
}
