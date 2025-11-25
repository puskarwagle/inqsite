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

<section class="rt-complex-problems">
	<div class="w-layout-blockcontainer rt-container-large w-container">
		<div class="w-layout-hflex rt-complex-problems-wrapper rt-radious-fifteen">
			<div
				data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce05"
				class="w-layout-hflex rt-complex-problems-image-block rt-overflow-hidden"
			>
				<div class="w-layout-hflex rt-complex-marquee-image-wrapper">
					<div class="w-layout-vflex rt-complex-marquee-block">
						<div class="w-layout-vflex rt-complex-train">
							<img
								width="194"
								height="172"
								alt={getText('marquee_image', 'Marquee Image')}
								src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7fec04_Marquee%20image.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/><img
								width="190"
								height="146"
								alt={getText('performance', 'Performance')}
								src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febff_Marquee%20image%202.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/><img
								width="190"
								height="146"
								alt={getText('performance', 'Performance')}
								src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febfd_Marquee%20image%203.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/><img
								width="190"
								height="169"
								alt={getText('performance', 'Performance')}
								src={getImage('image_4').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7fec00_MArquee%20image%204.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/>
						</div>
						<div class="w-layout-vflex rt-complex-train">
							<img
								width="194"
								height="172"
								alt={getText('marquee_image', 'Marquee Image')}
								src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7fec04_Marquee%20image.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/><img
								width="190"
								height="146"
								alt={getText('performance', 'Performance')}
								src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febff_Marquee%20image%202.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/><img
								width="190"
								height="146"
								alt={getText('performance', 'Performance')}
								src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febfd_Marquee%20image%203.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/><img
								width="190"
								height="169"
								alt={getText('performance', 'Performance')}
								src={getImage('image_4').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7fec00_MArquee%20image%204.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/>
						</div>
						<div class="w-layout-vflex rt-complex-train">
							<img
								width="194"
								height="172"
								alt={getText('marquee_image', 'Marquee Image')}
								src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7fec04_Marquee%20image.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/><img
								width="190"
								height="146"
								alt={getText('performance', 'Performance')}
								src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febff_Marquee%20image%202.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/><img
								width="190"
								height="146"
								alt={getText('performance', 'Performance')}
								src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febfd_Marquee%20image%203.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/><img
								width="190"
								height="169"
								alt={getText('performance', 'Performance')}
								src={getImage('image_4').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7fec00_MArquee%20image%204.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/>
						</div>
					</div>
					<div class="w-layout-vflex rt-complex-marquee-block-two">
						<div
							style="
								-webkit-transform: translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
									rotateZ(0) skew(0, 0);
								-moz-transform: translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
									rotateZ(0) skew(0, 0);
								-ms-transform: translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
									rotateZ(0) skew(0, 0);
								transform: translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
									rotateZ(0) skew(0, 0);
							"
							class="w-layout-vflex rt-complex-train-two"
						>
							<img
								width="190"
								height="146"
								alt={getText('performance', 'Performance')}
								src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febfd_Marquee%20image%203.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/><img
								width="190"
								height="146"
								alt={getText('perofrmance', 'Perofrmance')}
								src={getImage('image_5').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7fec03_Marquee%20image%205.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/><img
								width="190"
								height="164"
								alt={getText('performance', 'Performance')}
								src={getImage('image_6').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7fec02_Marquee%20image%206.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/><img
								width="190"
								height="145"
								alt={getText('performance', 'Performance')}
								src={getImage('image_7').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7fec01_Marquee%20image%207.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/>
						</div>
						<div
							style="
								-webkit-transform: translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
									rotateZ(0) skew(0, 0);
								-moz-transform: translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
									rotateZ(0) skew(0, 0);
								-ms-transform: translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
									rotateZ(0) skew(0, 0);
								transform: translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
									rotateZ(0) skew(0, 0);
							"
							class="w-layout-vflex rt-complex-train-two"
						>
							<img
								width="190"
								height="146"
								alt={getText('performance', 'Performance')}
								src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febfd_Marquee%20image%203.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/><img
								width="190"
								height="146"
								alt={getText('perofrmance', 'Perofrmance')}
								src={getImage('image_5').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7fec03_Marquee%20image%205.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/><img
								width="190"
								height="164"
								alt={getText('performance', 'Performance')}
								src={getImage('image_6').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7fec02_Marquee%20image%206.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/><img
								width="190"
								height="145"
								alt={getText('performance', 'Performance')}
								src={getImage('image_7').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7fec01_Marquee%20image%207.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/>
						</div>
						<div
							style="
								-webkit-transform: translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
									rotateZ(0) skew(0, 0);
								-moz-transform: translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
									rotateZ(0) skew(0, 0);
								-ms-transform: translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
									rotateZ(0) skew(0, 0);
								transform: translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
									rotateZ(0) skew(0, 0);
							"
							class="w-layout-vflex rt-complex-train-two"
						>
							<img
								width="190"
								height="146"
								alt={getText('performance', 'Performance')}
								src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febfd_Marquee%20image%203.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/><img
								width="190"
								height="146"
								alt={getText('perofrmance', 'Perofrmance')}
								src={getImage('image_5').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7fec03_Marquee%20image%205.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/><img
								width="190"
								height="164"
								alt={getText('performance', 'Performance')}
								src={getImage('image_6').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7fec02_Marquee%20image%206.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/><img
								width="190"
								height="145"
								alt={getText('performance', 'Performance')}
								src={getImage('image_7').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7fec01_Marquee%20image%207.webp'}
								loading="lazy"
								class="rt-complex-marquee-image rt-shadow rt-autofit"
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="w-layout-vflex rt-complex-problems-text-wrap">
				<div class="rt-mobile-text-center">
					<h2 data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce29" class="rt-gap-off rt-h2-gap">{getText('section_heading', 'AI That Simplifies Complex Problems Instantly')}</h2>
					<p data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce2b" class="rt-complex-problems-paragraph">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Suscipit viverra donec scelerisque tellus in vulputate. Cursus tempus congue.')}</p>
				</div>
				<div class="w-layout-vflex rt-complex-problems-points">
					<div
						data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce2e"
						class="rt-complex-problem-block rt-overflow-hidden"
					>
						<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce2f" class="rt-business-toggle">
							<div class="rt-accordian-number-v2 rt-text-style-h6">01</div>
							<div class="w-layout-hflex rt-operation-main-title">
								<div class="rt-text-style-h5">{getText('intelligence_redefined_daily', 'Intelligence Redefined Daily')}</div>
								<div class="w-layout-hflex rt-dropdown-icon-block">
									<img
										width="15"
										height="10"
										alt={getText('arrow', 'Arrow')}
										src={getImage('image_8').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febfc_Down%20arrow.svg'}
										loading="lazy"
										style="
											-webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
												rotateZ(0deg) skew(0, 0);
											-moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
												rotateZ(0deg) skew(0, 0);
											-ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
												rotateZ(0deg) skew(0, 0);
											transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
												rotateZ(0deg) skew(0, 0);
										"
										class="rt-dropdown-arrow-icon"
									/>
								</div>
							</div>
						</div>
						<div style="height: 0px" class="rt-dropdown-text-width-v2">
							Ut quis mi eget erat vehicula aliquam eget id odio elit. Dolor vitae risus
							pellentesque aliquet
						</div>
					</div>
					<div
						data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce39"
						class="rt-complex-problem-block rt-border rt-overflow-hidden"
					>
						<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce3a" class="rt-business-toggle active">
							<div class="rt-accordian-number-v2 rt-text-style-h6 active">02</div>
							<div class="w-layout-hflex rt-operation-main-title">
								<div class="rt-text-style-h5">{getText('aidriven_possibilities', 'AI-Driven Possibilities')}</div>
								<div class="w-layout-hflex rt-dropdown-icon-block">
									<img
										width="15"
										height="10"
										alt={getText('arrow', 'Arrow')}
										src={getImage('image_8').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febfc_Down%20arrow.svg'}
										loading="lazy"
										style="
											-webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
												rotateZ(180deg) skew(0, 0);
											-moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
												rotateZ(180deg) skew(0, 0);
											-ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
												rotateZ(180deg) skew(0, 0);
											transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
												rotateZ(180deg) skew(0, 0);
										"
										class="rt-dropdown-arrow-icon active"
									/>
								</div>
							</div>
						</div>
						<div class="rt-dropdown-text-width-v2 active">
							Ut quis mi eget erat vehicula aliquam eget id odio elit. Dolor vitae risus
							pellentesque aliquet
						</div>
					</div>
					<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce44" class="rt-complex-problem-block">
						<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ce45" class="rt-business-toggle">
							<div class="rt-accordian-number-v2 rt-text-style-h6">03</div>
							<div class="w-layout-hflex rt-operation-main-title">
								<div class="rt-text-style-h5">{getText('ai_beyond_innovation', 'AI, Beyond Innovation')}</div>
								<div class="w-layout-hflex rt-dropdown-icon-block">
									<img
										width="15"
										height="10"
										alt={getText('arrow', 'Arrow')}
										src={getImage('image_8').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febfc_Down%20arrow.svg'}
										loading="lazy"
										style="
											-webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
												rotateZ(0deg) skew(0, 0);
											-moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
												rotateZ(0deg) skew(0, 0);
											-ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
												rotateZ(0deg) skew(0, 0);
											transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
												rotateZ(0deg) skew(0, 0);
										"
										class="rt-dropdown-arrow-icon"
									/>
								</div>
							</div>
						</div>
						<div style="height: 0px" class="rt-dropdown-text-width-v2">
							Ut quis mi eget erat vehicula aliquam eget id odio elit. Dolor vitae risus
							pellentesque aliquet
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
