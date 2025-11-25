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

<section class="rt-solution-v2">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-hflex rt-solution-main-block rt-position-relative">
			<div class="w-layout-vflex rt-solution-text-block-v2">
				<div class="w-layout-vflex rt-solution-text-v2">
					<h2 data-w-id="f91ff35d-189d-d17a-6525-5715d98f646f" class="rt-gap-off rt-h2-gap">{getText('section_heading', 'Advanced solutions for your needs')}</h2>
					<p data-w-id="f91ff35d-189d-d17a-6525-5715d98f6471" class="rt-gap-off">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet, verra, non facilisis lorem fringilla.')}</p>
				</div>
			</div>
			<div class="w-layout-vflex rt-solution-right-block-v2">
				<div class="w-layout-hflex rt-solution-box-v2">
					<div class="rt-solution-image-block-v2 rt-radious-fifteen rt-color-cream">
						<img
							class="rt-solution-image-v2 rt-autofit rt-tab-full-image"
							src={getImage('image_1').url}
							width="264"
							height="240"
							alt={getText('solution', 'Solution')}
							sizes="(max-width: 479px) 100vw, 264px"
							data-w-id="f91ff35d-189d-d17a-6525-5715d98f6478"
							loading="lazy"
						/>
					</div>
					<div class="w-layout-vflex rt-solution-box-text-wrapper">
						<div class="rt-text-style-h5">{getText('seamless_ai_solutions', 'Seamless AI Solutions for Modern Businesses')}</div>
						<p>{getText('lorem_ipsum_dolor', 'Lorem ipsum dolor sit amet consectetur. Turpis a risus turpis arcu in quis.')}</p>
					</div>
				</div>
				<div class="w-layout-hflex rt-solution-box-v2">
					<div class="rt-solution-image-block-v2 rt-radious-fifteen rt-change-two">
						<img
							class="rt-solution-image-v2 rt-autofit rt-tab-full-image"
							src={getImage('image_2').url}
							width="264"
							height="240"
							alt={getText('solution', 'Solution')}
							sizes="(max-width: 479px) 100vw, 264px"
							data-w-id="f91ff35d-189d-d17a-6525-5715d98f6480"
							loading="lazy"
						/>
					</div>
					<div class="w-layout-vflex rt-solution-box-text-wrapper">
						<div class="rt-text-style-h5">{getText('innovative_ai_transforming', 'Innovative AI Transforming Digital Landscapes')}</div>
						<p>{getText('lorem_ipsum_dolor', 'Lorem ipsum dolor sit amet consectetur. Turpis a risus turpis arcu in quis.')}</p>
					</div>
				</div>
				<div class="w-layout-hflex rt-solution-box-v2">
					<div class="rt-solution-image-block-v2 rt-radious-fifteen rt-color-light-pink rt-change">
						<img
							class="rt-solution-image-v2 rt-autofit rt-tab-full-image"
							src={getImage('image_3').url}
							width="264"
							height="240"
							alt={getText('solution', 'Solution')}
							sizes="(max-width: 479px) 100vw, 264px"
							data-w-id="f91ff35d-189d-d17a-6525-5715d98f6488"
							loading="lazy"
						/>
					</div>
					<div class="w-layout-vflex rt-solution-box-text-wrapper">
						<div class="rt-text-style-h5">{getText('aipowered_systems_for', 'AI-Powered Systems for Maximum Efficiency')}</div>
						<p>{getText('lorem_ipsum_dolor', 'Lorem ipsum dolor sit amet consectetur. Turpis a risus turpis arcu in quis.')}</p>
					</div>
				</div>
				<div class="w-layout-hflex rt-solution-box-v2">
					<div class="rt-solution-image-block-v2 rt-radious-fifteen rt-color-light-blue">
						<img
							class="rt-solution-image-v2 rt-autofit rt-tab-full-image"
							src={getImage('image_4').url}
							width="264"
							height="240"
							alt={getText('intelligence', 'Intelligence')}
							sizes="(max-width: 479px) 100vw, 264px"
							data-w-id="f91ff35d-189d-d17a-6525-5715d98f6490"
							loading="lazy"
						/>
					</div>
					<div class="w-layout-vflex rt-solution-box-text-wrapper">
						<div class="rt-text-style-h5">{getText('redefining_business_with', 'Redefining Business with Artificial Intelligence')}</div>
						<p>{getText('lorem_ipsum_dolor', 'Lorem ipsum dolor sit amet consectetur. Turpis a risus turpis arcu in quis.')}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
