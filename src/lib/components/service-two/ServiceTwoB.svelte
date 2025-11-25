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

<section class="rt-expertise">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-hflex rt-xpertise-content-block">
			<div class="w-layout-vflex rt-expertise-left-box-wrapper">
				<div class="w-layout-vflex rt-expertise-left-box-text-wrapper">
					<h2 data-w-id="2a1f2f09-2f72-3f5a-b508-a785f2a1c16e" class="rt-gap-off rt-h2-gap">
						{getText('section_heading', 'Harness AI Desk to Elevate Your Expertise')}
					</h2>
					<p
						data-w-id="4176857f-2602-fec1-3f7a-7fd2a1d6c8e1"
						class="rt-gap-off rt-h2-paragraph-gap"
					>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat elit at sollicitudin cursus. Nullam hendrerit orci vel pulvinar vestibulm. Donec vitae mattis lorem. Class aptent taciti sociosqu.')}</p>
				</div>
				<div class="w-layout-vflex rt-expertise-points-block">
					<div
						data-w-id="a512360c-d5b4-ccc7-5de7-002f58421c81"
						class="w-layout-hflex rt-expertise-left-box"
					>
						<div class="w-layout-hflex rt-expertise-icon-block">
							<img
								src={getImage('icon_lock').url}
								loading="lazy"
								width="20"
								height="27"
								alt="ServiceTwoB"
							/>
						</div>
						<div class="w-layout-vflex rt-erpertise-text-block">
							<div class="rt-text-style-h5">{getText('feature_1_heading', 'Secure the perfect platform fit')}</div>
							<p>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Cras quis metus neque lobortis pellentesque.')}</p>
						</div>
					</div>
					<div
						data-w-id="56765ba0-6909-50e8-5abc-9b47078099c2"
						class="w-layout-hflex rt-expertise-left-box"
					>
						<div class="w-layout-hflex rt-expertise-icon-block">
							<img
								src={getImage('icon_stat').url}
								loading="lazy"
								width="24"
								height="20"
								alt="ServiceTwoB"
							/>
						</div>
						<div class="w-layout-vflex rt-erpertise-text-block">
							<div class="rt-text-style-h5">{getText('feature_2_heading', 'Enhance algorithm capabilities')}</div>
							<p>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Cras quis metus neque lobortis pellentesque.')}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="w-layout-vflex rt-expertise-image-box-wrapper">
				<img
					class="rt-expertise-image-one"
					src={getImage('expertise_statistics_main').url}
					width="497"
					height="510"
					alt="ServiceTwoB"
					sizes="(max-width: 767px) 100vw, 497px"
					data-w-id="7f0b0f18-9461-8f09-d0d1-ca36fdd66734"
					loading="lazy"
				/>
				<div
					data-w-id="8d60adae-521a-890d-e2d0-8164a83e5a2b"
					class="rt-expertise-image-two-wrapper"
				>
					<img
						src={getImage('expertise_statistics_overlay').url}
						loading="lazy"
						width="298"
						height="217"
						alt="ServiceTwoB"
						sizes="(max-width: 479px) 100vw, 298px"
						class="rt-expertise-image-two rt-autofit"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
