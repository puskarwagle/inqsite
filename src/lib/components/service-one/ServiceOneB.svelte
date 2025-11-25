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

<section class="rt-business-stratagies">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-vflex rt-business-strategides-top-text rt-desktop-text-center">
			<h2 data-w-id="b1df3202-e056-36f7-b9dc-7f9b02f8b544" class="rt-gap-off rt-h2-gap">
				Data-Driven AI for Smarter Business Strategies
			</h2>
			<p data-w-id="b1df3202-e056-36f7-b9dc-7f9b02f8b546" class="rt-gap-off rt-h2-paragraph-gap">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Suscipit viverra donec scelerisque tellus in vulputate. Cursus tempus congue.')}</p>
		</div>
		<div class="w-layout-grid rt-business-strategies-card-wrapper">
			<div
				data-w-id="b1df3202-e056-36f7-b9dc-7f9b02f8b549"
				class="w-layout-vflex rt-business-strategies-card rt-color-light-blue"
			>
				<div class="rt-business-strategies-image-block">
					<img
						width="315"
						height="147"
						alt={getText('business', 'Business')}
						src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a8166_Business%203.webp"
						loading="lazy"
						srcset="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a8166_Business%25203-p-500.webp 500w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a8166_Business%203.webp 630w"
						sizes="(max-width: 479px) 100vw, 315px"
						class="rt-business-strategies-image-two rt-autofit"
					/><img
						width="297"
						height="147"
						alt={getText('business', 'Business')}
						src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a8163_Business%202.webp"
						loading="lazy"
						srcset="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a8163_Business%25202-p-500.webp 500w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a8163_Business%202.webp 596w"
						sizes="(max-width: 479px) 100vw, 297px"
						class="rt-business-strategies-image-three rt-autofit"
					/>
				</div>
				<div class="w-layout-vflex rt-business-strategies-text-block">
					<div class="rt-text-style-h5">AI-Powered Insights</div>
					<p class="rt-business-strategies-paragraph">{getText('lorem_ipsum_voluptas_assumenda', 'Lorem ipsum Voluptas assumenda est, omnis dolor Temporibus autem quibusdam amet ullamcorper atsit eros risus eget trist.')}</p>
					<a
						data-w-id="e477ecfe-ff19-eae1-fd29-07a2a1bfae03"
						href="service-one.html"
						aria-current="page"
						class="rt-button-v2 w-inline-block w--current"
						><div class="w-layout-vflex rt-button-text-wrapper">
							<div class="rt-button-text">Explore More</div>
							<div class="rt-button-text">Explore More</div>
						</div>
						<div class="w-layout-hflex rt-button-arrow-wrapper">
							<img
								width="10"
								height="10"
								alt={getText('arrow', 'Arrow')}
								src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg"
								loading="lazy"
								class="rt-autofit"
							/><img
								width="10"
								height="10"
								alt={getText('arrow', 'Arrow')}
								src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg"
								loading="lazy"
								class="rt-autofit"
							/>
						</div>
						<div class="rt-button-hover-line"></div></a
					>
				</div>
			</div>
			<div
				data-w-id="b1df3202-e056-36f7-b9dc-7f9b02f8b55b"
				class="w-layout-vflex rt-business-strategies-card rt-color-colud-mist"
			>
				<div class="rt-business-strategies-image-block">
					<img
						width="345"
						height="202"
						alt={getText('business', 'Business')}
						src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a8169_Business%202%20(1).webp"
						loading="lazy"
						srcset="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a8169_Business%25202%2520(1)-p-500.webp 500w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a8169_Business%202%20(1).webp 688w"
						sizes="(max-width: 479px) 100vw, 345px"
						class="rt-business-strategies-image rt-autofit rt-tab-full-image"
					/>
				</div>
				<div class="w-layout-vflex rt-business-strategies-text-block">
					<div class="rt-text-style-h5">AI Automation</div>
					<p class="rt-business-strategies-paragraph">{getText('lorem_ipsum_voluptas_assumenda', 'Lorem ipsum Voluptas assumenda est, omnis dolor Temporibus autem quibusdam amet ullamcorper atsit eros risus eget trist.')}</p>
					<a
						data-w-id="e477ecfe-ff19-eae1-fd29-07a2a1bfae03"
						href="service-two.html"
						class="rt-button-v2 w-inline-block"
						><div class="w-layout-vflex rt-button-text-wrapper">
							<div class="rt-button-text">Explore More</div>
							<div class="rt-button-text">Explore More</div>
						</div>
						<div class="w-layout-hflex rt-button-arrow-wrapper">
							<img
								width="10"
								height="10"
								alt={getText('arrow', 'Arrow')}
								src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg"
								loading="lazy"
								class="rt-autofit"
							/><img
								width="10"
								height="10"
								alt={getText('arrow', 'Arrow')}
								src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg"
								loading="lazy"
								class="rt-autofit"
							/>
						</div>
						<div class="rt-button-hover-line"></div></a
					>
				</div>
			</div>
			<div
				data-w-id="b1df3202-e056-36f7-b9dc-7f9b02f8b56c"
				class="w-layout-vflex rt-business-strategies-card rt-color-light-pink"
			>
				<div class="rt-business-strategies-image-block">
					<img
						width="345"
						height="202"
						alt={getText('business', 'Business')}
						src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a8160_Business.webp"
						loading="lazy"
						srcset="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a8160_Business-p-500.webp 500w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a8160_Business.webp 716w"
						sizes="(max-width: 479px) 100vw, 345px"
						class="rt-business-strategies-image rt-autofit rt-tab-full-image"
					/>
				</div>
				<div class="w-layout-vflex rt-business-strategies-text-block">
					<div class="rt-text-style-h5">Performance-Driven</div>
					<p class="rt-business-strategies-paragraph">{getText('lorem_ipsum_voluptas_assumenda', 'Lorem ipsum Voluptas assumenda est, omnis dolor Temporibus autem quibusdam amet ullamcorper atsit eros risus eget trist.')}</p>
					<a
						data-w-id="e477ecfe-ff19-eae1-fd29-07a2a1bfae03"
						href="service-one.html"
						aria-current="page"
						class="rt-button-v2 w-inline-block w--current"
						><div class="w-layout-vflex rt-button-text-wrapper">
							<div class="rt-button-text">Explore More</div>
							<div class="rt-button-text">Explore More</div>
						</div>
						<div class="w-layout-hflex rt-button-arrow-wrapper">
							<img
								width="10"
								height="10"
								alt={getText('arrow', 'Arrow')}
								src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg"
								loading="lazy"
								class="rt-autofit"
							/><img
								width="10"
								height="10"
								alt={getText('arrow', 'Arrow')}
								src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg"
								loading="lazy"
								class="rt-autofit"
							/>
						</div>
						<div class="rt-button-hover-line"></div></a
					>
				</div>
			</div>
		</div>
	</div>
</section>
