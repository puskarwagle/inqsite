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

<section class="rt-innovation">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-vflex rt-innovation-top-text rt-desktop-text-center">
			<h2 data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a75556" class="rt-gap-off rt-h2-gap">{getText('section_heading', 'AI That Bridges Innovation and Human Intelligence')}</h2>
			<p data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a75558" class="rt-gap-off rt-h2-paragraph-gap">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Suscipit viverra donec scelerisque tellus in vulputate. Cursus tempus congue faucibus faucibus dui feugiat sit.')}</p>
		</div>
		<div class="w-layout-grid rt-innovation-card-wrapper">
			<div
				data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a7555b"
				class="w-layout-vflex rt-innovation-card"
			>
				<div class="w-layout-hflex rt-innovation-image-block rt-overflow-hidden">
					<img
						width="488"
						height="350"
						alt={getText('intelligence', 'Intelligence')}
						src={getImage('image_1').url}
						loading="lazy"
						srcset="
							https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd46958348c1c7eb22e023_Intelligence%25202-p-500.webp 500w,
							https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd46958348c1c7eb22e023_Intelligence%25202-p-800.webp 800w,
							https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd46958348c1c7eb22e023_Intelligence%202.webp         976w
						"
						sizes="(max-width: 767px) 100vw, 488px"
						class="rt-innovation-image rt-autofit rt-tab-full-image"
					/>
				</div>
				<div class="w-layout-vflex rt-innovation-text-wrap">
					<div class="rt-text-style-h4">{getText('ai_that_adapts', 'AI That Adapts to You')}</div>
					<p class="rt-innovation-paragraph">{getText('in_dui_cras', 'In dui cras odio sodales morbi ac egestas. Ipsum integer ultricies vitae purus amet.')}</p>
					<a
						data-wf--rt-button-v1--variant="base"
						data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
						href={getLink('service_one_link').href || 'service-one.html'}
						class="rt-button w-inline-block"
						><div class="w-layout-hflex rt-button-text-image-wrapper">
							<div class="w-layout-hflex rt-button-text-wrap">
								<div class="rt-button-text rt-button-hover-in">{getText('explore_more', 'Explore More')}</div>
								<div class="rt-button-text rt-button-hover-out">{getText('explore_more', 'Explore More')}</div>
							</div>
							<img
								width="10"
								height="9"
								alt={getText('arrow', 'Arrow')}
								src={getImage('image_2').url}
								loading="lazy"
								class="rt-button-arrow-image"
							/></div
					></a>
				</div>
			</div>
			<div
				data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a75567"
				class="w-layout-vflex rt-innovation-card"
			>
				<div class="w-layout-hflex rt-innovation-image-block rt-overflow-hidden">
					<img
						width="488"
						height="350"
						alt={getText('dashboard', 'Dashboard')}
						src={getImage('image_3').url}
						loading="lazy"
						srcset="
							https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd47f295e8dcb7a13ad9ad_Dashboard-p-500.webp 500w,
							https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd47f295e8dcb7a13ad9ad_Dashboard-p-800.webp 800w,
							https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd47f295e8dcb7a13ad9ad_Dashboard.webp       849w
						"
						sizes="(max-width: 767px) 100vw, 488px"
						class="rt-innovation-image rt-autofit rt-tab-full-image"
					/>
				</div>
				<div class="w-layout-vflex rt-innovation-text-wrap">
					<div class="rt-text-style-h4">{getText('aipowered_solutions_for', 'AI-Powered Solutions for Growth')}</div>
					<p class="rt-innovation-paragraph">{getText('in_dui_cras', 'In dui cras odio sodales morbi ac egestas. Ipsum integer ultricies vitae purus amet.')}</p>
					<a
						data-wf--rt-button-v1--variant="base"
						data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
						href={getLink('service_one_link').href || 'service-one.html'}
						class="rt-button w-inline-block"
						><div class="w-layout-hflex rt-button-text-image-wrapper">
							<div class="w-layout-hflex rt-button-text-wrap">
								<div class="rt-button-text rt-button-hover-in">{getText('explore_more', 'Explore More')}</div>
								<div class="rt-button-text rt-button-hover-out">{getText('explore_more', 'Explore More')}</div>
							</div>
							<img
								width="10"
								height="9"
								alt={getText('arrow', 'Arrow')}
								src={getImage('image_2').url}
								loading="lazy"
								class="rt-button-arrow-image"
							/></div
					></a>
				</div>
			</div>
		</div>
	</div>
</section>
