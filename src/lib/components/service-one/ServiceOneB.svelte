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
				{getText('section_heading', 'Data-Driven AI for Smarter Business Strategies')}
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
						alt={getImage('business_card_1_image').alt || getText('business', 'Business')}
						src={getImage('business_card_1_image').url}
						loading="lazy"
						sizes="(max-width: 479px) 100vw, 315px"
						class="rt-business-strategies-image-two rt-autofit"
					/><img
						width="297"
						height="147"
						alt={getImage('business_card_2_image').alt || getText('business', 'Business')}
						src={getImage('business_card_2_image').url}
						loading="lazy"
						sizes="(max-width: 479px) 100vw, 297px"
						class="rt-business-strategies-image-three rt-autofit"
					/>
				</div>
				<div class="w-layout-vflex rt-business-strategies-text-block">
					<div class="rt-text-style-h5">{getText('ai_powered_insights_heading', 'AI-Powered Insights')}</div>
					<p class="rt-business-strategies-paragraph">{getText('lorem_ipsum_voluptas_assumenda', 'Lorem ipsum Voluptas assumenda est, omnis dolor Temporibus autem quibusdam amet ullamcorper atsit eros risus eget trist.')}</p>
					<a
						data-w-id="e477ecfe-ff19-eae1-fd29-07a2a1bfae03"
						href={getLink('service_one_link').href || 'service-one.html'}
						aria-current="page"
						class="rt-button-v2 w-inline-block w--current"
						><div class="w-layout-vflex rt-button-text-wrapper">
							<div class="rt-button-text">{getText('explore_more_button', 'Explore More')}</div>
							<div class="rt-button-text">{getText('explore_more_button', 'Explore More')}</div>
						</div>
						<div class="w-layout-hflex rt-button-arrow-wrapper">
							<img
								width="10"
								height="10"
								alt={getImage('button_arrow').alt || getText('arrow', 'Arrow')}
								src={getImage('button_arrow').url}
								loading="lazy"
								class="rt-autofit"
							/><img
								width="10"
								height="10"
								alt={getImage('button_arrow').alt || getText('arrow', 'Arrow')}
								src={getImage('button_arrow').url}
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
						alt={getImage('business_card_3_image').alt || getText('business', 'Business')}
						src={getImage('business_card_3_image').url}
						loading="lazy"
						sizes="(max-width: 479px) 100vw, 345px"
						class="rt-business-strategies-image rt-autofit rt-tab-full-image"
					/>
				</div>
				<div class="w-layout-vflex rt-business-strategies-text-block">
					<div class="rt-text-style-h5">{getText('ai_automation_heading', 'AI Automation')}</div>
					<p class="rt-business-strategies-paragraph">{getText('lorem_ipsum_voluptas_assumenda', 'Lorem ipsum Voluptas assumenda est, omnis dolor Temporibus autem quibusdam amet ullamcorper atsit eros risus eget trist.')}</p>
					<a
						data-w-id="e477ecfe-ff19-eae1-fd29-07a2a1bfae03"
						href={getLink('service_two_link').href || 'service-two.html'}
						class="rt-button-v2 w-inline-block"
						><div class="w-layout-vflex rt-button-text-wrapper">
							<div class="rt-button-text">{getText('explore_more_button', 'Explore More')}</div>
							<div class="rt-button-text">{getText('explore_more_button', 'Explore More')}</div>
						</div>
						<div class="w-layout-hflex rt-button-arrow-wrapper">
							<img
								width="10"
								height="10"
								alt={getImage('button_arrow').alt || getText('arrow', 'Arrow')}
								src={getImage('button_arrow').url}
								loading="lazy"
								class="rt-autofit"
							/><img
								width="10"
								height="10"
								alt={getImage('button_arrow').alt || getText('arrow', 'Arrow')}
								src={getImage('button_arrow').url}
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
						alt={getImage('business_card_4_image').alt || getText('business', 'Business')}
						src={getImage('business_card_4_image').url}
						loading="lazy"
						sizes="(max-width: 479px) 100vw, 345px"
						class="rt-business-strategies-image rt-autofit rt-tab-full-image"
					/>
				</div>
				<div class="w-layout-vflex rt-business-strategies-text-block">
					<div class="rt-text-style-h5">{getText('performance_driven_heading', 'Performance-Driven')}</div>
					<p class="rt-business-strategies-paragraph">{getText('lorem_ipsum_voluptas_assumenda', 'Lorem ipsum Voluptas assumenda est, omnis dolor Temporibus autem quibusdam amet ullamcorper atsit eros risus eget trist.')}</p>
					<a
						data-w-id="e477ecfe-ff19-eae1-fd29-07a2a1bfae03"
						href={getLink('service_one_link').href || 'service-one.html'}
						aria-current="page"
						class="rt-button-v2 w-inline-block w--current"
						><div class="w-layout-vflex rt-button-text-wrapper">
							<div class="rt-button-text">{getText('explore_more_button', 'Explore More')}</div>
							<div class="rt-button-text">{getText('explore_more_button', 'Explore More')}</div>
						</div>
						<div class="w-layout-hflex rt-button-arrow-wrapper">
							<img
								width="10"
								height="10"
								alt={getImage('button_arrow').alt || getText('arrow', 'Arrow')}
								src={getImage('button_arrow').url}
								loading="lazy"
								class="rt-autofit"
							/><img
								width="10"
								height="10"
								alt={getImage('button_arrow').alt || getText('arrow', 'Arrow')}
								src={getImage('button_arrow').url}
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
