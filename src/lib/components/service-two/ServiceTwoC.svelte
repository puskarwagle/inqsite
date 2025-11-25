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

<section class="rt-technology">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-grid rt-technology-card-wrapper">
			<div
				data-w-id="f528ef47-b2e7-2b12-9f82-d36caa22fa34"
				class="w-layout-vflex rt-technology-card rt-desktop-text-center"
			>
				<div class="w-layout-hflex rt-technology-card-image-wrapper">
					<img
						src={getImage('technology_card_1').url}
						loading="lazy"
						width="397"
						height="332"
						alt="ServiceTwoC"
						sizes="(max-width: 479px) 100vw, 397px"
						class="rt-technology-card-image rt-autofit rt-tab-full-image"
					/>
				</div>
				<div class="w-layout-vflex rt-technology-card-text-wrapper">
					<div class="rt-text-style-h5">{getText('feature_1_heading', 'Revolutionizing AI Systems')}</div>
					<p class="rt-technology-card-paragraph">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Cras quis.')}</p>
				</div>
				<div data-w-id="9eb56fab-101f-7be4-dc97-06c3132fef9a" class="rt-technology-card-line"></div>
			</div>
			<div
				data-w-id="5933f521-d83a-3510-ff06-fd40f48b3c28"
				class="w-layout-vflex rt-technology-card rt-desktop-text-center active"
			>
				<div class="w-layout-hflex rt-technology-card-image-wrapper active">
					<img
						src={getImage('technology_card_2').url}
						loading="lazy"
						width="397"
						height="332"
						alt="ServiceTwoC"
						sizes="(max-width: 479px) 100vw, 397px"
						class="rt-technology-card-image rt-autofit rt-tab-full-image"
					/>
				</div>
				<div class="w-layout-vflex rt-technology-card-text-wrapper">
					<div class="rt-text-style-h5">{getText('feature_2_heading', 'Advanced AI Technology')}</div>
					<p class="rt-technology-card-paragraph active">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Cras quis.')}</p>
				</div>
				<div
					data-w-id="5933f521-d83a-3510-ff06-fd40f48b3c30"
					class="rt-technology-card-line active"
				></div>
			</div>
			<div
				data-w-id="2a249cce-28b2-7138-c8ee-07c1d9558225"
				class="w-layout-vflex rt-technology-card rt-desktop-text-center"
			>
				<div class="w-layout-hflex rt-technology-card-image-wrapper">
					<img
						src={getImage('technology_card_3').url}
						loading="lazy"
						width="397"
						height="332"
						alt="ServiceTwoC"
						sizes="(max-width: 479px) 100vw, 397px"
						class="rt-technology-card-image rt-autofit rt-tab-full-image"
					/>
				</div>
				<div class="w-layout-vflex rt-technology-card-text-wrapper">
					<div class="rt-text-style-h5">{getText('feature_3_heading', 'AI Mastery Hub')}</div>
					<p class="rt-technology-card-paragraph">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Cras quis.')}</p>
				</div>
				<div data-w-id="2a249cce-28b2-7138-c8ee-07c1d955822d" class="rt-technology-card-line"></div>
			</div>
		</div>
	</div>
</section>
