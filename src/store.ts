import {ReactiveController, state} from '@snar/lit';
import {type PropertyValues} from 'lit';
import {saveToLocalStorage} from 'snar-save-to-local-storage';
import codes from './input-event-codes.json';

@saveToLocalStorage('ydotool:store')
export class AppStore extends ReactiveController {
	@state() input = '';
	@state() errors: string[] = [];

	keysOutput: string[] = [];
	output = '';

	updated(changed: PropertyValues<this>) {
		if (changed.has('input')) {
			const inputs = this.input.split(/\s+/g).filter((k) => k);
			const keys = inputs.map((key) => {
				key = key.toUpperCase();
				if (key === 'CTRL') {
					key = 'LEFTCTRL';
				} else if (key === 'ALT') {
					key = 'LEFTALT';
				} else if (key === 'SHIFT') {
					key = 'LEFTSHIFT';
				} else if (key === 'META') {
					key = 'LEFTMETA';
				}

				if (!key.startsWith('KEY_')) {
					key = `KEY_${key}`;
				}
				return key;
			});
			const outputs = keys.map((key) => {
				return codes[key];
			});

			const errors: string[] = [];
			outputs.forEach((o, i) => {
				if (o === undefined) {
					errors.push(inputs[i]);
				}
			});

			this.errors = errors;

			const reverse = outputs.slice().reverse();
			this.output = [
				...outputs.map((k) => `${k}:1`),
				...reverse.map((k) => `${k}:0`),
			].join(' ');
			this.keysOutput = keys;

			// console.log(
			// 	`input: "${this.input}"`,
			// 	inputs,
			// 	keys,
			// 	outputs,
			// 	this.output,
			// 	this.keysOutput,
			// );
		}
	}
}

export const store = new AppStore();
