<script>
	// Accept content from parent page
	export let content = {
		texts: {},
		images: {},
		links: {}
	};

	// Helper function to get content with fallback
	const getText = (key, fallback) => content.texts?.[key] || fallback;
	const getImage = (key) => content.images?.[key] || {};
	const getLink = (key) => content.links?.[key] || {};
</script>

<section class="rt-growth">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-hflex rt-growth-wrapper">
			<div class="w-layout-vflex rt-growth-text-wrapper">
				<div class="rt-mobile-text-center rt-change">
					<h2 data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce9a" class="rt-gap-off rt-h2-gap">{getText('section_heading', 'Unlock Growth with Intelligent AI-Powered Technologies')}</h2>
					<p
						data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce9c"
						class="rt-growth-paragraph rt-gap-off rt-h2-paragraph-gap"
					>
						Lorem ipsum dolor sit amet consectetur. Convallis eget phasellus eget nibh eu ut etiam.
						Tellus neque cras condimentum tristique a tempor. In auctor cras accumsan nam. Enim orci
						fermentum ultrices sit donec.
					</p>
				</div>
				<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce9e" class="w-layout-hflex">
					<a
						data-wf--rt-button-v1--variant="base"
						data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
						href="about.html"
						class="rt-button w-inline-block"
						><div class="w-layout-hflex rt-button-text-image-wrapper">
							<div class="w-layout-hflex rt-button-text-wrap">
								<div class="rt-button-text rt-button-hover-in">{getText('explore_more', 'Explore More')}</div>
								<div class="rt-button-text rt-button-hover-out">{getText('explore_more', 'Explore More')}</div>
							</div>
							<img
								width="10"
								height="9"
								alt="Arrow"
								src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg'}
								loading="lazy"
								class="rt-button-arrow-image"
							/></div
					></a>
				</div>
			</div>
			<div
				data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cea3"
				class="w-layout-hflex rt-growth-image-block"
			>
				<img
					class="rt-radious-fifteen rt-autofit rt-tab-full-image"
					src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7fec06_Growth.webp'}
					width="399"
					height="397"
					alt="Growth"
					sizes="(max-width: 479px) 100vw, 399px"
					data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cea4"
					loading="lazy"
					srcset="
						https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7fec06_Growth-p-500.webp 500w,
						https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7fec06_Growth.webp       797w
					"
				/>
			</div>
		</div>
	</div>
</section>
