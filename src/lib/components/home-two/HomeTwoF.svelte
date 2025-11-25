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

<section data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce74" class="rt-ai-innovation">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="rt-innovation-sticky-outer">
			<div class="w-layout-hflex rt-innovation-sticky-inner">
				<div class="w-layout-hflex rt-ai-innovation-wrapper">
					<div
						data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce77"
						class="w-layout-hflex rt-ai-innovation-image-block"
					>
						<div class="rt-ai-innovation-mobile-one">
							<img
								src={getImage('image_1').url}
								loading="lazy"
								width="310"
								height="630"
								alt={getText('innovation', 'Innovation')}
								sizes="(max-width: 479px) 100vw, 310px"
								class="rt-ai-innovation-mobile-one-image rt-autofit"
							/>
						</div>
						<div class="rt-ai-innovation-mobile-two">
							<img
								src={getImage('image_2').url}
								loading="lazy"
								width="310"
								height="630"
								alt={getText('innovation', 'Innovation')}
								sizes="(max-width: 479px) 100vw, 310px"
								class="rt-ai-innovation-mobile-two-image rt-autofit"
							/>
						</div>
					</div>
					<div class="w-layout-vflex rt-ai-innovation-text-wrapper">
						<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce7a">
							<h2 data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce7b" class="rt-gap-off rt-h2-gap">{getText('section_heading', 'AI-Enabled Innovations to Elevate Your Business')}</h2>
							<p
								data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce7d"
								class="rt-ai-innovation-paragraph rt-gap-off rt-h2-paragraph-gap"
							>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Suscipit viverra donec scelerisque tellus in vulputate. Cursus tempus congue faucibus faucibus dui feugiat sit.')}</p>
						</div>
						<div class="w-layout-vflex rt-innovation-point-block">
							<div
								data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce80"
								class="w-layout-hflex rt-innovation-block-one"
							>
								<div class="w-layout-hflex rt-icon-block rt-overflow-hidden rt-color-colud-mist">
									<img
										width="24"
										height="24"
										alt={getText('settings', 'Settings')}
										src={getImage('image_3').url}
										loading="lazy"
									/>
								</div>
								<div class="w-layout-vflex rt-innovation-small-title-one">
									<div class="rt-text-style-h5">{getText('realtime_ai_insights', 'Real-Time AI Insights')}</div>
									<p>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Massa senectus enim sed in rutrum aliquet fames a. Nisl massa a imperdiet.')}</p>
								</div>
							</div>
							<div
								data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce88"
								class="w-layout-hflex rt-innovation-block-one"
							>
								<div class="w-layout-hflex rt-icon-block rt-overflow-hidden rt-color-colud-mist">
									<img
										width="20"
										height="20"
										alt={getText('configuration', 'Configuration')}
										src={getImage('image_4').url}
										loading="lazy"
									/>
								</div>
								<div class="w-layout-vflex rt-innovation-small-title-one">
									<div class="rt-text-style-h5">{getText('predictive_analytics', 'Predictive Analytics')}</div>
									<p>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Nisl proin est sed ultricies magna elit eros. Aliquet nam ipsum amet orci.')}</p>
								</div>
							</div>
						</div>
						<div
							data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce90"
							class="w-layout-hflex rt-button-block"
						>
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
										src={getImage('image_5').url}
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
</section>
