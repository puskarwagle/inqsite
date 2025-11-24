<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/shared/Header.svelte';

	let { children } = $props();

	// Don't show Header on admin page
	let isAdminPage = $state(false);

	$effect(() => {
		if (typeof window !== 'undefined') {
			isAdminPage = window.location.pathname === '/admin';
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if !isAdminPage}
	<Header />
{/if}

{@render children()}
