import {html} from 'lit';

/** Export individual assets for helping tree-shaking */
// export {default as MY_IMAGE} from './img/my-image.png?inline';
// etc...

// Note: Assets from public directory can't be inlined.
// Instead a url to the resource will be used in place.
// unless `?raw` is being used(?)
export {default as SVG_LOGO} from '/logo.svg?raw';

export const SVG_GOOGLE_G = html`<svg
	xmlns="http://www.w3.org/2000/svg"
	width="705.6"
	height="720"
	viewBox="0 0 186.69 190.5"
>
	<g transform="translate(1184.583 765.171)">
		<path
			clip-path="none"
			mask="none"
			d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z"
			fill="#4285f4"
		/>
		<path
			clip-path="none"
			mask="none"
			d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z"
			fill="#34a853"
		/>
		<path
			clip-path="none"
			mask="none"
			d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z"
			fill="#fbbc05"
		/>
		<path
			d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z"
			fill="#ea4335"
			clip-path="none"
			mask="none"
		/>
	</g>
</svg>`;

export const SVG_GOOGLE = html`<svg
	id="Слой_1"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	viewBox="-380.2 274.7 65.7 65.8"
>
	<style>
		.st0 {
			fill: #e0e0e0;
		}
		.st1 {
			fill: #fff;
		}
		.st2 {
			clip-path: url(#SVGID_2_);
			fill: #fbbc05;
		}
		.st3 {
			clip-path: url(#SVGID_4_);
			fill: #ea4335;
		}
		.st4 {
			clip-path: url(#SVGID_6_);
			fill: #34a853;
		}
		.st5 {
			clip-path: url(#SVGID_8_);
			fill: #4285f4;
		}
	</style>
	<circle class="st0" cx="-347.3" cy="307.6" r="32.9" />
	<circle class="st1" cx="-347.3" cy="307.1" r="32.4" />
	<g>
		<defs>
			<path
				id="SVGID_1_"
				d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
			/>
		</defs>
		<clipPath id="SVGID_2_">
			<use xlink:href="#SVGID_1_" overflow="visible" />
		</clipPath>
		<path class="st2" d="M-370.8 320.3v-26l17 13z" />
		<defs>
			<path
				id="SVGID_3_"
				d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
			/>
		</defs>
		<clipPath id="SVGID_4_">
			<use xlink:href="#SVGID_3_" overflow="visible" />
		</clipPath>
		<path class="st3" d="M-370.8 294.3l17 13 7-6.1 24-3.9v-14h-48z" />
		<g>
			<defs>
				<path
					id="SVGID_5_"
					d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
				/>
			</defs>
			<clipPath id="SVGID_6_">
				<use xlink:href="#SVGID_5_" overflow="visible" />
			</clipPath>
			<path class="st4" d="M-370.8 320.3l30-23 7.9 1 10.1-15v48h-48z" />
		</g>
		<g>
			<defs>
				<path
					id="SVGID_7_"
					d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
				/>
			</defs>
			<clipPath id="SVGID_8_">
				<use xlink:href="#SVGID_7_" overflow="visible" />
			</clipPath>
			<path class="st5" d="M-322.8 331.3l-31-24-4-3 35-10z" />
		</g>
	</g>
</svg>`;

export const SVG_GOOGLE_IMAGES = html`<svg
	class="DCxYpf"
	focusable="false"
	aria-hidden="true"
	viewBox="0 0 24 24"
	xmlns="http://www.w3.org/2000/svg"
>
	<path clip-rule="evenodd" fill="none" d="M0 0h24v24H0z"></path>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		fill="#4285F4"
		d="M19 22h-7v-2h7c.55 0 1-.46 1-1V5a1 1 0 0 0-1-.99L12 4V2h7c1.66 0 3 1.36 3 3v14c0 1.65-1.35 3-3 3"
	></path>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		fill="#EA4335"
		d="M12 22H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h7v2H5c-.55 0-.99.45-.99 1L4 19c0 .55.45 1 1 1h7v2z"
	></path>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		fill="#34A853"
		d="M14 13l-2.25 2.75L10 14l-4 4h12z"
	></path>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		fill="#FBBC04"
		d="M10 8c0 1.1-.9 2-2 2s-2-.9-2-2c0-1.09.9-2 2-2s2 .9 2 2"
	></path>
</svg>`;

export const SVG_LIT = html`<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="-20 0 200 200"
>
	<path fill="#00e8ff" d="M40 120l20-60l90 90l-30 50l-40-40h-20" />
	<path fill="#283198" d="M80 160v-80l40-40v80M0 160l40 40l20-40l-20-40h-20" />
	<path
		fill="#324fff"
		d="M40 120v-80l40-40v80M120 200v-80l40-40v80M0 160v-80l40 40"
	/>
	<path fill="#0ff" d="M40 200v-80l40 40" />
</svg>`;

export const SVG_MATERIAL = html`<svg
	viewBox="0 96 960 960"
	fill="currentColor"
>
	<path
		d="M480 1016q-91 0-171-34.5T169 887q-60-60-94.5-140T40 576q0-91 34.5-171T169 265q60-60 140-94.5T480 136q91 0 171 34.5T791 265q60 60 94.5 140T920 576q0 91-34.5 171T791 887q-60 60-140 94.5T480 1016ZM200 802V351q-38 47-59 104t-21 121q0 65 21 122t59 104Zm54-506h452q-47-38-104-59t-122-21q-65 0-122 21t-104 59Zm226 381 151-301H330l150 301Zm40 99h160V456L520 776Zm-240 0h160L280 456v320Zm200 160q64 0 121.5-21T706 856H254q47 38 104.5 59T480 936Zm280-134q38-47 59-104t21-122q0-64-21-121t-59-104v451Z"
	/>
</svg>`;

export const SVG_GITHUB = html`
	<svg
		height="32"
		aria-hidden="true"
		viewBox="0 0 16 16"
		version="1.1"
		width="32"
		fill="currentColor"
	>
		<path
			d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
		></path>
	</svg>
`;
