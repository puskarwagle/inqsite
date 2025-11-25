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

<section class="rt-imapact-v2">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-hflex rt-imapact-content-v2">
			<div class="w-layout-hflex rt-imapact-image-wrapper-v2">
				<img
					class="rt-imapact-image-v2 rt-autofit rt-tab-full-image"
					src={getImage('image_1').url}
					width="724"
					height="515"
					alt={getText('decision', 'Decision')}
					sizes="(max-width: 767px) 100vw, 724px"
					data-w-id="d8cc0c89-5611-467c-7b0c-409b05d85abf"
					loading="lazy"
				/>
			</div>
			<div class="w-layout-vflex rt-imapact-text-wrapper-v2">
				<div class="w-layout-vflex rt-imapact-text-v2">
					<h2 data-w-id="d8cc0c89-5611-467c-7b0c-409b05d85aa5" class="rt-gap-off rt-h2-gap">{getText('section_heading', 'Intelligent Decision-Making Made Easy')}</h2>
					<p data-w-id="d8cc0c89-5611-467c-7b0c-409b05d85aa7" class="rt-imapact-text-paragraph-v2">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur Amet ullamcorper atsit eros risus eget tristique diam imperdiet. Eleifend et porttitor amet.')}<br />
					</p>
				</div>
				<div
					data-w-id="d8cc0c89-5611-467c-7b0c-409b05d85aaa"
					class="w-layout-vflex rt-impact-innovation-text-wrapper"
				>
					<div class="rt-text-style-h5">{getText('shaping_the_future', 'Shaping the Future with AI Innovation')}</div>
					<p class="rt-impact-innovation-paragraph-wrapper">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur Molestie ullamcorp elit non diam at pharetra integer non fringilla. Non cras sapien rutrum Maecenas tellus posuere faucibus tincidunt.')}</p>
				</div>
				<div class="w-layout-hflex rt-imapact-innovation-box-wrapper">
					<div
						data-w-id="d8cc0c89-5611-467c-7b0c-409b05d85ab0"
						class="w-layout-hflex rt-imapact-innovation-box"
					>
						<div class="w-layout-hflex rt-imapact-icon-block rt-change">
							<img
								width="21"
								height="21"
								alt={getText('intelligence_icon', 'Intelligence Icon')}
								src={getImage('image_2').url}
								loading="lazy"
								class="rt-autofit"
							/>
						</div>
						<div class="rt-text-style-h5 rt-imapact-innovation-box-text">{getText('leading_the_ai', 'Leading the AI Revolution')}</div>
					</div>
					<div
						data-w-id="d8cc0c89-5611-467c-7b0c-409b05d85ab5"
						class="w-layout-hflex rt-imapact-innovation-box"
					>
						<div class="w-layout-hflex rt-imapact-icon-block rt-change">
							<img
								width="23"
								height="23"
								alt={getText('intelligence_icon', 'Intelligence Icon')}
								src={getImage('image_3').url}
								loading="lazy"
								class="rt-autofit"
							/>
						</div>
						<div class="rt-text-style-h5 rt-imapact-innovation-box-text">{getText('transforming_life_with', 'Transforming Life with AI')}</div>
					</div>
				</div>
				<div data-w-id="f11b5c0b-ed3b-23a2-b334-d0ce797f3a50">
					<a
						data-wf--rt-button-v1--variant="base"
						data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
						href="service-one.html"
						class="rt-button w-inline-block"
						><div class="w-layout-hflex rt-button-text-image-wrapper">
							<div class="w-layout-hflex rt-button-text-wrap">
								<div class="rt-button-text rt-button-hover-in">{getText('explore_more', 'Explore More')}</div>
								<div class="rt-button-text rt-button-hover-out">{getText('explore_more', 'Explore More')}</div>
							</div>
							<img
								width="10"
								height="9"
								alt={getText('arrow', 'Arrow')}
								src={getImage('image_4').url}
								loading="lazy"
								class="rt-button-arrow-image"
							/>
						</div></a
					>
				</div>
			</div>
		</div>
	</div>
</section>
