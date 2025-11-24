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

<section
	data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a755d9"
	class="rt-operation-v2 rt-position-relative rt-overflow-hidden"
>
	<div class="div-block">
		<div class="rt-operation-layer"></div>
		<div class="rt-cncryption-circle-block-v2">
			<div
				data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a755dd"
				class="w-layout-hflex rt-encryption-circle-block-three-v2"
			>
				<div class="w-layout-hflex rt-encryption-small-icon-block-v2">
					<img
						width="33"
						height="33"
						alt="Client"
						src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c8_User%204.svg'}
						loading="lazy"
						class="rt-encryption-small-icon-v2"
					/>
				</div>
				<div class="w-layout-hflex rt-encryption-small-icon-block-v2 two">
					<img
						width="33"
						height="33"
						alt="Client"
						src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c4_User%202.svg'}
						loading="lazy"
						class="rt-encryption-small-icon-v2"
					/>
				</div>
				<div class="w-layout-hflex rt-encryption-small-icon-block-v2 three">
					<img
						width="33"
						height="33"
						alt="Client"
						src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c3_User%206.svg'}
						loading="lazy"
						class="rt-encryption-small-icon-v2"
					/>
				</div>
				<div class="w-layout-hflex rt-encryption-small-icon-block-v2 four">
					<img
						width="20"
						height="20"
						alt="Client"
						src={getImage('image_4').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7ca_User%203.svg'}
						loading="lazy"
						class="rt-encryption-small-icon-v2"
					/>
				</div>
				<div
					data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a755e6"
					class="w-layout-hflex rt-encryption-circle-block-two-v2"
				>
					<div class="w-layout-hflex rt-encryption-small-icon-two-v2 one">
						<img
							width="33"
							height="33"
							alt="Client"
							src={getImage('image_5').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c5_User%205.svg'}
							loading="lazy"
							class="rt-encryption-small-icon-v2"
						/>
					</div>
					<div class="w-layout-hflex rt-encryption-small-icon-two-v2 two">
						<img
							width="33"
							height="33"
							alt="Capabilities Icon"
							src={getImage('image_6').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febec_Capabilities%20icon%205.svg'}
							loading="lazy"
						/>
					</div>
					<div class="w-layout-hflex rt-encryption-small-icon-two-v2 three">
						<img
							width="45"
							height="60"
							alt="Client"
							src={getImage('image_7').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7b6_Data%20logo%206.svg'}
							loading="lazy"
							class="rt-encryption-small-icon-v2"
						/>
					</div>
					<div class="w-layout-hflex rt-encryption-small-icon-two-v2 four">
						<img
							width="50"
							height="50"
							alt="Capabilities Icon"
							src={getImage('image_8').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febef_Capabilities%20icon%203.svg'}
							loading="lazy"
							class="rt-encryption-small-icon-v2"
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="rt-cncryption-circle-block-two-v2">
			<div
				data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a755f0"
				class="w-layout-hflex rt-encryption-circle-block-three-v2"
			>
				<div class="w-layout-hflex rt-encryption-small-icon-block-v2">
					<img
						width="33"
						height="33"
						alt="Client"
						src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c8_User%204.svg'}
						loading="lazy"
						class="rt-encryption-small-icon-v2"
					/>
				</div>
				<div class="w-layout-hflex rt-encryption-small-icon-block-v2 two">
					<img
						width="33"
						height="33"
						alt="Client"
						src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c3_User%206.svg'}
						loading="lazy"
						class="rt-encryption-small-icon-v2"
					/>
				</div>
				<div class="w-layout-hflex rt-encryption-small-icon-block-v2 three">
					<img
						width="33"
						height="33"
						alt="Capabilities Icon"
						src={getImage('image_9').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febed_Capabilities%20icon%204.svg'}
						loading="lazy"
						class="rt-encryption-small-icon-v2"
					/>
				</div>
				<div class="w-layout-hflex rt-encryption-small-icon-block-v2 four">
					<img
						width="33"
						height="33"
						alt="Client"
						src={getImage('image_4').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7ca_User%203.svg'}
						loading="lazy"
						class="rt-encryption-small-icon-v2"
					/>
				</div>
				<div
					data-w-id="2db9ea1b-8d09-a03c-b9de-ccfc78a755f9"
					class="w-layout-hflex rt-encryption-circle-block-two-v2"
				>
					<div class="w-layout-hflex rt-encryption-small-icon-two-v2 one">
						<img
							width="33"
							height="33"
							alt="Capabilities Icon"
							src={getImage('image_6').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febec_Capabilities%20icon%205.svg'}
							loading="lazy"
							class="rt-encryption-small-icon-v2"
						/>
					</div>
					<div class="w-layout-hflex rt-encryption-small-icon-two-v2 two">
						<img
							width="33"
							height="33"
							alt="Client"
							src={getImage('image_7').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7b6_Data%20logo%206.svg'}
							loading="lazy"
						/>
					</div>
					<div class="w-layout-hflex rt-encryption-small-icon-two-v2 three">
						<img
							width="50"
							height="50"
							alt="Capabilities Icon"
							src={getImage('image_8').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febef_Capabilities%20icon%203.svg'}
							loading="lazy"
							class="rt-encryption-small-icon-v2"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-vflex rt-operation-content-v2 rt-desktop-text-center">
			<h2 class="rt-operation-title-v2 rt-gap-off rt-h2-gap">{getText('section_heading', 'Transform Operations Through Seamless Platform Integrations')}</h2>
			<p class="rt-operation-paragraph-v2 rt-text-color-body-dark rt-h2-gap">
				Lorem ipsum dolor sit amet consectetur. Suscipit viverra donec scelerisque tellus in
				vulputate. Cursus tempus congue faucibus faucibus.
			</p>
			<a
				data-wf--rt-button-v1--variant="base"
				data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
				href="about.html"
				class="rt-button w-inline-block"
				><div class="w-layout-hflex rt-button-text-image-wrapper">
					<div class="w-layout-hflex rt-button-text-wrap">
						<div class="rt-button-text rt-button-hover-in">{getText('explore_more', 'Explore More')}</div>
						<div class="rt-button-text rt-button-hover-out">{getText('explore_more', 'Explore More')}</div>
					</div>
					<img
						width="10"
						height="9"
						alt="Arrow"
						src={getImage('image_10').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg'}
						loading="lazy"
						class="rt-button-arrow-image"
					/></div
			></a>
		</div>
	</div>
</section>
