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

<section
	data-w-id="3949d65c-e80a-8d0b-badd-57cf44540304"
	class="rt-about-hero-v3 rt-position-relative"
>
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-hflex rt-monitoring">
			<div class="w-layout-vflex rt-monitoring-text-wrapper rt-desktop-text-center">
				<h1 data-w-id="3949d65c-e80a-8d0b-badd-57cf44540308" class="rt-gap-off rt-h1-gap">
					{getText('hero_heading', 'Maximizing Productivity with AI-Powered Tracking')}
				</h1>
				<p
					data-w-id="3949d65c-e80a-8d0b-badd-57cf4454030a"
					class="rt-monitoring-paragraph rt-gap-off rt-h2-paragraph-gap"
				>
					{getText('eu_eget_accumsan', 'Eu eget accumsan risus montes nibh hac. Ut condimentum nunc accumsan mollis dis. Lacus non ante Netus ultricies.')}
				</p>
				<div
					data-w-id="3949d65c-e80a-8d0b-badd-57cf4454030c"
					class="w-layout-hflex rt-button-wrapper"
				>
					<a
						data-wf--rt-button-v1--variant="base"
						data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
						href="service-one.html"
						class="rt-button w-inline-block"
						><div class="w-layout-hflex rt-button-text-image-wrapper">
							<div class="w-layout-hflex rt-button-text-wrap">
								<div class="rt-button-text rt-button-hover-in">{getText('our_services', 'Our Services')}</div>
								<div class="rt-button-text rt-button-hover-out">{getText('our_services', 'Our Services')}</div>
							</div>
							<img
								width="10"
								height="9"
								alt="AboutA"
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
	<div class="w-layout-blockcontainer rt-container-large w-container">
		<div class="rt-banner-main-image-wrapper">
			<div data-w-id="3949d65c-e80a-8d0b-badd-57cf44540311" class="rt-dashboard-wrap">
				<div class="rt-dashboard-inner">
					<div class="rt-dashboard-screen">
						<img
							width="1011"
							height="663"
							alt="AboutA"
							src={getImage('banner_main').url}
							class="rt-dashboard-image rt-autofit"
						/>
					</div>
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
