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

<section class="rt-our-services rt-position-relative">
	<div class="rt-service-layer"></div>
	<div class="w-layout-hflex rt-service-content-wrapper rt-overflow-hidden">
		<div class="rt-our-services-text-wrapper">
			<div class="w-layout-vflex rt-our-services-text">
				<h2 data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cf0f" class="rt-service-text-title">{getText('section_heading', 'Let Us Assist You with Our Superior Services')}</h2>
				<p
					data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cf11"
					class="rt-service-paragraph rt-gap-off rt-h2-paragraph-gap"
				>
					Proin posuere lacus egestas ultricies lobortis. Lobortis nascetur ac pulvinar fermentum
					augue id. Commodo odio augue.
				</p>
				<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cf13" class="w-layout-hflex">
					<div
						data-w-id="b6d27bf5-43da-10bf-83c4-b9447ef6e291"
						class="rt-form-button-box rt-position-relative"
					>
						<div class="rt-border-button-border">
							<a href="pricing-one.html" class="rt-button w-inline-block"
								><div class="w-layout-hflex rt-button-text-image-wrapper">
									<div class="w-layout-hflex rt-button-text-wrap">
										<div class="rt-button-text rt-button-hover-in">{getText('join_us_today', 'Join Us Today')}</div>
										<div class="rt-button-text rt-button-hover-out">{getText('join_us_today', 'Join Us Today')}</div>
									</div>
									<img
										width="10"
										height="9"
										alt={getText('arrow', 'Arrow')}
										src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg'}
										loading="lazy"
										class="rt-button-arrow-image"
									/>
								</div>
								<div class="rt-button-layer"></div
							></a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cf18" class="rt-service-image-block">
			<img
				width="949.5"
				height="494"
				alt={getText('service', 'Service')}
				src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805cf88b22d1ca52984253e_Service.webp'}
				loading="lazy"
				srcset="
					https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805cf88b22d1ca52984253e_Service-p-500.webp   500w,
					https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805cf88b22d1ca52984253e_Service-p-800.webp   800w,
					https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805cf88b22d1ca52984253e_Service-p-1080.webp 1080w,
					https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805cf88b22d1ca52984253e_Service-p-1600.webp 1600w,
					https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805cf88b22d1ca52984253e_Service.webp        1899w
				"
				sizes="(max-width: 991px) 100vw, 949.5px"
				class="rt-service-image rt-autofit"
			/>
		</div>
	</div>
</section>
