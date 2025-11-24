<script>
	import { onMount } from 'svelte';

	let components = [];
	let selectedComponent = '';
	let content = null;
	let loading = false;
	let saving = false;
	let message = '';
	let registry = { pages: {}, sharedComponents: [] };
	let visitSiteUrl = '/';
	let viewMode = 'pages'; // 'pages' or 'components'
	let selectedPage = null;

	onMount(async () => {
		await loadRegistry();
		await loadComponents();

		// Restore state after page reload
		const savedComponent = sessionStorage.getItem('cms_selected_component');
		if (savedComponent && components.some(c => c.name === savedComponent)) {
			selectedComponent = savedComponent;

			// Find which page this component belongs to
			for (const [page, pageComponents] of Object.entries(registry.pages)) {
				if (pageComponents.includes(savedComponent)) {
					selectedPage = page;
					viewMode = 'components';
					break;
				}
			}

			await loadContent();
		}

		// Clear the saved state
		sessionStorage.removeItem('cms_selected_component');
	});

	async function loadRegistry() {
		try {
			const res = await fetch('/content/_registry.json');
			registry = await res.json();
		} catch (error) {
			console.error('Failed to load registry:', error);
		}
	}

	function updateVisitSiteUrl() {
		if (!selectedComponent) {
			visitSiteUrl = '/';
			return;
		}

		// Find which page this component belongs to
		for (const [page, pageComponents] of Object.entries(registry.pages)) {
			if (pageComponents.includes(selectedComponent)) {
				// Found the page - create URL with anchor
				visitSiteUrl = `${page}#${selectedComponent}`;
				return;
			}
		}

		// Check if it's a shared component
		if (registry.sharedComponents.includes(selectedComponent)) {
			visitSiteUrl = '/'; // Default to home for shared components
		} else {
			visitSiteUrl = '/'; // Default fallback
		}
	}

	function selectPage(page) {
		selectedPage = page;
		viewMode = 'components';
	}

	function backToPages() {
		viewMode = 'pages';
		selectedPage = null;
	}

	function selectComponent(componentName) {
		selectedComponent = componentName;
		loadContent();
	}

	function getPageComponents(page) {
		return registry.pages[page] || [];
	}

	function getPageName(page) {
		const names = {
			'/': 'Home',
			'/aboutus': 'About Us',
			'/team': 'Team',
			'/contact': 'Contact',
			'/pricing-one': 'Pricing',
			'/service-one': 'Service One',
			'/service-two': 'Service Two'
		};
		return names[page] || page;
	}

	async function loadComponents() {
		try {
			const res = await fetch('/api/components');
			components = await res.json();
			if (components.length > 0 && !selectedComponent) {
				selectedComponent = components[0].name;
				await loadContent();
			}
		} catch (error) {
			console.error('Failed to load components:', error);
		}
	}

	async function loadContent() {
		if (!selectedComponent) return;

		loading = true;
		message = '';
		try {
			const res = await fetch(`/api/content/${selectedComponent}`);
			content = await res.json();
			updateVisitSiteUrl();
		} catch (error) {
			console.error('Failed to load content:', error);
			message = 'Failed to load content';
		}
		loading = false;
	}

	async function saveContent() {
		if (!selectedComponent || !content) return;

		saving = true;
		message = '';
		try {
			const res = await fetch(`/api/content/${selectedComponent}`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(content)
			});

			const result = await res.json();
			if (result.success) {
				message = '✓ Saved successfully! Reloading...';

				// Save current state before reload
				sessionStorage.setItem('cms_selected_component', selectedComponent);

				// Reload entire page to refresh both CMS and site
				setTimeout(() => window.location.reload(), 1000);
			} else {
				message = '✗ Failed to save';
			}
		} catch (error) {
			console.error('Failed to save:', error);
			message = '✗ Failed to save';
		}
		saving = false;
	}

	async function handleImageUpload(event, category, key) {
		const file = event.target.files?.[0];
		if (!file) return;

		const formData = new FormData();
		formData.append('file', file);

		try {
			const res = await fetch('/api/upload', {
				method: 'POST',
				body: formData
			});

			const result = await res.json();
			if (result.success) {
				if (category === 'images') {
					content[category][key].url = result.url;
				}
				content = content; // Trigger reactivity
			}
		} catch (error) {
			console.error('Upload failed:', error);
		}
	}
</script>

