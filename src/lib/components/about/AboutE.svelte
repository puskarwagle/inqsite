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

<section class="rt-industries">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-hflex rt-industries-main-box-wrap">
			<div class="w-layout-vflex rt-industries-text-box-wrap">
				<div class="w-layout-vflex rt-industries-text">
					<h2 data-w-id="4721e793-9498-9902-6f2c-10a09ced4b8a" class="rt-gap-off rt-h2-gap">{getText('section_heading', 'Revolutionizing Industries with AI Intelligence')}</h2>
					<p data-w-id="4721e793-9498-9902-6f2c-10a09ced4b8c">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis velit sed sollicitudin semper. Donec mattis pulvinar quam')}</p>
				</div>
				<div class="w-layout-vflex rt-industries-small-box-wrapper">
					<div
						data-w-id="4721e793-9498-9902-6f2c-10a09ced4b8f"
						class="w-layout-hflex rt-industries-small-box active"
					>
						<div class="w-layout-hflex rt-icon-block-v2 active rt-margin">
							<img
								src={getImage('image_1').url}
								loading="lazy"
								width="27"
								height="27"
								alt={getText('intelligence_icon', 'Intelligence Icon')}
							/>
						</div>
						<div class="w-layout-vflex rt-industries-text-block">
							<div class="rt-text-style-h6">{getText('simpler_process', 'Simpler Process')}</div>
							<p>{getText('lorem_ipsum_dolor', 'Lorem ipsum dolor sit amet consectetur.')}</p>
						</div>
					</div>
					<div
						data-w-id="4721e793-9498-9902-6f2c-10a09ced4b97"
						class="w-layout-hflex rt-industries-small-box"
					>
						<div class="w-layout-hflex rt-icon-block-v2 rt-margin">
							<img
								src={getImage('image_2').url}
								loading="lazy"
								width="24"
								height="22"
								alt={getText('intelligence_icon', 'Intelligence Icon')}
							/>
						</div>
						<div class="w-layout-vflex rt-industries-text-block">
							<div class="rt-text-style-h6">{getText('previous_documentation', 'Previous Documentation')}</div>
							<p>{getText('lorem_ipsum_dolor', 'Lorem ipsum dolor sit amet consectetur.')}</p>
						</div>
					</div>
					<div
						data-w-id="4721e793-9498-9902-6f2c-10a09ced4b9f"
						class="w-layout-hflex rt-industries-small-box"
					>
						<div class="w-layout-hflex rt-icon-block-v2 rt-margin">
							<img
								src={getImage('image_3').url}
								loading="lazy"
								width="26"
								height="26"
								alt={getText('intelligence_icon', 'Intelligence Icon')}
							/>
						</div>
						<div class="w-layout-vflex rt-industries-text-block">
							<div class="rt-text-style-h6">{getText('ai_powered_building', 'AI Powered Building')}</div>
							<p>{getText('lorem_ipsum_dolor', 'Lorem ipsum dolor sit amet consectetur.')}</p>
						</div>
					</div>
				</div>
			</div>
			<div
				data-w-id="4721e793-9498-9902-6f2c-10a09ced4ba7"
				class="w-layout-hflex rt-industries-image-box-wrap rt-position-relative"
			>
				<img
					src={getImage('image_4').url}
					loading="lazy"
					width="716"
					height="525"
					alt={getText('chat', 'Chat')}
					sizes="(max-width: 767px) 100vw, 716px"
					class="rt-industries-image rt-tab-full-image"
				/><img
					class="rt-industries-image rt-tab-full-image two"
					src={getImage('image_5').url}
					width="716"
					height="525"
					alt={getText('chat', 'Chat')}
					sizes="(max-width: 767px) 100vw, 716px"
					data-w-id="7cd4024f-9652-dbc0-c413-9f9eab23de74"
					loading="lazy"
				/><img
					class="rt-industries-image rt-tab-full-image three"
					src={getImage('image_6').url}
					width="716"
					height="525"
					alt={getText('chat', 'Chat')}
					sizes="(max-width: 767px) 100vw, 716px"
					data-w-id="0cca7acf-7d4c-5a55-0474-09de0342f994"
					loading="lazy"
				/>
			</div>
		</div>
	</div>
</section>
