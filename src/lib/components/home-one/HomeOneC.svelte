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

<section class="rt-intelligence">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-vflex rt-artificial-intelligence-content">
			<div class="w-layout-hflex rt-intelligence-text-wrapper">
				<div class="w-layout-vflex rt-intelligence-text">
					<h2 data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a75517" class="rt-gap-off rt-h2-gap">{getText('section_heading', 'Unleashing the Power of Artificial Intelligence')}</h2>
					<p
						data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a75519"
						class="rt-gap-off rt-h2-paragraph-gap"
					>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur adipiscing elit In et sapien vitae augue lobo Sed sollicitudin nec.')}</p>
				</div>
				<div data-w-id="e62f9135-a6e4-5698-3b65-c4382199019b">
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
								alt={getText('arrow', 'Arrow')}
								src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg'}
								loading="lazy"
								class="rt-button-arrow-image"
							/></div
					></a>
				</div>
			</div>
			<div class="w-layout-grid rt-intelligence-box-wrapper">
				<div
					data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a75501"
					class="w-layout-vflex rt-intelligence-box"
				>
					<div class="w-layout-hflex rt-icon-block-v2">
						<img
							width="29"
							height="29"
							alt={getText('brand', 'Brand')}
							src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805e0a147f9db32c77edf60_Group%201321315615%20(1).svg'}
							loading="lazy"
						/>
					</div>
					<div class="w-layout-vflex rt-intelligence-box-text-wrapper">
						<div class="rt-text-style-h5">{getText('intelligent_ai_tools', 'Intelligent AI Tools Driving Growth')}</div>
						<p class="rt-gap-off">{getText('lorem_ipsum_dolor', 'Lorem ipsum dolor sit amet consectetur adipiscing elit In et sapien')}</p>
					</div>
				</div>
				<div
					data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a75506"
					class="w-layout-vflex rt-intelligence-box"
				>
					<div class="w-layout-hflex rt-icon-block-v2">
						<img
							width="25"
							height="25"
							alt={getText('brand', 'Brand')}
							src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805e0a14c9eef54d4a7996d_Group%201321315616.svg'}
							loading="lazy"
						/>
					</div>
					<div class="w-layout-vflex rt-intelligence-box-text-wrapper">
						<div class="rt-text-style-h5">{getText('aipowered_solutions_for', 'AI-Powered Solutions for Growth')}</div>
						<p class="rt-gap-off">{getText('lorem_ipsum_dolor', 'Lorem ipsum dolor sit amet consectetur adipiscing elit In et sapien')}</p>
					</div>
				</div>
				<div
					data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a7550b"
					class="w-layout-vflex rt-intelligence-box"
				>
					<div class="w-layout-hflex rt-icon-block-v2">
						<img
							width="33"
							height="27"
							alt={getText('brand', 'Brand')}
							src={getImage('image_4').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805e134401c74ef906779d2_Group%201321315624.svg'}
							loading="lazy"
						/>
					</div>
					<div class="w-layout-vflex rt-intelligence-box-text-wrapper">
						<div class="rt-text-style-h5">{getText('ai_solutions_to', 'AI Solutions to Scale Smarter')}</div>
						<p class="rt-gap-off">{getText('lorem_ipsum_dolor', 'Lorem ipsum dolor sit amet consectetur adipiscing elit In et sapien')}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
