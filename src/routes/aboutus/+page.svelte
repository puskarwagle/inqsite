<script>
	import { onMount } from 'svelte';
	import Header from '$lib/components/shared/Header.svelte';
	import AboutA from '$lib/components/about/AboutA.svelte';
	import AboutB from '$lib/components/about/AboutB.svelte';
	import AboutC from '$lib/components/about/AboutC.svelte';
	import AboutD from '$lib/components/about/AboutD.svelte';
	import AboutE from '$lib/components/about/AboutE.svelte';
	import AboutF from '$lib/components/about/AboutF.svelte';
	import AboutG from '$lib/components/about/AboutG.svelte';
	import AboutH from '$lib/components/about/AboutH.svelte';
	import Footer from '$lib/components/shared/Footer.svelte';

	// Get content data from server
	export let data;

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
				setTimeout(() => {
					if (window.Webflow) {
						try {
							window.Webflow.destroy();
							window.Webflow.ready();
							const ix2 = window.Webflow.require('ix2');
							if (ix2 && ix2.init) {
								ix2.init();
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
<div id="AboutA"><AboutA content={data.content?.AboutA || {}} /></div>
<div id="AboutB"><AboutB content={data.content?.AboutB || {}} /></div>
<div id="AboutC"><AboutC content={data.content?.AboutC || {}} /></div>
<div id="AboutD"><AboutD content={data.content?.AboutD || {}} /></div>
<div id="AboutE"><AboutE content={data.content?.AboutE || {}} /></div>
<div id="AboutF"><AboutF content={data.content?.AboutF || {}} /></div>
<div id="AboutG"><AboutG content={data.content?.AboutG || {}} /></div>
<div id="AboutH"><AboutH content={data.content?.AboutH || {}} /></div>
<div id="Footer"><Footer content={data.content?.Footer || {}} /></div>
