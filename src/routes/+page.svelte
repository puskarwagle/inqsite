<script>
  import Header from '$lib/components/Header.svelte';

  // Add w-mod-js and w-mod-touch classes immediately
  if (typeof document !== 'undefined') {
    const n = document.documentElement;
    const t = ' w-mod-';
    n.className += t + 'js';
    if ('ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch)) {
      n.className += t + 'touch';
    }
  }
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
      template: '{{wf {"path":"symbol","type":"PlainText"} }} {{wf {"path":"amount","type":"CommercePrice"} }} {{wf {"path":"currencyCode","type":"PlainText"} }}',
      hideDecimalForWholeNumbers: false
    };
  </script>
  <link rel="stylesheet" href="/webtemplate/style.css">
  <link rel="stylesheet" href="/webtemplate/style2.css">
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=67a1ea8462c51e3f81e40a7e" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="https://wubflow-shield.nocodexport.dev/67a1ea8462c51e3f81e40a7e/js/webflow.b84d2903.f63c6a72bbd4d49f.js"></script>
</svelte:head>

<Header />
