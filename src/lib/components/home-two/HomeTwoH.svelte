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

<section class="rt-ai-capabilities">
	<div class="w-layout-vflex rt-capabilities-sticky-content-inner">
		<div class="w-layout-blockcontainer rt-container-small rt-full-container w-container">
			<div class="rt-capabilitiea-top-title-block rt-desktop-text-center rt-overflow-hidden">
				<h2 data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cea8" class="rt-gap-off rt-h2-gap">{getText('section_heading', 'Empowering Industries with Advanced AI Capabilities')}</h2>
				<p
					data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ceaa"
					class="rt-capabilitiea-top-paragraph rt-gap-off rt-h2-paragraph-gap"
				>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Suscipit viverra donec scelerisque tellus in vulputate. Cursus tempus congue faucibus faucibus dui feugiat sit.')}</p>
			</div>
			<div
				data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ceac"
				class="w-layout-vflex rt-capabilities-content-wrapper"
			>
				<a
					data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cead"
					href={getLink('service_one_link').href || 'service-one.html'}
					class="rt-capabilities-content-box one w-inline-block"
					><div class="w-layout-hflex rt-capabilities-content">
						<div class="w-layout-hflex rt-capabilities-left-content">
							<img
								width="40"
								height="40"
								alt={getText('code', 'Code')}
								src={getImage('image_1').url}
								loading="lazy"
							/>
							<div class="rt-text-style-h5">{getText('aidriven_efficiency_for', 'AI-Driven Efficiency for Every Industry')}</div>
						</div>
						<div class="w-layout-hflex rt-capabilities-right-content">
							<p
								data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ceb4"
								class="rt-capabilities-right-paragraph"
							>{getText('lorem_ipsum_dolor', 'Lorem ipsum dolor sit amet consectetur. Lectus aliquam tempus vivamus leo nisl.')}</p>
							<div class="w-layout-hflex rt-capabilities-icon-block">
								<img
									width="12"
									height="10"
									alt={getText('arrow', 'Arrow')}
									src={getImage('image_2').url}
									loading="lazy"
									data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ceb7"
									class="rt-capabilities-icon"
								/>
							</div>
						</div></div></a
				><a
					data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ceb8"
					href={getLink('service_two_link').href || 'service-two.html'}
					class="rt-capabilities-content-box two active w-inline-block"
					><div class="w-layout-hflex rt-capabilities-content">
						<div class="w-layout-hflex rt-capabilities-left-content">
							<img
								width="40"
								height="40"
								alt={getText('brand', 'Brand')}
								src={getImage('image_3').url}
								loading="lazy"
							/>
							<div class="rt-text-style-h5">{getText('leading_ai_for', 'Leading AI for a Smarter Future')}</div>
						</div>
						<div class="w-layout-hflex rt-capabilities-right-content">
							<p
								data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cebf"
								class="rt-capabilities-right-paragraph active"
							>{getText('lorem_ipsum_dolor', 'Lorem ipsum dolor sit amet consectetur. Lectus aliquam tempus vivamus leo nisl.')}</p>
							<div class="w-layout-hflex rt-capabilities-icon-block">
								<img
									width="12"
									height="10"
									alt={getText('arrow', 'Arrow')}
									src={getImage('image_2').url}
									loading="lazy"
									data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cec2"
									class="rt-capabilities-icon active"
								/>
							</div>
						</div></div></a
				><a
					data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cec3"
					href={getLink('home_two_capabilities_link').href || 'home-two.html#'}
					class="rt-capabilities-content-box three w-inline-block"
					><div class="w-layout-hflex rt-capabilities-content">
						<div class="w-layout-hflex rt-capabilities-left-content">
							<img
								width="40"
								height="40"
								alt={getText('brand', 'Brand')}
								src={getImage('image_4').url}
								loading="lazy"
							/>
							<div class="rt-text-style-h5">{getText('automation_with_ai', 'Automation with AI Intelligence')}</div>
						</div>
						<div class="w-layout-hflex rt-capabilities-right-content">
							<p
								data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ceca"
								class="rt-capabilities-right-paragraph"
							>{getText('lorem_ipsum_dolor', 'Lorem ipsum dolor sit amet consectetur. Lectus aliquam tempus vivamus leo nisl.')}</p>
							<div class="w-layout-hflex rt-capabilities-icon-block">
								<img
									width="12"
									height="10"
									alt={getText('arrow', 'Arrow')}
									src={getImage('image_2').url}
									loading="lazy"
									data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cecd"
									class="rt-capabilities-icon"
								/>
							</div>
						</div></div></a
				><a
					data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cece"
					href={getLink('service_one_link').href || 'service-one.html'}
					class="rt-capabilities-content-box four w-inline-block"
					><div class="w-layout-hflex rt-capabilities-content">
						<div class="w-layout-hflex rt-capabilities-left-content">
							<img
								width="40"
								height="40"
								alt={getText('brand', 'Brand')}
								src={getImage('image_5').url}
								loading="lazy"
							/>
							<div class="rt-text-style-h5">{getText('aipowered_chatbots_amp', 'AI-Powered Chatbots &amp; Assistants')}</div>
						</div>
						<div class="w-layout-hflex rt-capabilities-right-content">
							<p
								data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ced5"
								class="rt-capabilities-right-paragraph"
							>{getText('lorem_ipsum_dolor', 'Lorem ipsum dolor sit amet consectetur. Lectus aliquam tempus vivamus leo nisl.')}</p>
							<div class="w-layout-hflex rt-capabilities-icon-block">
								<img
									width="12"
									height="10"
									alt={getText('arrow', 'Arrow')}
									src={getImage('image_2').url}
									loading="lazy"
									data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1ced8"
									class="rt-capabilities-icon"
								/>
							</div>
						</div></div
				></a>
			</div>
		</div>
	</div>
</section>
