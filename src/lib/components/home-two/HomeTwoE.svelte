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

<section class="rt-powered-solution">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-vflex rt-powered-solution-title rt-desktop-text-center">
			<h2 data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce52" class="rt-gap-off rt-h2-gap">{getText('section_heading', 'AI-Powered Choices, Superior Results')}</h2>
			<p
				data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce54"
				class="rt-powered-solution-paragraph rt-gap-off rt-h2-paragraph-gap"
			>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Suscipit viverra donec scelerisque tellus in vulputate. Cursus tempus congue faucibus faucibus dui feugiat sit.')}</p>
		</div>
		<div class="w-layout-hflex rt-powered-solution-card-wrapper">
			<div
				data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce57"
				class="w-layout-vflex rt-powered-solution-card"
			>
				<div class="rt-powered-solution-card-text rt-text-style-h5">{getText('aipowered_solutions_for', 'AI-Powered Solutions for Growth')}</div>
				<p class="rt-powered-solution-card-paragraph">{getText('ac_vulputate_eros', 'Ac vulputate eros nibh at velit. Donec ut hendrerit urna. Aenean tempor lobortis ornare.')}</p>
				<div class="w-layout-hflex rt-button-block">
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
								alt="HomeTwoE"
								src={getImage('image_1').url}
								loading="lazy"
								class="rt-button-arrow-image"
							/></div
					></a>
				</div>
				<img
					width="95"
					height="114"
					alt="HomeTwoE"
					src={getImage('image_2').url}
					loading="lazy"
					data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce61"
					class="rt-powered-solution-rocket-image"
				/>
			</div>
			<div
				data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce62"
				class="w-layout-hflex rt-powered-solution-card-two rt-radious-fifteen rt-overflow-hidden"
			>
				<div class="w-layout-vflex rt-powered-solution-card-text-wrapper">
					<div class="rt-powered-solution-card-text rt-text-style-h5">{getText('empowering_expansion_with', 'Empowering Expansion with Intelligent AI')}</div>
					<div class="w-layout-hflex rt-powered-solution-points rt-top-padding">
						<div class="rt-black-dot"></div>
						<div class="rt-text-color-black">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet')}</div>
					</div>
					<div class="w-layout-hflex rt-powered-solution-points rt-change">
						<div class="rt-black-dot"></div>
						<div class="rt-text-color-black">{getText('ac_vulputate_eros_nibh', 'Ac vulputate eros nibh at velit.')}</div>
					</div>
					<a
						data-wf--rt-button-v2--variant="base"
						data-w-id="f63f91f4-b7e1-4ea7-4fb5-ef7294740b09"
						href={getLink('service_two_link').href || 'service-two.html'}
						class="rt-button rt-button-black w-inline-block"
						><div class="w-layout-hflex rt-button-text-image-wrapper color-change">
							<div class="w-layout-hflex rt-button-text-wrap">
								<div class="rt-button-text rt-color-change rt-button-hover-in">{getText('explore_more', 'Explore More')}</div>
								<div class="rt-button-text rt-color-change rt-button-hover-out">{getText('explore_more', 'Explore More')}</div>
							</div>
							<img
								width="10"
								height="9"
								alt="HomeTwoE"
								src={getImage('image_1').url}
								loading="lazy"
								class="rt-button-arrow-image rt-color-change"
							/></div
					></a>
				</div>
				<div
					data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce72"
					class="w-layout-hflex rt-powered-solution-card-image-block"
				>
					<img
						width="270"
						height="246"
						alt="HomeTwoE"
						src={getImage('image_3').url}
						loading="lazy"
						sizes="(max-width: 479px) 100vw, 270px"
						class="rt-powered-solution-card-image"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
