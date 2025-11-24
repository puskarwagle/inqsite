import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

/**
 * Unit tests for CMS content loading
 * Validates JSON structure and content integrity
 */

describe('Content Loading', () => {
	const contentDir = join(process.cwd(), 'static', 'content');

	describe('Registry File', () => {
		it('should exist', () => {
			const registryPath = join(contentDir, '_registry.json');
			expect(existsSync(registryPath)).toBe(true);
		});

		it('should have valid JSON structure', () => {
			const registryPath = join(contentDir, '_registry.json');
			const content = readFileSync(registryPath, 'utf-8');

			expect(() => JSON.parse(content)).not.toThrow();

			const registry = JSON.parse(content);
			expect(registry).toHaveProperty('pages');
			expect(registry).toHaveProperty('sharedComponents');
		});

		it('should list all integrated pages', () => {
			const registryPath = join(contentDir, '_registry.json');
			const registry = JSON.parse(readFileSync(registryPath, 'utf-8'));

			const expectedPages = ['/', '/aboutus', '/team', '/contact', '/home-one', '/home-two'];

			for (const page of expectedPages) {
				expect(registry.pages).toHaveProperty(page);
				expect(Array.isArray(registry.pages[page])).toBe(true);
			}
		});

		it('should list shared components', () => {
			const registryPath = join(contentDir, '_registry.json');
			const registry = JSON.parse(readFileSync(registryPath, 'utf-8'));

			expect(Array.isArray(registry.sharedComponents)).toBe(true);
			expect(registry.sharedComponents).toContain('Header');
			expect(registry.sharedComponents).toContain('Footer');
		});
	});

	describe('Component JSON Files', () => {
		it('should not contain template literals', () => {
			const registryPath = join(contentDir, '_registry.json');
			const registry = JSON.parse(readFileSync(registryPath, 'utf-8'));

			// Collect all component names
			const components = [
				...registry.sharedComponents,
				...Object.values(registry.pages).flat()
			] as string[];

			for (const component of components) {
				const jsonPath = join(contentDir, `${component}.json`);
				if (!existsSync(jsonPath)) continue;

				const content = readFileSync(jsonPath, 'utf-8');

				// Check for template literal patterns
				expect(content).not.toContain('{getText');
				expect(content).not.toContain('{getImage');
				expect(content).not.toContain('{getLink');
			}
		});

		it('should have valid JSON structure for all components', () => {
			const registryPath = join(contentDir, '_registry.json');
			const registry = JSON.parse(readFileSync(registryPath, 'utf-8'));

			const components = [
				...registry.sharedComponents,
				...Object.values(registry.pages).flat()
			] as string[];

			for (const component of components) {
				const jsonPath = join(contentDir, `${component}.json`);
				if (!existsSync(jsonPath)) continue;

				const content = readFileSync(jsonPath, 'utf-8');

				expect(() => JSON.parse(content)).not.toThrow();

				const data = JSON.parse(content);
				expect(data).toHaveProperty('componentName', component);
				expect(data).toHaveProperty('lastModified');
				expect(data).toHaveProperty('texts');
				expect(data).toHaveProperty('images');
				expect(data).toHaveProperty('links');
			}
		});

		it('should have proper data types in JSON', () => {
			const jsonPath = join(contentDir, 'HomeA.json');
			if (!existsSync(jsonPath)) return;

			const data = JSON.parse(readFileSync(jsonPath, 'utf-8'));

			// texts should be string values
			for (const [key, value] of Object.entries(data.texts || {})) {
				expect(typeof value).toBe('string');
			}

			// images should be objects with url property
			for (const [key, value] of Object.entries(data.images || {})) {
				expect(typeof value).toBe('object');
				expect(value).toHaveProperty('url');
				expect(typeof (value as any).url).toBe('string');
			}

			// links should be objects
			for (const [key, value] of Object.entries(data.links || {})) {
				expect(typeof value).toBe('object');
			}
		});
	});

	describe('Server Load Functions', () => {
		it('should load content for all pages', () => {
			const pages = [
				'src/routes/+page.server.js',
				'src/routes/aboutus/+page.server.js',
				'src/routes/team/+page.server.js',
				'src/routes/contact/+page.server.js',
				'src/routes/home-one/+page.server.js',
				'src/routes/home-two/+page.server.js'
			];

			for (const pagePath of pages) {
				const fullPath = join(process.cwd(), pagePath);
				expect(existsSync(fullPath)).toBe(true);

				const content = readFileSync(fullPath, 'utf-8');

				// Should import fs
				expect(content).toContain('import');
				expect(content).toContain('fs');

				// Should export load function
				expect(content).toContain('export async function load');

				// Should return content object
				expect(content).toContain('return { content');
			}
		});
	});

	describe('Content Integrity', () => {
		it('should not have corrupted HomeA content', () => {
			const jsonPath = join(contentDir, 'HomeA.json');
			if (!existsSync(jsonPath)) return;

			const data = JSON.parse(readFileSync(jsonPath, 'utf-8'));

			// Check for known good values
			expect(data.texts?.hero_heading).toBeDefined();
			expect(typeof data.texts?.hero_heading).toBe('string');
			expect(data.texts?.hero_heading.length).toBeGreaterThan(0);
		});

		it('should not have corrupted Footer content', () => {
			const jsonPath = join(contentDir, 'Footer.json');
			if (!existsSync(jsonPath)) return;

			const data = JSON.parse(readFileSync(jsonPath, 'utf-8'));

			// Footer should have some text content
			expect(Object.keys(data.texts || {}).length).toBeGreaterThan(0);
		});

		it('should not have corrupted Header content', () => {
			const jsonPath = join(contentDir, 'Header.json');
			if (!existsSync(jsonPath)) return;

			const data = JSON.parse(readFileSync(jsonPath, 'utf-8'));

			// Header should have navigation items
			expect(Object.keys(data.texts || {}).length).toBeGreaterThan(5);
		});
	});
});
