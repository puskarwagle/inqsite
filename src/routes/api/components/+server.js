import fs from 'fs';
import path from 'path';
import { json } from '@sveltejs/kit';

const CONTENT_DIR = path.join(process.cwd(), 'static', 'content');

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	try {
		if (!fs.existsSync(CONTENT_DIR)) {
			return json([]);
		}

		const files = fs.readdirSync(CONTENT_DIR);
		const components = files
			.filter(file => file.endsWith('.json'))
			.map(file => {
				const componentName = file.replace('.json', '');
				const content = JSON.parse(
					fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8')
				);

				return {
					name: componentName,
					lastModified: content.lastModified || null
				};
			})
			.sort((a, b) => a.name.localeCompare(b.name));

		return json(components);
	} catch (error) {
		console.error('Error listing components:', error);
		return json({ error: 'Failed to list components' }, { status: 500 });
	}
}
