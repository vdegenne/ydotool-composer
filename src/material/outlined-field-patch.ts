import {css} from 'lit';
import {MdOutlinedField} from '@material/web/field/outlined-field.js';

/**
 * Add a slight background color that can help differentiate fields
 * from other elements
 */
MdOutlinedField.elementStyles.push(css`
	.container-overflow {
		background-color: var(
			--md-outlined-text-field-container-color,
			var(--md-sys-color-surface-container)
		);
	}
`);
