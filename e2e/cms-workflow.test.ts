import { expect, test } from '@playwright/test';

/**
 * E2E tests for CMS workflow
 * Tests the complete CMS editing and display flow
 */

test.describe('CMS Content Display', () => {
	test('home page should load with CMS content', async ({ page }) => {
		await page.goto('/');

		// Wait for page to load
		await page.waitForLoadState('networkidle');

		// Check that hero heading is visible
		const h1 = page.locator('h1').first();
		await expect(h1).toBeVisible();

		// Verify it's not showing template literals
		const h1Text = await h1.textContent();
		expect(h1Text).not.toContain('{getText');
		expect(h1Text).not.toContain('undefined');
		expect(h1Text?.trim().length).toBeGreaterThan(0);
	});

	test('about page should load with CMS content', async ({ page }) => {
		await page.goto('/aboutus');

		await page.waitForLoadState('networkidle');

		const h1 = page.locator('h1').first();
		await expect(h1).toBeVisible();

		const h1Text = await h1.textContent();
		expect(h1Text).not.toContain('{getText');
		expect(h1Text?.trim().length).toBeGreaterThan(0);
	});

	test('team page should load with CMS content', async ({ page }) => {
		await page.goto('/team');

		await page.waitForLoadState('networkidle');

		const h1 = page.locator('h1').first();
		await expect(h1).toBeVisible();

		const h1Text = await h1.textContent();
		expect(h1Text).not.toContain('{getText');
	});

	test('contact page should load with CMS content', async ({ page }) => {
		await page.goto('/contact');

		await page.waitForLoadState('networkidle');

		const h1 = page.locator('h1').first();
		await expect(h1).toBeVisible();

		const h1Text = await h1.textContent();
		expect(h1Text).not.toContain('{getText');
	});

	test('home-one page should load with CMS content', async ({ page }) => {
		await page.goto('/home-one');

		await page.waitForLoadState('networkidle');

		const h1 = page.locator('h1').first();
		await expect(h1).toBeVisible();

		const h1Text = await h1.textContent();
		expect(h1Text).not.toContain('{getText');
	});

	test('home-two page should load with CMS content', async ({ page }) => {
		await page.goto('/home-two');

		await page.waitForLoadState('networkidle');

		const h1 = page.locator('h1').first();
		await expect(h1).toBeVisible();

		const h1Text = await h1.textContent();
		expect(h1Text).not.toContain('{getText');
	});
});

test.describe('CMS Images', () => {
	test('images should load from CMS data', async ({ page }) => {
		await page.goto('/');

		await page.waitForLoadState('networkidle');

		// Check that images are loaded
		const images = page.locator('img');
		const count = await images.count();

		expect(count).toBeGreaterThan(0);

		// Check first image has valid src
		const firstImg = images.first();
		const src = await firstImg.getAttribute('src');

		expect(src).toBeTruthy();
		expect(src).not.toContain('undefined');
		expect(src).not.toContain('{getImage');
	});

	test('images should have alt text', async ({ page }) => {
		await page.goto('/');

		await page.waitForLoadState('networkidle');

		const images = page.locator('img');
		const count = await images.count();

		// Check at least some images have alt text
		let withAlt = 0;
		for (let i = 0; i < Math.min(count, 10); i++) {
			const img = images.nth(i);
			const alt = await img.getAttribute('alt');
			if (alt && alt.trim().length > 0) {
				withAlt++;
			}
		}

		expect(withAlt).toBeGreaterThan(0);
	});
});

test.describe('CMS Header and Footer', () => {
	test('header should be consistent across pages', async ({ page }) => {
		// Check home page
		await page.goto('/');
		await page.waitForLoadState('networkidle');
		const homeHeader = await page.locator('header, nav').first().textContent();

		// Check about page
		await page.goto('/aboutus');
		await page.waitForLoadState('networkidle');
		const aboutHeader = await page.locator('header, nav').first().textContent();

		// Headers should be the same (shared component)
		expect(homeHeader).toBe(aboutHeader);
	});

	test('footer should be consistent across pages', async ({ page }) => {
		// Check home page
		await page.goto('/');
		await page.waitForLoadState('networkidle');
		const homeFooter = await page.locator('footer').first().textContent();

		// Check about page
		await page.goto('/aboutus');
		await page.waitForLoadState('networkidle');
		const aboutFooter = await page.locator('footer').first().textContent();

		// Footers should be the same (shared component)
		expect(homeFooter).toBe(aboutFooter);
	});
});

test.describe('CMS Admin Panel', () => {
	test('admin page should be accessible', async ({ page }) => {
		await page.goto('/admin');

		await page.waitForLoadState('networkidle');

		// Should have admin interface elements
		const heading = page.locator('h1, h2').first();
		await expect(heading).toBeVisible();
	});

	test('should list available components', async ({ page }) => {
		await page.goto('/admin');

		await page.waitForLoadState('networkidle');

		// Should show component selector
		const select = page.locator('select');
		await expect(select.first()).toBeVisible();
	});
});

test.describe('Content Validation', () => {
	test('no page should show template literal syntax', async ({ page }) => {
		const pages = ['/', '/aboutus', '/team', '/contact', '/home-one', '/home-two'];

		for (const path of pages) {
			await page.goto(path);
			await page.waitForLoadState('networkidle');

			const content = await page.content();

			// Check for template literal patterns that would indicate CMS failure
			expect(content).not.toContain('{getText(');
			expect(content).not.toContain('{getImage(');
			expect(content).not.toContain('{getLink(');
		}
	});

	test('no page should show undefined values', async ({ page }) => {
		const pages = ['/', '/aboutus', '/team', '/contact'];

		for (const path of pages) {
			await page.goto(path);
			await page.waitForLoadState('networkidle');

			// Check visible text doesn't contain "undefined"
			const bodyText = await page.locator('body').textContent();

			// Allow "undefined" in code/script tags, but not in visible content
			const visibleText = await page.evaluate(() => {
				const body = document.body.cloneNode(true) as HTMLElement;
				// Remove script tags
				body.querySelectorAll('script').forEach(el => el.remove());
				return body.textContent;
			});

			expect(visibleText?.toLowerCase()).not.toContain('undefined');
		}
	});
});
