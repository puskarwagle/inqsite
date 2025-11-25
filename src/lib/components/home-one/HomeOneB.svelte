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

<section data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a7551f" class="rt-revolution">
	<div class="rt-technology-sticky-wrapper">
		<div class="rt-technology-sticky-block">
			<div class="w-layout-blockcontainer rt-container-small rt-full-container w-container">
				<div class="w-layout-hflex rt-revolution-content">
					<div class="w-layout-vflex rt-revolution-text-wrapper">
						<div class="rt-revolution-title-text">
							<h2 data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a75524" class="rt-gap-off rt-h2-gap">{getText('section_heading', 'Revolutionizing Technology with AI Intelligence')}</h2>
							<p
								data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a75526"
								class="rt-gap-off rt-h2-paragraph-gap"
							>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur adipiscing elit In et sapien vitae augue lobo Sed sollicitudin nec.')}</p>
						</div>
						<div class="w-layout-vflex rt-revolution-details">
							<div
								data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a75529"
								class="w-layout-vflex rt-revolution-box rt-position-relative active"
							>
								<div
									data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a7552a"
									class="rt-revolution-box-layer active"
								></div>
								<div class="w-layout-hflex rt-revolution-details-title">
									<div class="rt-text-style-h5">01</div>
									<div class="rt-text-style-h5">{getText('smarter_ai_for', 'Smarter AI for Smarter Living')}</div>
								</div>
								<div
									class="w-layout-hflex rt-revolution-details-paragraph-block rt-overflow-hidden active"
								>
									<p>{getText('lorem_ipsum_dolor', 'Lorem ipsum dolor sit amet consectetur adipiscing elit In et sapien vitae.')}</p>
								</div>
							</div>
							<div
								data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a7553d"
								class="w-layout-vflex rt-revolution-box rt-position-relative"
							>
								<div
									data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a7553e"
									class="rt-revolution-box-layer"
								></div>
								<div class="w-layout-hflex rt-revolution-details-title">
									<div class="rt-text-style-h5">02</div>
									<div class="rt-text-style-h5">{getText('ai_that_enhances', 'AI That Enhances Banking Security')}</div>
								</div>
								<div
									data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a75544"
									class="w-layout-hflex rt-revolution-details-paragraph-block rt-overflow-hidden"
								>
									<p>{getText('lorem_ipsum_dolor', 'Lorem ipsum dolor sit amet consectetur adipiscing elit In et sapien vitae.')}</p>
								</div>
							</div>
							<div
								data-w-id="6f17e9a6-85a8-a2cd-5e12-7de1859e77fd"
								class="w-layout-vflex rt-revolution-box rt-position-relative"
							>
								<div
									data-w-id="6f17e9a6-85a8-a2cd-5e12-7de1859e77fe"
									class="rt-revolution-box-layer"
								></div>
								<div class="w-layout-hflex rt-revolution-details-title">
									<div class="rt-text-style-h5">03</div>
									<div class="rt-text-style-h5">{getText('aidriven_risk_management', 'AI-Driven Risk Management Solutions')}</div>
								</div>
								<div
									data-w-id="6f17e9a6-85a8-a2cd-5e12-7de1859e7804"
									class="w-layout-hflex rt-revolution-details-paragraph-block rt-overflow-hidden"
								>
									<p>{getText('lorem_ipsum_dolor', 'Lorem ipsum dolor sit amet consectetur adipiscing elit In et sapien vitae.')}</p>
								</div>
							</div>
							<div
								id="w-node-_2db9ea1b-8d09-a03c-b9de-ccfc78a75547-918c7725"
								data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a75547"
								class="w-layout-vflex rt-revolution-box rt-position-relative"
							>
								<div
									data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a75548"
									class="rt-revolution-box-layer"
								></div>
								<div class="w-layout-hflex rt-revolution-details-title">
									<div class="rt-text-style-h5">04</div>
									<div class="rt-text-style-h5">{getText('ai_for_a', 'AI for a Smarter Digital Lifestyle')}</div>
								</div>
								<div
									data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a7554e"
									class="w-layout-hflex rt-revolution-details-paragraph-block rt-overflow-hidden"
								>
									<p>{getText('lorem_ipsum_dolor', 'Lorem ipsum dolor sit amet consectetur adipiscing elit In et sapien vitae.')}</p>
								</div>
							</div>
						</div>
					</div>
					<div class="w-layout-hflex rt-revolution-image-wrapper">
						<img
							src={getImage('image_1').url}
							loading="lazy"
							width="454"
							height="692"
							alt={getText('robot_small', 'Robot Small')}
							class="rt-tab-full-image"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
