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

<section class="rt-integration rt-position-relative">
	<div class="rt-integration-layer"></div>
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="rt-integration-top-text">
			<h2
				data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b1033"
				class="rt-text-color-white rt-gap-off rt-h2-gap"
				style=""
			>{getText('section_heading', 'Efficient integration solutions for seamless workflows')}</h2>
			<p
				data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b1035"
				class="rt-integration-paragraph rt-desktop-text-center"
				style=""
			>
				Lorem ipsum dolor sit amet consectetur. Odio faucibus mollis dui mattis &nbsp;eu tristique
				ut sit felis orci non.
			</p>
		</div>
		<div class="rt-users-block">
			<div
				data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b1038"
				class="w-layout-hflex rt-users-box-one"
				style=""
			>
				<div class="w-layout-hflex rt-integration-user rt-radious-fifteen">
					<img
						width="43"
						height="58"
						alt="Client"
						src={getImage('image_1').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cc_Users.svg'}
						loading="lazy"
						class="rt-integration-user-icon"
					/>
				</div>
				<div class="w-layout-hflex rt-integration-user rt-radious-fifteen">
					<img
						width="62"
						height="62"
						alt="Client"
						src={getImage('image_2').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c4_User%202.svg'}
						loading="lazy"
						class="rt-integration-user-icon"
					/>
				</div>
				<div class="w-layout-hflex rt-integration-user rt-radious-fifteen">
					<img
						width="54"
						height="54"
						alt="Client"
						src={getImage('image_3').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7ca_User%203.svg'}
						loading="lazy"
						class="rt-integration-user-icon"
					/>
				</div>
				<div class="w-layout-hflex rt-integration-user rt-radious-fifteen">
					<img
						width="50"
						height="50"
						alt="Client"
						src={getImage('image_4').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c8_User%204.svg'}
						loading="lazy"
						class="rt-integration-user-icon"
					/>
				</div>
				<div class="w-layout-hflex rt-integration-user rt-radious-fifteen">
					<img
						width="44"
						height="43"
						alt="Client"
						src={getImage('image_5').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c5_User%205.svg'}
						loading="lazy"
						class="rt-integration-user-icon"
					/>
				</div>
				<div class="w-layout-hflex rt-integration-user rt-radious-fifteen">
					<img
						width="49"
						height="48"
						alt="Client"
						src={getImage('image_6').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c3_User%206.svg'}
						loading="lazy"
						class="rt-integration-user-icon"
					/>
				</div>
			</div>
			<div
				data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b1045"
				class="w-layout-hflex rt-users-box-one two"
				style=""
			>
				<div class="w-layout-hflex rt-integration-user-two rt-radious-fifteen">
					<img
						width="62"
						height="54"
						alt="Client"
						src={getImage('image_7').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c9_Uesr%207.svg'}
						loading="lazy"
						class="rt-integration-user-icon-two"
					/>
				</div>
				<div class="w-layout-hflex rt-integration-user-two rt-radious-fifteen">
					<img
						width="48"
						height="65"
						alt="Client"
						src={getImage('image_1').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cc_Users.svg'}
						loading="lazy"
						class="rt-integration-user-icon-two"
					/>
				</div>
				<div class="w-layout-hflex rt-integration-user-two rt-radious-fifteen">
					<img
						width="70"
						height="70"
						alt="Client"
						src={getImage('image_2').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c4_User%202.svg'}
						loading="lazy"
						class="rt-integration-user-icon-two"
					/>
				</div>
				<div class="w-layout-hflex rt-integration-user-two rt-radious-fifteen">
					<img
						width="61"
						height="61"
						alt="Client"
						src={getImage('image_3').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7ca_User%203.svg'}
						loading="lazy"
						class="rt-integration-user-icon-two"
					/>
				</div>
				<div class="w-layout-hflex rt-integration-user-two rt-radious-fifteen">
					<img
						width="56"
						height="56"
						alt="Client"
						src={getImage('image_4').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c8_User%204.svg'}
						loading="lazy"
						class="rt-integration-user-icon-two"
					/>
				</div>
				<div class="w-layout-hflex rt-integration-user-two rt-radious-fifteen">
					<img
						width="49"
						height="48"
						alt="Client"
						src={getImage('image_5').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c5_User%205.svg'}
						loading="lazy"
						class="rt-integration-user-icon-two"
					/>
				</div>
				<div class="w-layout-hflex rt-integration-user-two rt-radious-fifteen">
					<img
						width="54"
						height="54"
						alt="Client"
						src={getImage('image_6').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c3_User%206.svg'}
						loading="lazy"
						class="rt-integration-user-icon-two"
					/>
				</div>
				<div class="w-layout-hflex rt-integration-user-two rt-radious-fifteen">
					<img
						width="51"
						height="51"
						alt="Client"
						src={getImage('image_8').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cd_User%209.svg'}
						loading="lazy"
						class="rt-integration-user-icon-two"
					/>
				</div>
			</div>
			<div
				data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b1056"
				class="w-layout-hflex rt-users-box-one three"
				style=""
			>
				<div class="w-layout-hflex rt-integration-user-two rt-radious-fifteen">
					<img
						width="62"
						height="54"
						alt="Client"
						src={getImage('image_7').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c9_Uesr%207.svg'}
						loading="lazy"
					/>
				</div>
				<div class="w-layout-hflex rt-integration-user-two rt-radious-fifteen">
					<img
						width="43"
						height="58"
						alt="Client"
						src={getImage('image_1').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cc_Users.svg'}
						loading="lazy"
					/>
				</div>
				<div class="w-layout-hflex rt-integration-user-two rt-radious-fifteen">
					<img
						width="62"
						height="62"
						alt="Client"
						src={getImage('image_2').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c4_User%202.svg'}
						loading="lazy"
					/>
				</div>
				<div class="w-layout-hflex rt-integration-user-two rt-radious-fifteen">
					<img
						width="54"
						height="54"
						alt="Client"
						src={getImage('image_3').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7ca_User%203.svg'}
						loading="lazy"
					/>
				</div>
				<div class="w-layout-hflex rt-integration-user-two rt-radious-fifteen">
					<img
						width="50"
						height="50"
						alt="Client"
						src={getImage('image_4').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c8_User%204.svg'}
						loading="lazy"
					/>
				</div>
				<div class="w-layout-hflex rt-integration-user-two rt-radious-fifteen">
					<img
						width="44"
						height="43"
						alt="Client"
						src={getImage('image_5').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c5_User%205.svg'}
						loading="lazy"
					/>
				</div>
				<div class="w-layout-hflex rt-integration-user-two rt-radious-fifteen">
					<img
						width="49"
						height="48"
						alt="Client"
						src={getImage('image_6').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7c3_User%206.svg'}
						loading="lazy"
					/>
				</div>
				<div class="w-layout-hflex rt-integration-user-two rt-radious-fifteen">
					<img
						width="51"
						height="51"
						alt="Client"
						src={getImage('image_8').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cd_User%209.svg'}
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
