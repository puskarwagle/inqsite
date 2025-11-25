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

<section class="rt-company-strategie">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-vflex rt-company-strategie-box-wrapper">
			<div class="w-layout-hflex rt-company-strategie-box rt-change">
				<div class="w-layout-vflex rt-company-strategie-image-box rt-radious-fifteen rt-shadow">
					<div data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a75578" class="rt-text-style-h5">{getText('intelligent_ai_smarter', 'Intelligent AI, Smarter Decisions')}</div>
					<div class="w-layout-vflex rt-company-strategie-image-wrapper">
						<div class="w-layout-hflex rt-company-strategie-image">
							<img
								width="430"
								height="185"
								alt={getText('innovation_statistics', 'Innovation Statistics')}
								src={getImage('image_1').url}
								loading="lazy"
								data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a7557a"
								class="rt-autofit rt-tab-full-image rt-image-position-start"
							/>
						</div>
						<div class="w-layout-hflex rt-company-strategie-image">
							<img
								class="rt-autofit rt-tab-full-image rt-image-position-start"
								src={getImage('image_2').url}
								width="430"
								height="185"
								alt={getText('strategy', 'Strategy')}
								sizes="(max-width: 479px) 100vw, 430px"
								data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a7557b"
								loading="lazy"
								srcset="
									https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd47f2649775f90f30811f_Strategie%202-p-500.webp 500w,
									https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd47f2649775f90f30811f_Strategie%202-p-800.webp 800w,
									https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd47f2649775f90f30811f_Strategie%202.webp       881w
								"
							/>
						</div>
					</div>
				</div>
				<div class="rt-company-strategie-text-wrapper">
					<div
						data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a7557d"
						class="w-layout-vflex rt-company-strategie-text"
					>
						<h2 data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a7557e" class="rt-gap-off rt-h2-gap">{getText('section_heading', 'AI-Driven Growth Strategies for Enterprises')}</h2>
						<p
							data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a75580"
							class="rt-ai-innovation-strategy-paragraph"
						>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Suscipit viverra donec scelerisque tellus in vulputate. Cursus tempus congue faucibus faucibus.')}</p>
					</div>
					<div class="w-layout-vflex rt-strategie-point-block">
						<div
							data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a75583"
							class="w-layout-hflex rt-strategie-block-one"
						>
							<div class="w-layout-hflex rt-icon-block rt-overflow-hidden rt-color-colud-mist">
								<img
									width="28"
									height="28"
									alt={getText('settings', 'Settings')}
									src={getImage('image_3').url}
									loading="lazy"
								/>
							</div>
							<div class="w-layout-vflex rt-strategie-text">
								<div class="rt-text-style-h5">{getText('aipowered_smart_assistants', 'AI-Powered Smart Assistants')}</div>
								<p class="rt-gap-off">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Massa senectus enim sed in rutrum aliquet fames a. Nisl massa a imperdiet.')}</p>
							</div>
						</div>
						<div
							data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a7558b"
							class="w-layout-hflex rt-strategie-block-one"
						>
							<div class="w-layout-hflex rt-icon-block rt-overflow-hidden rt-color-colud-mist">
								<img
									width="24"
									height="24"
									alt={getText('code', 'Code')}
									src={getImage('image_4').url}
									loading="lazy"
								/>
							</div>
							<div class="w-layout-vflex rt-strategie-text">
								<div class="rt-text-style-h5">{getText('ai_that_simplifies', 'AI That Simplifies Daily Tasks')}</div>
								<p>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Nisl proin est sed ultricies magna elit eros. Aliquet nam ipsum amet orci.')}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="w-layout-hflex rt-company-strategie-box">
				<div
					data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a75594"
					class="w-layout-hflex rt-company-strategie-image-box-two rt-radious-fifteen rt-shadow"
				>
					<img
						width="489"
						height="478"
						alt={getText('workflow', 'Workflow')}
						src={getImage('image_5').url}
						loading="lazy"
						srcset="
							https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd46958348c1c7eb22e02d_Workflow-p-500.webp 500w,
							https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd46958348c1c7eb22e02d_Workflow.webp       978w
						"
						sizes="(max-width: 767px) 100vw, 489px"
						class="rt-company-strategie-image-copy rt-autofit rt-tab-full-image"
					/>
				</div>
				<div class="w-layout-vflex rt-company-strategie-text-wrapper">
					<div data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a75597">
						<h2 data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a75598" class="rt-gap-off rt-h2-gap">{getText('aipowered_workflows_for', 'AI-Powered Workflows for Maximum Efficiency')}</h2>
						<p
							data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a7559a"
							class="rt-stratagie-paragraph rt-gap-off rt-h2-paragraph-gap"
						>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Suscipit viverra donec scelerisque tellus in vulputate. Cursus tempus congue faucibus faucibus.')}</p>
					</div>
					<div data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a7559c" class="w-layout-hflex">
						<a
							data-wf--rt-button-v1--variant="base"
							data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
							href={getLink('about_link').href || 'about.html'}
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
									src={getImage('image_6').url}
									loading="lazy"
									class="rt-button-arrow-image"
								/></div
						></a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="rt-cta-wrapper-v4">
		<div data-w-id="bd3230e8-ec8c-1bea-09a2-0f683cf8d2da" class="rt-cta-v2">
			<div class="w-layout-blockcontainer rt-container-large w-container">
				<div class="rt-cta-block">
					<div class="w-layout-blockcontainer rt-container-small rt-full-container w-container">
						<div class="w-layout-hflex rt-superior-services-content">
							<div
								data-w-id="bd3230e8-ec8c-1bea-09a2-0f683cf8d2df"
								class="w-layout-hflex rt-superior-services-image-block"
							>
								<img
									width="630"
									height="351"
									alt="CTA"
									src={getImage('image_7').url}
									loading="lazy"
									srcset="
										https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6800e5cea79ab1712ce75ed1_Cta-p-500.webp   500w,
										https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6800e5cea79ab1712ce75ed1_Cta-p-800.webp   800w,
										https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6800e5cea79ab1712ce75ed1_Cta-p-1080.webp 1080w,
										https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6800e5cea79ab1712ce75ed1_Cta.webp        1258w
									"
									sizes="(max-width: 767px) 100vw, 630px"
									class="rt-radious-fifteen rt-autofit rt-tab-full-image"
								/>
							</div>
							<div class="w-layout-vflex rt-superior-services-text-wrapper">
								<h2 data-w-id="bd3230e8-ec8c-1bea-09a2-0f683cf8d2e2" class="rt-gap-off rt-h2-gap">{getText('let_us_assist', 'Let Us Assist You with Our Superior Services')}</h2>
								<p
									data-w-id="bd3230e8-ec8c-1bea-09a2-0f683cf8d2e4"
									class="rt-superior-services-paragraph rt-gap-off rt-h2-paragraph-gap"
								>
									{getText('proin_posuere_lacus', 'Proin posuere lacus egestas ultricies lobortis. Lobortis nascetur ac pulvinar fermentum augue id. Commodo odio augue.')}
								</p>
								<div data-w-id="bd3230e8-ec8c-1bea-09a2-0f683cf8d2e6">
									<a
										data-wf--rt-button-v1--variant="base"
										data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
										href={getLink('pricing_one_link').href || 'pricing-one.html'}
										class="rt-button w-inline-block"
										><div class="w-layout-hflex rt-button-text-image-wrapper">
											<div class="w-layout-hflex rt-button-text-wrap">
												<div class="rt-button-text rt-button-hover-in">{getText('join_us_today', 'Join Us Today')}</div>
												<div class="rt-button-text rt-button-hover-out">{getText('join_us_today', 'Join Us Today')}</div>
											</div>
											<img
												width="10"
												height="9"
												alt={getText('arrow', 'Arrow')}
												src={getImage('image_6').url}
												loading="lazy"
												class="rt-button-arrow-image"
											/></div
									></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
