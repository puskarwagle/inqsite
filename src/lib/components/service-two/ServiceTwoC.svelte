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
						src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67efbe41fd8e0afb35041215_Technology.webp"
						loading="lazy"
						width="397"
						height="332"
						alt={getText('technology', 'Technology')}
						srcset="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67efbe41fd8e0afb35041215_Technology-p-500.webp 500w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67efbe41fd8e0afb35041215_Technology.webp 794w"
						sizes="(max-width: 479px) 100vw, 397px"
						class="rt-technology-card-image rt-autofit rt-tab-full-image"
					/>
				</div>
				<div class="w-layout-vflex rt-technology-card-text-wrapper">
					<div class="rt-text-style-h5">Revolutionizing AI Systems</div>
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
						src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67efbc12e4acde8f5d907798_Technology%20card.webp"
						loading="lazy"
						width="397"
						height="332"
						alt={getText('technology_card', 'Technology Card')}
						srcset="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67efbc12e4acde8f5d907798_Technology%20card-p-500.webp 500w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67efbc12e4acde8f5d907798_Technology%20card-p-800.webp 800w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67efbc12e4acde8f5d907798_Technology%20card.webp 843w"
						sizes="(max-width: 479px) 100vw, 397px"
						class="rt-technology-card-image rt-autofit rt-tab-full-image"
					/>
				</div>
				<div class="w-layout-vflex rt-technology-card-text-wrapper">
					<div class="rt-text-style-h5">Advanced AI Technology</div>
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
						src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67efbc124780cd9faf40c438_Technology%20card%202.webp"
						loading="lazy"
						width="397"
						height="332"
						alt={getText('technology_card', 'Technology Card')}
						srcset="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67efbc124780cd9faf40c438_Technology%20card%202-p-500.webp 500w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67efbc124780cd9faf40c438_Technology%20card%202-p-800.webp 800w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67efbc124780cd9faf40c438_Technology%20card%202.webp 824w"
						sizes="(max-width: 479px) 100vw, 397px"
						class="rt-technology-card-image rt-autofit rt-tab-full-image"
					/>
				</div>
				<div class="w-layout-vflex rt-technology-card-text-wrapper">
					<div class="rt-text-style-h5">AI Mastery Hub</div>
					<p class="rt-technology-card-paragraph">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Cras quis.')}</p>
				</div>
				<div data-w-id="2a249cce-28b2-7138-c8ee-07c1d955822d" class="rt-technology-card-line"></div>
			</div>
		</div>
	</div>
</section>
