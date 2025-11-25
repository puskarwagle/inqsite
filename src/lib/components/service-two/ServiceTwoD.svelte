<script>
	// CMS Integration
	export let content = {
		texts: {},
		images: {},
		links: {}
	};

	const getText = (key, fallback) => content.texts?.[key] || fallback;
	const getImage = (key) => content.images?.[key] || {};
	const getLink = (key) => content.links?.[key] || {};
</script>

<section class="rt-business">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-hflex rt-data-driven-content">
			<div
				data-w-id="20e237a9-ba46-b268-d781-7af93948c600"
				class="w-layout-hflex rt-data-driven-image-wrapper rt-shadow rt-overflow-hidden"
			>
				<img
					src={getImage('leverage_dashboard').url}
					loading="lazy"
					width="711"
					height="430"
					alt="ServiceTwoD"
					sizes="(max-width: 767px) 100vw, 711px"
					class="rt-data-driven-image"
				/>
			</div>
			<div class="w-layout-vflex rt-data-driven-text-wrapper">
				<div class="w-layout-vflex rt-data-driven-text">
					<h2 data-w-id="80f88a04-db08-2628-3d94-c471f131f1cb" class="rt-gap-off rt-h2-gap">
						{getText('section_1_heading', 'Leveraging AI for Data-Driven Business Excellence')}
					</h2>
					<p
						data-w-id="5cf932be-3945-2eee-e653-b53f7facae52"
						class="rt-gap-off rt-h2-paragraph-gap"
					>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat elit at sollicitudin cursus. Nullam hendrerit orci velersf pulvinar vestibulum. Donec vitae mattis lorem.')}</p>
				</div>
				<div data-w-id="cc026296-d7b1-3e2d-f2e4-777c3df99be9">
					<a
						data-wf--rt-button-v1--variant="base"
						data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
						href={getLink('about_link').href || 'about.html'}
						class="rt-button w-inline-block"
						><div class="w-layout-hflex rt-button-text-image-wrapper">
							<div class="w-layout-hflex rt-button-text-wrap">
								<div class="rt-button-text rt-button-hover-in">{getText('explore_more_button', 'Explore More')}</div>
								<div class="rt-button-text rt-button-hover-out">{getText('explore_more_button', 'Explore More')}</div>
							</div>
							<img
								width="10"
								height="9"
								alt="ServiceTwoD"
								src={getImage('button_arrow').url}
								loading="lazy"
								class="rt-button-arrow-image"
							/>
						</div></a
					>
				</div>
			</div>
		</div>
		<div class="w-layout-hflex rt-artificial-block">
			<div class="w-layout-vflex rt-artificial-text-wrapper">
				<div class="w-layout-vflex rt-data-driven-text">
					<h2 data-w-id="6a3e135c-2809-30ec-0335-3884a3b04f68" class="rt-gap-off rt-h2-gap">
						{getText('section_2_heading', 'Use AI Desk to Master Artificial Intelligence')}
					</h2>
					<p
						data-w-id="6a3e135c-2809-30ec-0335-3884a3b04f6a"
						class="rt-data-driven-paragraph rt-h2-gap"
					>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id eros blandit aliquam odio et porta diam. Proin tempor porta purus rutrum elementum lorem ipsum dolor sit amet consectetur.')}</p>
					<div class="w-layout-vflex rt-optimized-points-v2">
						<div
							data-w-id="9542f032-5bfc-8e61-4522-154fb08158a0"
							class="w-layout-hflex rt-optimize-points-box"
						>
							<img
								src={getImage('tick_icon').url}
								loading="lazy"
								width="24"
								height="24"
								alt="ServiceTwoD"
							/>
							<div class="rt-text-style-h6">{getText('feature_1_heading', 'AI Elevated Performance')}</div>
						</div>
						<div
							data-w-id="9542f032-5bfc-8e61-4522-154fb08158a4"
							class="w-layout-hflex rt-optimize-points-box"
						>
							<img
								src={getImage('tick_icon').url}
								loading="lazy"
								width="24"
								height="24"
								alt="ServiceTwoD"
							/>
							<div class="rt-text-style-h6">{getText('feature_2_heading', 'Redefining Intelligence with AI')}</div>
						</div>
						<div
							data-w-id="9542f032-5bfc-8e61-4522-154fb08158a8"
							class="w-layout-hflex rt-optimize-points-box"
						>
							<img
								src={getImage('tick_icon').url}
								loading="lazy"
								width="24"
								height="24"
								alt="ServiceTwoD"
							/>
							<div class="rt-text-style-h6">{getText('feature_3_heading', 'Intelligent Automation, Powered by AI')}</div>
						</div>
					</div>
				</div>
			</div>
			<div
				data-w-id="6a3e135c-2809-30ec-0335-3884a3b04f64"
				class="w-layout-hflex rt-data-driven-image-wrapper rt-shadow rt-overflow-hidden"
			>
				<img
					src={getImage('campaign_dashboard').url}
					loading="lazy"
					width="636"
					height="500"
					alt="ServiceTwoD"
					sizes="(max-width: 767px) 100vw, 636px"
					class="rt-data-driven-image-v2"
				/>
			</div>
		</div>
	</div>
</section>
