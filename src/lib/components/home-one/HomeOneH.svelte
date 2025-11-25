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

<section class="rt-security">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-hflex rt-security-content-wrapper">
			<div
				data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a75609"
				class="w-layout-vflex rt-security-image-wrapper"
			>
				<img
					width="397"
					height="342"
					alt={getText('digital', 'Digital')}
					src={getImage('image_1').url}
					loading="lazy"
					srcset="
						https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67ff326bbf4bb92961422ef9_Digital%20image-p-500.webp 500w,
						https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67ff326bbf4bb92961422ef9_Digital%20image.webp       791w
					"
					sizes="(max-width: 479px) 100vw, 397px"
					class="rt-radious-ten rt-autofit rt-tab-full-image"
				/><img
					width="397"
					height="342"
					alt={getText('digital', 'Digital')}
					src={getImage('image_2').url}
					loading="lazy"
					srcset="
						https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67ff326b808437661828b4b2_Digital%20image%20two-p-500.webp 500w,
						https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67ff326b808437661828b4b2_Digital%20image%20two.webp       794w
					"
					sizes="(max-width: 479px) 100vw, 397px"
					class="rt-radious-ten rt-autofit rt-tab-full-image"
				/>
			</div>
			<div class="w-layout-vflex rt-security-text-wrapper">
				<div class="w-layout-vflex rt-security-title-text">
					<h2 data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a7560d" class="rt-gap-off rt-h2-gap">{getText('section_heading', 'AI-Driven Security for a Safer Digital World')}</h2>
					<p data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a7560f">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Suscipit viverra donec scelerisque tellus in vulputate. Cursus tempus congue faucibus faucibus.')}</p>
				</div>
				<div
					data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a75611"
					class="w-layout-vflex rt-security-point-wrapper active"
				>
					<div class="rt-text-style-h5">{getText('ai_that_protects', 'AI That Protects and Secures Your Data')}</div>
					<p class="rt-security-point-paragraph rt-gap-off active">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Massa senectus enim sed in rutrum aliquet fames a. Nisl massa a imperdiet.')}</p>
				</div>
				<div
					data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a75616"
					class="w-layout-vflex rt-security-point-wrapper two"
				>
					<div class="rt-text-style-h5">{getText('smart_ai_for', 'Smart AI for Ultimate Cybersecurity')}</div>
					<p
						data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a75619"
						class="rt-security-point-paragraph rt-gap-off two"
					>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Massa senectus enim sed in rutrum aliquet fames a. Nisl massa a imperdiet.')}</p>
				</div>
			</div>
		</div>
	</div>
</section>
