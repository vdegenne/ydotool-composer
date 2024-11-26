/**
 * Read the content of /usr/include/linux/input-event-codes.h
 * and create a convenient json object
 */

import fs from 'fs/promises';

const INPUT_EVENT_CODES_FILEPATH = '/usr/include/linux/input-event-codes.h';
const OUTPUT_JSON_PATH = './src/input-event-codes.json';

const constants = {};
const definePattern = /^#define\s+(\w+)\s+(0x[0-9a-fA-F]+|\d+)\s*$/;

const fileContent = await fs.readFile(INPUT_EVENT_CODES_FILEPATH, 'utf-8');
const lines = fileContent.split('\n');

for (const line of lines) {
	const match = definePattern.exec(line);
	if (match) {
		const [, key, value] = match;
		constants[key] = value; // Store the value directly as a string
	}
}

// Write the JSON object to a file
await fs.writeFile(OUTPUT_JSON_PATH, JSON.stringify(constants, null, 2));
