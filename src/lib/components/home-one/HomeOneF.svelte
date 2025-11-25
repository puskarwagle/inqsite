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

<section class="rt-works">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-hflex rt-work-content">
			<div class="w-layout-vflex rt-work-text-wrapper">
				<div class="w-layout-vflex rt-work-text">
					<h2 data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a755b5" class="rt-gap-off rt-h2-gap">{getText('section_heading', 'AI That Works Behind the Scenes to Enhance Your Life')}</h2>
					<p
						data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a755b7"
						class="rt-work-paragraph rt-gap-off rt-h2-paragraph-gap"
					>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Suscipit viverra donec scelerisque tellus in vulputate. Cursus tempus congue faucibus faucibus.')}</p>
				</div>
				<div class="w-layout-vflex rt-work-point-block">
					<div
						data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a755ba"
						class="w-layout-hflex rt-work-point active"
					>
						<div
							data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a755bb"
							class="w-layout-hflex rt-work-point-number active"
						>
							<div class="rt-text-style-h5">01</div>
						</div>
						<div class="rt-text-style-h5">{getText('ai_that_makes', 'AI That Makes Everyday Tasks Easier')}</div>
					</div>
					<div
						data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a755c0"
						class="w-layout-hflex rt-work-point two"
					>
						<div
							data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a755c1"
							class="w-layout-hflex rt-work-point-number"
						>
							<div class="rt-text-style-h5">02</div>
						</div>
						<div class="rt-text-style-h5">{getText('ai_that_works', 'AI That Works While You Innovate')}</div>
					</div>
					<div
						data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a755c6"
						class="w-layout-hflex rt-work-point three"
					>
						<div
							data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a755c7"
							class="w-layout-hflex rt-work-point-number"
						>
							<div class="rt-text-style-h5">03</div>
						</div>
						<div class="rt-text-style-h5">{getText('advancing_humanity_with', 'Advancing Humanity with Smart AI')}</div>
					</div>
				</div>
			</div>
			<div
				data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a755cc"
				class="w-layout-vflex rt-work-image-wrapper rt-overflow-hidden rt-position-relative"
			>
				<div class="w-layout-hflex rt-work-image-block">
					<img
						width="550"
						height="610"
						alt={getText('dashboard_image', 'Dashboard Image')}
						src={getImage('image_1').url}
						loading="lazy"
						srcset="
							https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/680b527854b22f07cfcb1939_Frame-2-p-500.webp  500w,
							https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/680b527854b22f07cfcb1939_Frame-2-p-800.webp  800w,
							https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/680b527854b22f07cfcb1939_Frame-2.webp       1046w
						"
						sizes="(max-width: 767px) 100vw, 550px"
						class="rt-work-image rt-autofit rt-tab-full-image"
					/>
				</div>
				<div class="w-layout-vflex rt-work-image-text-wrapper rt-position-relative">
					<div class="w-layout-vflex rt-work-image-text one">
						<div class="w-layout-hflex rt-work-image-box-title">
							<div class="w-layout-hflex rt-icon-block">
								<img
									width="28"
									height="28"
									alt={getText('settings', 'Settings')}
									src={getImage('image_2').url}
									loading="lazy"
								/>
							</div>
							<div class="rt-text-style-h5 rt-text-color-white">{getText('ai_that_makes', 'AI That Makes Everyday Tasks Easier')}</div>
						</div>
						<p class="rt-text-color-body-dark">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Suscipit viverra donec scelerisque tellus in vulputate. Cursus tempus congue faucibus faucibus.')}</p>
					</div>
					<div
						data-w-id="016bf853-cc66-8851-5284-f2e7eab7e569"
						class="w-layout-vflex rt-work-image-text two"
					>
						<div class="w-layout-hflex rt-work-image-box-title">
							<div class="w-layout-hflex rt-icon-block">
								<img
									width="28"
									height="28"
									alt={getText('settings', 'Settings')}
									src={getImage('image_2').url}
									loading="lazy"
								/>
							</div>
							<div class="rt-text-style-h5 rt-text-color-white">{getText('ai_that_works', 'AI That Works While You Innovate')}</div>
						</div>
						<p class="rt-text-color-body-dark">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Suscipit viverra donec scelerisque tellus in vulputate. Cursus tempus congue faucibus faucibus.')}</p>
					</div>
					<div
						data-w-id="1dce0440-1875-16ed-5cfc-e2dbd891deb5"
						class="w-layout-vflex rt-work-image-text three"
					>
						<div class="w-layout-hflex rt-work-image-box-title">
							<div class="w-layout-hflex rt-icon-block">
								<img
									width="28"
									height="28"
									alt={getText('settings', 'Settings')}
									src={getImage('image_2').url}
									loading="lazy"
								/>
							</div>
							<div class="rt-text-style-h5 rt-text-color-white">{getText('advancing_humanity_with', 'Advancing Humanity with Smart AI')}</div>
						</div>
						<p class="rt-text-color-body-dark">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Suscipit viverra donec scelerisque tellus in vulputate. Cursus tempus congue faucibus faucibus.')}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