<svelte:head>
	<title>Content Management - Admin</title>
	<link rel="stylesheet" href="/webtemplate/style.css" />
	<link rel="stylesheet" href="/webtemplate/style2.css" />
	<style>
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}
		/* Scope site styles to header only */
		.admin-container .admin-content,
		.admin-container .sidebar,
		.admin-container .editor {
			all: revert;
		}
	</style>
</svelte:head>

<div class="admin-container">
	<header class="admin-header">
		<h1>Content Management System</h1>
		<a href={visitSiteUrl} class="view-site" target="_blank">← View Site</a>
	</header>

	<div class="admin-content">
		<div class="sidebar">
			{#if viewMode === 'pages'}
				<div class="sidebar-header">
					<h3>Select Page</h3>
				</div>
				<div class="page-cards">
					{#each Object.keys(registry.pages) as page}
						<button class="page-card" on:click={() => selectPage(page)}>
							<div class="page-card-title">{getPageName(page)}</div>
							<div class="page-card-count">
								{getPageComponents(page).length} components
							</div>
						</button>
					{/each}
				</div>
			{:else if viewMode === 'components'}
				<div class="sidebar-header">
					<button class="back-button" on:click={backToPages}>← Back</button>
					<h3>{getPageName(selectedPage)}</h3>
				</div>
				<div class="component-cards">
					{#each getPageComponents(selectedPage) as comp}
						<button
							class="component-card {selectedComponent === comp ? 'active' : ''}"
							on:click={() => selectComponent(comp)}
						>
							<div class="component-card-title">{comp}</div>
							{#if selectedComponent === comp && content}
								<div class="component-card-info">
									{Object.keys(content.texts || {}).length} texts,
									{Object.keys(content.images || {}).length} images,
									{Object.keys(content.links || {}).length} links
								</div>
							{/if}
						</button>
					{/each}
				</div>
			{/if}
		</div>

		<div class="editor">
			{#if loading}
				<div class="loading">Loading...</div>
			{:else if content}
				<div class="editor-header">
					<h2>{selectedComponent}</h2>
					<div class="actions">
						{#if message}
							<span class="message">{message}</span>
						{/if}
						<button on:click={saveContent} disabled={saving} class="btn-save">
							{saving ? 'Saving...' : 'Save Changes'}
						</button>
					</div>
				</div>

				<div class="editor-sections">
					<!-- Text Content -->
					{#if content.texts && Object.keys(content.texts).length > 0}
						<section class="editor-section">
							<h3>Text Content</h3>
							<div class="fields">
								{#each Object.entries(content.texts) as [key, value]}
									<div class="field">
										<label for={`text-${key}`}>{key}</label>
										{#if value.length > 100}
											<textarea
												id={`text-${key}`}
												bind:value={content.texts[key]}
												rows="4"
											></textarea>
										{:else}
											<input
												id={`text-${key}`}
												type="text"
												bind:value={content.texts[key]}
											/>
										{/if}
									</div>
								{/each}
							</div>
						</section>
					{/if}

					<!-- Images -->
					{#if content.images && Object.keys(content.images).length > 0}
						<section class="editor-section">
							<h3>Images</h3>
							<div class="fields">
								{#each Object.entries(content.images) as [key, img]}
									<div class="field image-field">
										<label for={`image-${key}`}>{key}</label>
										<input
											id={`image-${key}`}
											type="text"
											bind:value={img.url}
											placeholder="Image URL"
										/>
										<input
											type="text"
											bind:value={img.alt}
											placeholder="Alt text"
											class="alt-input"
										/>
										<input
											type="file"
											accept="image/*"
											on:change={(e) => handleImageUpload(e, 'images', key)}
											class="file-input"
										/>
										{#if img.url}
											<img src={img.url} alt={img.alt} class="preview" />
										{/if}
									</div>
								{/each}
							</div>
						</section>
					{/if}

					<!-- Links -->
					{#if content.links && Object.keys(content.links).length > 0}
						<section class="editor-section">
							<h3>Links</h3>
							<div class="fields">
								{#each Object.entries(content.links) as [key, link]}
									<div class="field link-field">
										<label for={`link-${key}`}>{key}</label>
										<input
											id={`link-${key}`}
											type="text"
											bind:value={link.href}
											placeholder="URL"
										/>
										<input
											type="text"
											bind:value={link.text}
											placeholder="Link text"
											class="link-text-input"
										/>
									</div>
								{/each}
							</div>
						</section>
					{/if}
				</div>
			{:else}
				<div class="empty">No component selected</div>
			{/if}
		</div>
	</div>
</div>

<style>
	:global(body) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		background: #f5f5f5;
	}

	.admin-container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.admin-header {
		background: #fff;
		border-bottom: 1px solid #e0e0e0;
		padding: 1.5rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.admin-header h1 {
		font-size: 1.5rem;
		font-weight: 600;
		color: #333;
	}

	.view-site {
		color: #666;
		text-decoration: none;
		font-size: 0.9rem;
	}

	.view-site:hover {
		color: #333;
	}

	.admin-content {
		display: flex;
		flex: 1;
		overflow: hidden;
	}

	.sidebar {
		width: 320px;
		background: #fff;
		border-right: 1px solid #e0e0e0;
		padding: 1.5rem;
		overflow-y: auto;
	}

	.sidebar-header {
		margin-bottom: 1.5rem;
	}

	.sidebar-header h3 {
		font-size: 1.1rem;
		font-weight: 600;
		color: #333;
		margin-top: 0.5rem;
	}

	.back-button {
		background: none;
		border: none;
		color: #007bff;
		font-size: 0.9rem;
		cursor: pointer;
		padding: 0.5rem 0;
		margin-bottom: 0.5rem;
		display: block;
	}

	.back-button:hover {
		color: #0056b3;
		text-decoration: underline;
	}

	.page-cards,
	.component-cards {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.page-card,
	.component-card {
		background: #f8f9fa;
		border: 2px solid #e0e0e0;
		border-radius: 8px;
		padding: 1rem;
		text-align: left;
		cursor: pointer;
		transition: all 0.2s ease;
		font-family: inherit;
	}

	.page-card:hover,
	.component-card:hover {
		background: #e9ecef;
		border-color: #007bff;
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.component-card.active {
		background: #007bff;
		border-color: #0056b3;
		color: #fff;
	}

	.page-card-title,
	.component-card-title {
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 0.25rem;
	}

	.component-card.active .component-card-title {
		color: #fff;
	}

	.page-card-count {
		font-size: 0.85rem;
		color: #666;
	}

	.component-card-info {
		font-size: 0.75rem;
		margin-top: 0.5rem;
		opacity: 0.9;
	}

	.editor {
		flex: 1;
		overflow-y: auto;
		background: #fff;
	}

	.editor-header {
		padding: 2rem;
		border-bottom: 1px solid #e0e0e0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		top: 0;
		background: #fff;
		z-index: 10;
	}

	.editor-header h2 {
		font-size: 1.25rem;
		font-weight: 600;
	}

	.actions {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.message {
		font-size: 0.9rem;
		color: #28a745;
	}

	.btn-save {
		padding: 0.75rem 1.5rem;
		background: #007bff;
		color: #fff;
		border: none;
		border-radius: 6px;
		font-size: 0.95rem;
		cursor: pointer;
		font-weight: 500;
	}

	.btn-save:hover:not(:disabled) {
		background: #0056b3;
	}

	.btn-save:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.editor-sections {
		padding: 2rem;
	}

	.editor-section {
		margin-bottom: 3rem;
	}

	.editor-section h3 {
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 1.5rem;
		color: #333;
	}

	.fields {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.field {
		display: flex;
		flex-direction: column;
	}

	.field label {
		font-size: 0.875rem;
		font-weight: 500;
		color: #555;
		margin-bottom: 0.5rem;
	}

	.field input,
	.field textarea {
		padding: 0.75rem;
		border: 1px solid #ddd;
		border-radius: 6px;
		font-size: 0.95rem;
		font-family: inherit;
	}

	.field textarea {
		resize: vertical;
	}

	.field input:focus,
	.field textarea:focus {
		outline: none;
		border-color: #007bff;
	}

	.image-field {
		border: 1px solid #e0e0e0;
		padding: 1rem;
		border-radius: 6px;
		background: #fafafa;
	}

	.image-field input {
		margin-bottom: 0.5rem;
	}

	.file-input {
		font-size: 0.875rem;
		padding: 0.5rem !important;
	}

	.preview {
		margin-top: 1rem;
		max-width: 200px;
		max-height: 200px;
		border-radius: 4px;
		border: 1px solid #ddd;
	}

	.link-field {
		border: 1px solid #e0e0e0;
		padding: 1rem;
		border-radius: 6px;
		background: #fafafa;
	}

	.link-field input {
		margin-bottom: 0.5rem;
	}

	.loading,
	.empty {
		padding: 3rem;
		text-align: center;
		color: #999;
	}
</style>
