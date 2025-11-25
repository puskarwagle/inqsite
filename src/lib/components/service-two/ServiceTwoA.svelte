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

<section data-w-id="249552a4-b077-51ec-b20a-f9451528f7f6" class="rt-service-hero-v2">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-hflex rt-efficiency">
			<div class="w-layout-vflex rt-efficiency-text-wrapper rt-desktop-text-center">
				<h1 data-w-id="c33874e0-050b-268a-567d-ae90eb8f5971" class="rt-gap-off rt-h1-gap">
					{getText('hero_heading', 'Boost Efficiency with Cutting-Edge AI Solutions')}
				</h1>
				<p
					data-w-id="c33874e0-050b-268a-567d-ae90eb8f5973"
					class="rt-efficiency-paragraph rt-gap-off rt-h2-paragraph-gap"
				>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Amet ullamcorper atsit eros risus eget tristique diam imperdiet. Eleifend')}</p>
				<div
					data-w-id="c33874e0-050b-268a-567d-ae90eb8f5975"
					class="w-layout-hflex rt-button-wrapper"
				>
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
								alt={getImage('button_arrow').alt || getText('arrow', 'Arrow')}
								src={getImage('button_arrow').url}
								loading="lazy"
								class="rt-button-arrow-image"
							/>
						</div></a
					>
				</div>
			</div>
		</div>
	</div>
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-vflex rt-efficiency-banner-image-wrapper rt-position-relative">
			<img
				src={getImage('banner_main').url}
				data-w-id="fb42578d-8a72-9610-211f-08c7d6a63cd0"
				width="907"
				height="693"
				alt={getImage('banner_main').alt || getText('banner', 'Banner')}
				sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 907px"
				class="rt-efficiency-banner-image rt-autofit rt-tab-full-image"
			/>
			<div data-w-id="e9b3ee86-f3c5-c613-2419-24f767a9eaf3" class="rt-efficiency-image-two-wrapper">
				<img
					src={getImage('stat_image').url}
					data-w-id="fec1f17d-0f6a-5390-180e-325ac6904c90"
					width="200"
					height="164"
					alt={getImage('stat_image').alt || getText('statistics', 'Statistics')}
					class="rt-efficiency-image-two"
				/>
			</div>
			<div
				data-w-id="73980c11-46f3-fc71-29b8-20e929485897"
				class="rt-efficiency-image-three-wrapper"
			>
				<img
					src={getImage('efficiency_statistics').url}
					alt={getImage('efficiency_statistics').alt || getText('efficiency_statistics', 'Efficiency Statistics')}
					width="222"
					height="221"
					class="rt-efficiency-image-three"
				/>
			</div>
			<img
				src={getImage('line_decoration_1').url}
				loading="lazy"
				width="113"
				height="Auto"
				alt={getImage('line_decoration_1').alt || getText('line', 'Line')}
				data-w-id="b0940305-fb32-499b-b3ac-c5ea46dff8ec"
				class="rt-line"
			/><img
				src={getImage('line_decoration_2').url}
				loading="lazy"
				width="230"
				height="Auto"
				alt={getImage('line_decoration_2').alt || getText('line', 'Line')}
				data-w-id="a0dbf9f9-7ef4-b564-df3c-7cbb14a7e923"
				class="rt-line-two"
			/>
		</div>
	</div>
	<div>
		<div class="rt-green-dot"></div>
		<div class="rt-dark-yellow-dot"></div>
		<div class="rt-dark-yellow-dot-two"></div>
		<div class="rt-violet-dot"></div>
		<div class="rt-violet-dot-two"></div>
	</div>
</section>
