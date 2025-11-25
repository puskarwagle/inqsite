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

<section class="rt-operations-v1">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-vflex rt-operations-block">
			<div class="rt-operations-heading">
				<h2
					data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0f33"
					class="rt-desktop-text-center rt-gap-off"
					style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
				>{getText('section_heading', 'AI-Powered Automation for Seamless Business Operations')}</h2>
			</div>
			<div class="w-layout-grid rt-operations-card-wrapper">
				<div
					data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0f36"
					class="w-layout-vflex rt-operations-card-v1 rt-shadow"
					style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
				>
					<div class="rt-operations-image-block rt-overflow-hidden">
						<img
							class="rt-operation-image rt-autofit rt-tab-full-image"
							src={getImage('image_1').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d798_Operation.webp'}
							width="280"
							height="230"
							alt={getText('operation', 'Operation')}
							sizes="(max-width: 479px) 100vw, 280px"
							data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0f38"
							loading="lazy"
							srcset="
                    https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d798_Operation-p-500.webp 500w,
                    https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d798_Operation.webp       560w
                  "
							style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
						/>
					</div>
					<div class="w-layout-vflex rt-operations-text-block">
						<div class="rt-text-style-h5">{getText('ai_that_learns', 'AI That Learns and Grows')}</div>
						<p class="rt-operations-paragraph">{getText('at_vero_eos', 'At vero eos et accusamus et iusto odio ducimus qui blanditiis.')}</p>
						<div class="w-layout-hflex">
							<a
								data-w-id="e477ecfe-ff19-eae1-fd29-07a2a1bfae03"
								href="/service-one"
								class="rt-button-v2 w-inline-block"
								><div class="w-layout-vflex rt-button-text-wrapper">
									<div class="rt-button-text">{getText('explore_more', 'Explore More')}</div>
									<div class="rt-button-text">{getText('explore_more', 'Explore More')}</div>
								</div>
								<div class="w-layout-hflex rt-button-arrow-wrapper">
									<img
										width="10"
										height="10"
										alt={getText('arrow', 'Arrow')}
										src={getImage('image_2').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg'}
										loading="lazy"
										class="rt-autofit"
									/><img
										width="10"
										height="10"
										alt={getText('arrow', 'Arrow')}
										src={getImage('image_2').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg'}
										loading="lazy"
										class="rt-autofit"
									/>
								</div>
								<div class="rt-button-hover-line" style="width: 0%;"></div></a
							>
						</div>
					</div>
				</div>
				<div
					data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0f41"
					class="w-layout-vflex rt-operations-card-v1 rt-shadow"
					style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
				>
					<div class="rt-operations-image-block rt-color-light-blue rt-overflow-hidden">
						<img
							class="rt-operation-image rt-autofit rt-tab-full-image"
							src={getImage('image_3').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d795_Operations%202.webp'}
							width="280"
							height="230"
							alt={getText('operation', 'Operation')}
							sizes="(max-width: 479px) 100vw, 280px"
							data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0f43"
							loading="lazy"
							srcset="
                    https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d795_Operations%25202-p-500.webp 500w,
                    https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d795_Operations%202.webp         566w
                  "
							style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
						/>
					</div>
					<div class="w-layout-vflex rt-operations-text-block">
						<div class="rt-text-style-h5">{getText('aipowered_solutions_for', 'AI-Powered Solutions for Growth')}</div>
						<p class="rt-operations-paragraph">{getText('voluptas_assumenda_est', 'Voluptas assumenda est, omnis dolor Temporibus autem quibusdam')}</p>
						<div class="w-layout-hflex">
							<a
								data-w-id="e477ecfe-ff19-eae1-fd29-07a2a1bfae03"
								href="/service-two"
								class="rt-button-v2 w-inline-block"
								><div class="w-layout-vflex rt-button-text-wrapper">
									<div class="rt-button-text">{getText('explore_more', 'Explore More')}</div>
									<div class="rt-button-text">{getText('explore_more', 'Explore More')}</div>
								</div>
								<div class="w-layout-hflex rt-button-arrow-wrapper">
									<img
										width="10"
										height="10"
										alt={getText('arrow', 'Arrow')}
										src={getImage('image_2').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg'}
										loading="lazy"
										class="rt-autofit"
									/><img
										width="10"
										height="10"
										alt={getText('arrow', 'Arrow')}
										src={getImage('image_2').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg'}
										loading="lazy"
										class="rt-autofit"
									/>
								</div>
								<div class="rt-button-hover-line" style="width: 0%;"></div></a
							>
						</div>
					</div>
				</div>
				<div
					data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0f4c"
					class="w-layout-vflex rt-operations-card-v1 rt-shadow"
					style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
				>
					<div class="rt-operations-image-block rt-color-light-pink rt-overflow-hidden">
						<img
							class="rt-operation-image rt-autofit rt-tab-full-image"
							src={getImage('image_4').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d79b_Operation%203.webp'}
							width="280"
							height="230"
							alt={getText('operation', 'Operation')}
							sizes="(max-width: 479px) 100vw, 280px"
							data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0f4e"
							loading="lazy"
							srcset="
                    https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d79b_Operation%25203-p-500.webp 500w,
                    https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d79b_Operation%203.webp         564w
                  "
							style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
						/>
					</div>
					<div class="w-layout-vflex rt-operations-text-block">
						<div class="rt-text-style-h5">{getText('intelligent_ai_smarter', 'Intelligent AI, Smarter Decisions')}</div>
						<p class="rt-operations-paragraph">{getText('voluptas_assumenda_est', 'Voluptas assumenda est, omnis dolor Temporibus autem quibusdam')}</p>
						<div class="w-layout-hflex">
							<a
								data-w-id="e477ecfe-ff19-eae1-fd29-07a2a1bfae03"
								href="/service-one"
								class="rt-button-v2 w-inline-block"
								><div class="w-layout-vflex rt-button-text-wrapper">
									<div class="rt-button-text">{getText('explore_more', 'Explore More')}</div>
									<div class="rt-button-text">{getText('explore_more', 'Explore More')}</div>
								</div>
								<div class="w-layout-hflex rt-button-arrow-wrapper">
									<img
										width="10"
										height="10"
										alt={getText('arrow', 'Arrow')}
										src={getImage('image_2').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg'}
										loading="lazy"
										class="rt-autofit"
									/><img
										width="10"
										height="10"
										alt={getText('arrow', 'Arrow')}
										src={getImage('image_2').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg'}
										loading="lazy"
										class="rt-autofit"
									/>
								</div>
								<div class="rt-button-hover-line" style="width: 0%;"></div></a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
