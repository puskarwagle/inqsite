<script>
	import { onMount } from 'svelte';
	import Header from '$lib/components/shared/Header.svelte';
	import HomeA from '$lib/components/home/HomeA.svelte';
	import HomeB from '$lib/components/home/HomeB.svelte';
	import HomeC from '$lib/components/home/HomeC.svelte';
	import HomeD from '$lib/components/home/HomeD.svelte';
	import HomeE from '$lib/components/home/HomeE.svelte';
	import HomeF from '$lib/components/home/HomeF.svelte';
	import HomeG from '$lib/components/home/HomeG.svelte';
	import HomeH from '$lib/components/home/HomeH.svelte';
	import HomeI from '$lib/components/home/HomeI.svelte';
	import HomeL from '$lib/components/home/HomeL.svelte';
	import Footer from '$lib/components/shared/Footer.svelte';

	// Get content data from server
	export let data;

	// Add w-mod-js and w-mod-touch classes immediately
	if (typeof document !== 'undefined') {
		const n = document.documentElement;
		const t = ' w-mod-';
		n.className += t + 'js';
		if (
			'ontouchstart' in window ||
			(window.DocumentTouch && document instanceof window.DocumentTouch)
		) {
			n.className += t + 'touch';
		}
	}

	onMount(() => {
		// Ensure scripts load in order and reinitialize Webflow
		const loadScript = (src, integrity, crossOrigin) => {
			return new Promise((resolve, reject) => {
				if (document.querySelector(`script[src="${src}"]`)) {
					resolve();
					return;
				}
				const script = document.createElement('script');
				script.src = src;
				if (integrity) script.integrity = integrity;
				if (crossOrigin) script.crossOrigin = crossOrigin;
				script.onload = resolve;
				script.onerror = reject;
				document.body.appendChild(script);
			});
		};

		// Load jQuery then Webflow
		loadScript(
			'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=67a1ea8462c51e3f81e40a7e',
			'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=',
			'anonymous'
		)
			.then(() => {
				return loadScript(
					'https://wubflow-shield.nocodexport.dev/67a1ea8462c51e3f81e40a7e/js/webflow.b84d2903.f63c6a72bbd4d49f.js'
				);
			})
			.then(() => {
				// Give DOM a moment to settle, then reinitialize Webflow
				setTimeout(() => {
					if (window.Webflow) {
						try {
							window.Webflow.destroy();
							window.Webflow.ready();
							const ix2 = window.Webflow.require('ix2');
							if (ix2 && ix2.init) {
								ix2.init();
								console.log('Webflow IX2 initialized');
							}
						} catch (e) {
							console.warn('Webflow init error:', e);
						}
					}
				}, 100);
			})
			.catch((err) => {
				console.warn('Script loading failed:', err);
			});
	});
</script>

<svelte:head>
	<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
	<script>
		WebFont.load({
			google: {
				families: ['Inter:regular,500,600,700,800', 'Manrope:regular,600,700']
			}
		});
	</script>
	<script>
		window.__WEBFLOW_CURRENCY_SETTINGS = {
			currencyCode: 'USD',
			symbol: '$',
			decimal: '.',
			fractionDigits: 2,
			group: ',',
			template:
				'{{wf {"path":"symbol","type":"PlainText"} }} {{wf {"path":"amount","type":"CommercePrice"} }} {{wf {"path":"currencyCode","type":"PlainText"} }}',
			hideDecimalForWholeNumbers: false
		};
	</script>
	<link rel="stylesheet" href="/webtemplate/style.css" />
	<link rel="stylesheet" href="/webtemplate/style2.css" />
</svelte:head>

<div id="Header"><Header content={data.content?.Header || {}} /></div>
<div id="HomeA"><HomeA content={data.content?.HomeA || {}} /></div>
<div id="HomeB"><HomeB content={data.content?.HomeB || {}} /></div>
<div id="HomeC"><HomeC content={data.content?.HomeC || {}} /></div>
<div id="HomeD"><HomeD content={data.content?.HomeD || {}} /></div>
<div id="HomeE"><HomeE content={data.content?.HomeE || {}} /></div>
<div id="HomeF"><HomeF content={data.content?.HomeF || {}} /></div>
<div id="HomeG"><HomeG content={data.content?.HomeG || {}} /></div>
<div id="HomeH"><HomeH content={data.content?.HomeH || {}} /></div>
<div id="HomeI"><HomeI content={data.content?.HomeI || {}} /></div>
<div id="HomeL"><HomeL content={data.content?.HomeL || {}} /></div>
<div id="Footer"><Footer content={data.content?.Footer || {}} /></div>
