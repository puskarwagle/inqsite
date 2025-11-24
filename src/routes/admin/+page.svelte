<script>
	import { onMount } from 'svelte';

	let components = [];
	let selectedComponent = '';
	let content = null;
	let loading = false;
	let saving = false;
	let message = '';

	onMount(async () => {
		await loadComponents();
	});

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
				message = '✓ Saved successfully!';
				setTimeout(() => (message = ''), 3000);
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
	<style>
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}
	</style>
</svelte:head>

<div class="admin-container">
	<header class="admin-header">
		<h1>Content Management System</h1>
		<a href="/" class="view-site">← View Site</a>
	</header>

	<div class="admin-content">
		<div class="sidebar">
			<label for="component-select">Select Component:</label>
			<select
				id="component-select"
				bind:value={selectedComponent}
				on:change={loadContent}
				class="component-select"
			>
				{#each components as comp}
					<option value={comp.name}>{comp.name}</option>
				{/each}
			</select>

			<div class="component-info">
				{#if content}
					<p class="info-text">
						{Object.keys(content.texts || {}).length} texts<br />
						{Object.keys(content.images || {}).length} images<br />
						{Object.keys(content.links || {}).length} links
					</p>
				{/if}
			</div>
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
		width: 280px;
		background: #fff;
		border-right: 1px solid #e0e0e0;
		padding: 2rem;
	}

	.sidebar label {
		display: block;
		font-size: 0.875rem;
		font-weight: 500;
		color: #666;
		margin-bottom: 0.5rem;
	}

	.component-select {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid #ddd;
		border-radius: 6px;
		font-size: 0.95rem;
		margin-bottom: 1.5rem;
	}

	.component-info {
		padding: 1rem;
		background: #f9f9f9;
		border-radius: 6px;
	}

	.info-text {
		font-size: 0.875rem;
		color: #666;
		line-height: 1.6;
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
