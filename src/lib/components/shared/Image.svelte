<script>
  export let src;
  export let alt = '';
  export let width = 'auto';
  export let height = 'auto';
  export let loading = 'lazy';
  export let sizes = '';
  export let srcset = '';
  export let className = '';

  import { base } from '$app/paths';

  $: isAbsolute = src && (src.startsWith('http') || src.startsWith('https'));
</script>

{#if isAbsolute}
  <img {src} {alt} {width} {height} {loading} {sizes} {srcset} class={className} />
{:else if src}
  <img src={base + src} {alt} {width} {height} {loading} {sizes} {srcset} class={className} />
{/if}
