import fs from 'fs';
import path from 'path';
import { json } from '@sveltejs/kit';

const CONTENT_DIR = path.join(process.cwd(), 'static', 'content');

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
	const { component } = params;

	try {
		const filePath = path.join(CONTENT_DIR, `${component}.json`);

		if (!fs.existsSync(filePath)) {
			return json({ error: 'Component not found' }, { status: 404 });
		}

		const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
		return json(content);
	} catch (error) {
		console.error('Error reading content:', error);
		return json({ error: 'Failed to read content' }, { status: 500 });
	}
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ params, request }) {
	const { component } = params;

	try {
		const data = await request.json();

		// Validate component name (prevent path traversal)
		if (!/^[a-zA-Z0-9_-]+$/.test(component)) {
			return json({ error: 'Invalid component name' }, { status: 400 });
		}

		const filePath = path.join(CONTENT_DIR, `${component}.json`);

		// Update lastModified timestamp
		data.lastModified = new Date().toISOString();

		// Write the file
		fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

		return json({ success: true, message: 'Content updated successfully' });
	} catch (error) {
		console.error('Error saving content:', error);
		return json({ error: 'Failed to save content' }, { status: 500 });
	}
}
