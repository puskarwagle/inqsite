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

<section class="rt-users-gallery">
	<div class="w-layout-blockcontainer rt-container-large w-container">
		<div class="rt-users-gallery-main">
			<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cef4" class="rt-users-gallery-wrapper">
				<div class="rt-users-gallery-layer"></div>
				<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cef6" class="rt-users-gallery-block one">
					<img
						width="62"
						height="54"
						alt="Client"
						src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c9_Uesr%207.svg'}
						loading="lazy"
						class="rt-users-gallery-icon"
					/>
				</div>
				<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cef8" class="rt-users-gallery-block two">
					<img
						width="70"
						height="70"
						alt="Capabilities Icon"
						src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febf2_Capabilities%20icon.svg'}
						loading="lazy"
						class="rt-users-gallery-icon"
					/>
				</div>
				<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cefa" class="rt-users-gallery-block three">
					<img
						width="70"
						height="70"
						alt="Capabilities icon"
						src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febf3_Capabilities%20icon%202.svg'}
						loading="lazy"
						class="rt-users-gallery-icon"
					/>
				</div>
				<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cefc" class="rt-users-gallery-block four">
					<img
						width="61"
						height="61"
						alt="Client"
						src={getImage('image_4').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7ca_User%203.svg'}
						loading="lazy"
						class="rt-users-gallery-icon"
					/>
				</div>
				<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cefe" class="rt-users-gallery-block five">
					<img
						width="56"
						height="56"
						alt="Client"
						src={getImage('image_5').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c8_User%204.svg'}
						loading="lazy"
						class="rt-users-gallery-icon"
					/>
				</div>
				<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cf00" class="rt-users-gallery-block six">
					<img
						width="50"
						height="50"
						alt="Client"
						src={getImage('image_6').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c5_User%205.svg'}
						loading="lazy"
						class="rt-users-gallery-icon"
					/>
				</div>
				<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cf02" class="rt-users-gallery-block seven">
					<img
						width="54"
						height="54"
						alt="Client"
						src={getImage('image_7').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c3_User%206.svg'}
						loading="lazy"
						class="rt-users-gallery-icon"
					/>
				</div>
				<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cf04" class="rt-users-gallery-block eight">
					<img
						width="51"
						height="51"
						alt="Capabilities Icon"
						src={getImage('image_8').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febef_Capabilities%20icon%203.svg'}
						loading="lazy"
						class="rt-users-gallery-icon"
					/>
				</div>
				<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cf06" class="rt-users-gallery-block nine">
					<img
						width="63"
						height="56"
						alt="Capabilities Icon"
						src={getImage('image_9').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febed_Capabilities%20icon%204.svg'}
						loading="lazy"
						class="rt-users-gallery-icon"
					/>
				</div>
				<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cf08" class="rt-users-gallery-block ten">
					<img
						width="60"
						height="60"
						alt="Capabilities Icon"
						src={getImage('image_10').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febec_Capabilities%20icon%205.svg'}
						loading="lazy"
						class="rt-users-gallery-icon"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
