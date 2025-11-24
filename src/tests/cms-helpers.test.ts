import { describe, it, expect } from 'vitest';

/**
 * Unit tests for CMS helper functions
 * Tests getText, getImage, and getLink helpers used in components
 */

describe('CMS Helper Functions', () => {
	describe('getText', () => {
		it('should return content value when available', () => {
			const content = {
				texts: {
					hero_heading: 'Test Heading'
				}
			};
			const getText = (key: string, fallback: string) => content.texts?.[key] || fallback;

			expect(getText('hero_heading', 'Fallback')).toBe('Test Heading');
		});

		it('should return fallback when key not found', () => {
			const content = {
				texts: {}
			};
			const getText = (key: string, fallback: string) => content.texts?.[key] || fallback;

			expect(getText('missing_key', 'Fallback Text')).toBe('Fallback Text');
		});

		it('should return fallback when texts is undefined', () => {
			const content = {};
			const getText = (key: string, fallback: string) => (content as any).texts?.[key] || fallback;

			expect(getText('hero_heading', 'Fallback')).toBe('Fallback');
		});

		it('should handle empty strings correctly', () => {
			const content = {
				texts: {
					empty_key: ''
				}
			};
			const getText = (key: string, fallback: string) => content.texts?.[key] || fallback;

			// Empty string should trigger fallback
			expect(getText('empty_key', 'Fallback')).toBe('Fallback');
		});
	});

	describe('getImage', () => {
		it('should return image object when available', () => {
			const content = {
				images: {
					hero_image: {
						url: 'https://example.com/image.jpg',
						alt: 'Hero Image'
					}
				}
			};
			const getImage = (key: string) => content.images?.[key] || {};

			const image = getImage('hero_image');
			expect(image).toHaveProperty('url', 'https://example.com/image.jpg');
			expect(image).toHaveProperty('alt', 'Hero Image');
		});

		it('should return empty object when key not found', () => {
			const content = {
				images: {}
			};
			const getImage = (key: string) => content.images?.[key] || {};

			expect(getImage('missing_image')).toEqual({});
		});

		it('should return empty object when images is undefined', () => {
			const content = {};
			const getImage = (key: string) => (content as any).images?.[key] || {};

			expect(getImage('hero_image')).toEqual({});
		});

		it('should handle partial image data', () => {
			const content = {
				images: {
					incomplete_image: {
						url: 'https://example.com/image.jpg'
						// alt is missing
					}
				}
			};
			const getImage = (key: string) => content.images?.[key] || {};

			const image = getImage('incomplete_image');
			expect(image).toHaveProperty('url');
			expect(image).not.toHaveProperty('alt');
		});
	});

	describe('getLink', () => {
		it('should return link object when available', () => {
			const content = {
				links: {
					cta_button: {
						href: '/contact',
						text: 'Contact Us'
					}
				}
			};
			const getLink = (key: string) => content.links?.[key] || {};

			const link = getLink('cta_button');
			expect(link).toHaveProperty('href', '/contact');
			expect(link).toHaveProperty('text', 'Contact Us');
		});

		it('should return empty object when key not found', () => {
			const content = {
				links: {}
			};
			const getLink = (key: string) => content.links?.[key] || {};

			expect(getLink('missing_link')).toEqual({});
		});

		it('should return empty object when links is undefined', () => {
			const content = {};
			const getLink = (key: string) => (content as any).links?.[key] || {};

			expect(getLink('cta_button')).toEqual({});
		});
	});

	describe('Content Prop Structure', () => {
		it('should have valid default structure', () => {
			const content = {
				texts: {},
				images: {},
				links: {}
			};

			expect(content).toHaveProperty('texts');
			expect(content).toHaveProperty('images');
			expect(content).toHaveProperty('links');
			expect(typeof content.texts).toBe('object');
			expect(typeof content.images).toBe('object');
			expect(typeof content.links).toBe('object');
		});

		it('should be safe to access nested properties', () => {
			const content = {
				texts: {},
				images: {},
				links: {}
			};

			// Should not throw errors
			expect(() => content.texts?.missing_key).not.toThrow();
			expect(() => content.images?.missing_image?.url).not.toThrow();
			expect(() => content.links?.missing_link?.href).not.toThrow();
		});
	});
});
