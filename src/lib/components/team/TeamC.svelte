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

<section data-w-id="28385cd8-9007-ff34-ae51-eafc7837b469" class="rt-revolutionizing">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-hflex rt-revolutionizing-content-block">
			<div class="w-layout-vflex rt-revolutionizing-text-block">
				<div class="w-layout-vflex rt-revolutionizing-text-wrapper">
					<h2 data-w-id="28385cd8-9007-ff34-ae51-eafc7837b46e" class="rt-gap-off rt-h2-gap">{getText('section_heading', 'Revolutionizing Industries with AI Intelligence')}</h2>
					<p
						data-w-id="28385cd8-9007-ff34-ae51-eafc7837b470"
						class="rt-gap-off rt-h2-paragraph-gap"
					>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id justo rhoncuys eleifend ipsum non, aliquet quam. Nulla sagittis porttitor sapien euismod sapien sollicitudin Nunc ornare lacus sapien.')}</p>
				</div>
				<div class="w-layout-hflex rt-achievement-block">
					<div
						data-w-id="28385cd8-9007-ff34-ae51-eafc7837b473"
						class="w-layout-vflex rt-achievemt-box-v2"
					>
						<div class="rt-text-style-h1">53K</div>
						<div class="rt-text-style-h6">{getText('happy_clients', 'Happy clients')}</div>
					</div>
					<div
						data-w-id="28385cd8-9007-ff34-ae51-eafc7837b478"
						class="w-layout-vflex rt-achievemt-box-v2"
					>
						<div class="rt-text-style-h1">{getText('100', '100+')}</div>
						<div class="rt-text-style-h6">{getText('team_member', 'Team Member')}</div>
					</div>
				</div>
			</div>
			<div
				data-w-id="28385cd8-9007-ff34-ae51-eafc7837b47d"
				class="w-layout-hflex rt-revolutionizing-image-wrapper rt-position-relative"
			>
				<img
					width="584"
					height="574"
					alt={getText('message_screen', 'Message screen')}
					src={getImage('image_1').url}
					loading="lazy"
					sizes="(max-width: 767px) 100vw, 584px"
					class="rt-revolutionizing-image rt-autofit rt-tab-full-image"
				/>
				<div class="w-layout-vflex rt-revolutionizing-small-image-wrapper">
					<img
						width="341"
						height="76"
						alt={getText('message', 'Message')}
						src={getImage('image_2').url}
						loading="lazy"
						sizes="(max-width: 479px) 100vw, 341px"
						class="rt-revolution-message rt-autofit"
					/><img
						class="rt-revolution-message-two rt-autofit"
						src={getImage('image_3').url}
						width="477"
						height="101"
						alt={getText('message', 'Message')}
						sizes="(max-width: 479px) 100vw, 477px"
						data-w-id="28385cd8-9007-ff34-ae51-eafc7837b481"
						loading="lazy"
					/><img
						width="414"
						height="88"
						alt={getText('message', 'Message')}
						src={getImage('image_4').url}
						loading="lazy"
						sizes="(max-width: 479px) 100vw, 414px"
						class="rt-revolution-message rt-autofit"
					/><img
						class="rt-revolution-message-two rt-autofit"
						src={getImage('image_5').url}
						width="477"
						height="102"
						alt={getText('message', 'Message')}
						sizes="(max-width: 479px) 100vw, 477px"
						data-w-id="28385cd8-9007-ff34-ae51-eafc7837b483"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
