import fs from 'fs';
import path from 'path';
import { json } from '@sveltejs/kit';

const UPLOAD_DIR = path.join(process.cwd(), 'static', 'uploads');

// Ensure upload directory exists
if (!fs.existsSync(UPLOAD_DIR)) {
	fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	try {
		const formData = await request.formData();
		const file = formData.get('file');

		if (!file || !(file instanceof File)) {
			return json({ error: 'No file provided' }, { status: 400 });
		}

		// Validate file type (images only)
		const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
		if (!allowedTypes.includes(file.type)) {
			return json({ error: 'Invalid file type. Only images are allowed.' }, { status: 400 });
		}

		// Generate unique filename
		const timestamp = Date.now();
		const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
		const fileName = `${timestamp}_${originalName}`;
		const filePath = path.join(UPLOAD_DIR, fileName);

		// Save file
		const arrayBuffer = await file.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);
		fs.writeFileSync(filePath, buffer);

		// Return URL path
		const url = `/uploads/${fileName}`;

		return json({
			success: true,
			url,
			fileName
		});
	} catch (error) {
		console.error('Error uploading file:', error);
		return json({ error: 'Failed to upload file' }, { status: 500 });
	}
}
