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

<section class="rt-service-v1-hero rt-overflow-hidden">
	<div class="w-layout-hflex rt-productivity-wrapper-v2">
		<div class="w-layout-hflex rt-productivity-content-v2">
			<div class="w-layout-hflex rt-productivity-text-block-v2">
				<div class="w-layout-vflex rt-productivity-text-wrapper-v2">
					<div class="w-layout-vflex rt-productivity-text-v2">
						<h1 data-w-id="b1df3202-e056-36f7-b9dc-7f9b02f8b539" class="rt-gap-off rt-h1-gap">
							{getText('hero_heading', 'Elevate Productivity with Future-Ready AI Applications')}
						</h1>
						<p
							data-w-id="b1df3202-e056-36f7-b9dc-7f9b02f8b53b"
							class="rt-productivity-paragraph-v2 rt-gap-off rt-h2-paragraph-gap"
						>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Amet ullamcorper atsit eros risus eget tristique diam imperdiet. Eleifend')}</p>
					</div>
					<div data-w-id="2531efb5-0091-d846-b452-26d7bf230932">
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
									alt="ServiceOneA"
									src={getImage('button_arrow').url}
									loading="lazy"
									class="rt-button-arrow-image"
								/>
							</div></a
						>
					</div>
				</div>
			</div>
			<div class="w-layout-hflex rt-productivity-image-wrapper">
				<img
					src={getImage('dashboard_main').url}
					data-w-id="78907169-fcd1-afed-0c8f-99c8abc938ab"
					width="908"
					height="646"
					alt="ServiceOneA"
					class="rt-produvtivity-image rt-autofit rt-tab-full-image"
				/><img
					src={getImage('line_decoration').url}
					loading="lazy"
					width="137"
					height="117"
					alt="ServiceOneA"
					data-w-id="21d71efc-19e9-66f9-877c-13339e404bbe"
					class="rt-produvtivity-line-float"
				/>
				<div data-w-id="d2823ce3-e785-ee61-02e2-3ff49e42e79c" class="rt-produvtivity-image-float">
					<img
						src={getImage('robot_float').url}
						loading="lazy"
						width="409"
						height="176"
						alt="ServiceOneA"
						class="rt-autofit rt-robot-image"
					/>
				</div>
			</div>
		</div>
	</div>
	<div class="rt-green-dot"></div>
	<div class="rt-dark-yellow-dot"></div>
	<div class="rt-dark-yellow-dot-two"></div>
	<div class="rt-violet-dot"></div>
	<div class="rt-violet-dot-two"></div>
</section>
