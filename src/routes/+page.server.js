import fs from 'fs';
import path from 'path';

export async function load() {
	try {
		// Load content for Home page components
		const contentDir = path.join(process.cwd(), 'static', 'content');

		const homeAContent = JSON.parse(
			fs.readFileSync(path.join(contentDir, 'HomeA.json'), 'utf-8')
		);

		const footerContent = JSON.parse(
			fs.readFileSync(path.join(contentDir, 'Footer.json'), 'utf-8')
		);

		return {
			content: {
				HomeA: homeAContent,
				Footer: footerContent
			}
		};
	} catch (error) {
		console.error('Error loading content:', error);
		// Return empty object if content files don't exist yet
		return {
			content: {}
		};
	}
}
