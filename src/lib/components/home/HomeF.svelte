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

<section class="rt-ai-business-operation-v1">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-hflex rt-ai-business-operation-block">
			<div class="rt-ai-business-operation-text-wrapper">
				<div class="w-layout-vflex rt-ai-business-operation-text-block">
					<h2
						data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0fe7"
						class="rt-gap-off rt-h2-gap"
						style=""
					>{getText('section_heading', 'Cloud Integration for Seamless Business Operations')}</h2>
					<p
						data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0fe9"
						class="rt-ai-business-operation-paragraph rt-gap-off"
						style=""
					>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum odio eget orci mattis laoreet. In nec')}</p>
				</div>
				<div class="w-layout-vflex rt-business-operations">
					<div
						data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0fec"
						class="rt-business-operations-block-one"
						style=""
					>
						<div data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0fed" class="rt-business-toggle">
							<div
								style="background-color: rgb(248, 248, 248); border-color: rgb(248, 248, 248);"
								class="rt-accordian-number-v1 rt-text-style-h5 active"
							>
								01
							</div>
							<div class="w-layout-hflex rt-operation-main-title">
								<div class="rt-text-style-h5">{getText('custom_software_tailored', 'Custom Software Tailored to Your Needs')}</div>
								<div class="w-layout-hflex rt-dropdown-icon-block">
									<div class="rt-dropdown-icon-one"></div>
									<div
										style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg); transform-style: preserve-3d;"
										class="rt-dropdown-icon-two active"
									></div>
								</div>
							</div>
						</div>
						<div class="rt-dropdown-text-width-v1 active" style="">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur mauris nulla, eleifend quis ex eu tincidunt consequat erat')}</div>
					</div>
					<div
						data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0ff8"
						class="rt-business-operations-block-one"
						style=""
					>
						<div data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0ff9" class="rt-business-toggle">
							<div
								style="background-color: rgb(255, 255, 255); border-color: rgb(211, 211, 211);"
								class="rt-accordian-number-v1 rt-text-style-h5"
							>
								02
							</div>
							<div class="w-layout-hflex rt-operation-main-title">
								<div class="rt-text-style-h5">{getText('powerful_software_for', 'Powerful Software For Smarter Work')}</div>
								<div class="w-layout-hflex rt-dropdown-icon-block">
									<div class="rt-dropdown-icon-one"></div>
									<div
										style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
										class="rt-dropdown-icon-two"
									></div>
								</div>
							</div>
						</div>
						<div style="height: 0px;" class="rt-dropdown-text-width-v1">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur mauris nulla, eleifend quis ex eu tincidunt consequat erat')}</div>
					</div>
					<div
						data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b1004"
						class="rt-business-operations-block-one"
						style=""
					>
						<div data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b1005" class="rt-business-toggle">
							<div
								style="background-color: rgb(255, 255, 255); border-color: rgb(211, 211, 211);"
								class="rt-accordian-number-v1 rt-text-style-h5"
							>
								03
							</div>
							<div class="w-layout-hflex rt-operation-main-title">
								<div class="rt-text-style-h5">{getText('achieve_more_with', 'Achieve More With Cloud Technology')}</div>
								<div class="w-layout-hflex rt-dropdown-icon-block">
									<div class="rt-dropdown-icon-one"></div>
									<div
										style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
										class="rt-dropdown-icon-two"
									></div>
								</div>
							</div>
						</div>
						<div style="height: 0px;" class="rt-dropdown-text-width-v1">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur mauris nulla, eleifend quis ex eu tincidunt consequat erat')}</div>
					</div>
				</div>
			</div>
			<div
				class="w-layout-hflex rt-ai-business-side-image-block rt-position-relative rt-overflow-hidden"
			>
				<img
					class="rt-autofit rt-operation-image rt-tab-full-image"
					src={getImage('image_1').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7bb_AI%20Operations.webp'}
					width="410"
					height="650"
					alt={getText('operations', 'AI Operations')}
					sizes="(max-width: 479px) 100vw, 410px"
					data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b1011"
					loading="lazy"
					srcset="
                https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7bb_AI%2520Operations-p-500.webp 500w,
                https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7bb_AI%2520Operations-p-800.webp 800w,
                https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7bb_AI%20Operations.webp         811w
              "
					style=""
				/>
				<div
					data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b1012"
					class="rt-operation-square"
					style=""
				></div>
			</div>
		</div>
	</div>
</section>
