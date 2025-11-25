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

<section class="rt-solutions">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-hflex rt-solutions-block">
			<div class="w-layout-vflex rt-solution-block-one">
				<div
					data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0f5b"
					class="rt-solution-text-wrapper"
					style=""
				>
					<h2 class="rt-gap-off rt-h2-gap">{getText('section_heading', 'Revolutionizing the Future with AI-Powered Solutions')}</h2>
					<p class="rt-solution-paragraph rt-gap-off rt-h2-paragraph-gap">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Ipsum neque ridiculus quis dignissim vulputate elementum netus. Fermentum in feugiat')}</p>
				</div>
				<div class="rt-soluition-point-block">
					<div
						data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0f61"
						class="w-layout-hflex rt-solution-point"
						style=""
					>
						<div class="w-layout-hflex rt-solution-icon-block rt-overflow-hidden">
							<img
								width="27"
								height="30"
								alt={getText('brand', 'Brand')}
								src={getImage('image_1').url}
								loading="lazy"
							/>
						</div>
						<div class="w-layout-vflex rt-solution-text-block">
							<div class="rt-text-style-h5">{getText('the_future_of', 'The Future of AI-Driven Business Solutions')}</div>
							<p class="rt-solution-point-paragraph">
								Seotech gives you the blocks &amp; components you need to create a truly
								professional website, landing page
							</p>
						</div>
					</div>
					<div
						data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0f69"
						class="rt-solution-line rt-color-strock-light"
						style=""
					></div>
					<div
						data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0f6a"
						class="w-layout-hflex rt-solution-point rt-change-padding"
						style=""
					>
						<div class="w-layout-hflex rt-solution-icon-block">
							<img
								width="25"
								height="25"
								alt={getText('brand', 'Brand')}
								src={getImage('image_2').url}
								loading="lazy"
							/>
						</div>
						<div class="w-layout-vflex rt-solution-text-block">
							<div class="rt-text-style-h5">{getText('ai_that_makes', 'AI That Makes Smarter Decisions for You')}</div>
							<p class="rt-solution-point-paragraph rt-change">
								Seotech gives you the blocks &amp; components you need to create a truly
								professional website, landing page
							</p>
						</div>
					</div>
				</div>
				<div
					data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0f72"
					class="w-layout-hflex rt-solution-button-block"
					style=""
				>
					<a
						data-wf--rt-button-v1--variant="base"
						data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
						href="/service-one"
						class="rt-button w-inline-block"
						><div class="w-layout-hflex rt-button-text-image-wrapper">
							<div class="w-layout-hflex rt-button-text-wrap">
								<div class="rt-button-text rt-button-hover-in" style="">{getText('explore_more', 'Explore More')}</div>
								<div class="rt-button-text rt-button-hover-out" style="">{getText('explore_more', 'Explore More')}</div>
							</div>
							<img
								width="10"
								height="9"
								alt={getText('arrow', 'Arrow')}
								src={getImage('image_3').url}
								loading="lazy"
								class="rt-button-arrow-image"
							/>
						</div></a
					>
				</div>
			</div>
			<div class="w-layout-hflex rt-solution-block-two">
				<div
					data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0f78"
					class="w-layout-hflex rt-solution-card rt-position-relative"
					style=""
				>
					<img
						class="rt-solution-card-image rt-shadow rt-autofit"
						src={getImage('image_4').url}
						width="527"
						height="554"
						alt={getText('revolution', 'Revolution')}
						sizes="(max-width: 767px) 100vw, 527px"
						data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0f79"
						loading="lazy"
						style=""
					/><img
						width="184"
						height="183"
						alt={getText('statistics', 'Statistics')}
						src={getImage('image_5').url}
						loading="lazy"
						data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0f7a"
						class="rt-solution-card-small-image rt-drop-shadow"
						style=""
					/>
				</div>
			</div>
		</div>
	</div>
</section>
