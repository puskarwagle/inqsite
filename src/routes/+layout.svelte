<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/shared/Header.svelte';
	import { page } from '$app/stores';

	let { children } = $props();

	// Don't show Header on admin page or error page
	let isAdminPage = $derived($page.url.pathname === '/admin');
	let isErrorPage = $derived($page.error);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if !isAdminPage && !isErrorPage}
	<Header />
{/if}

{@render children()}
