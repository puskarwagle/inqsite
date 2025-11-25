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

<section class="rt-data-encrypt">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="rt-data-main">
			<div class="w-layout-vflex rt-data-title">
				<h2
					data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0f7f"
					class="rt-gap-off rt-desktop-text-center"
					style=""
				>{getText('section_heading', 'Bringing Intelligence to Automation with AI')}</h2>
			</div>
			<div class="w-layout-hflex rt-data-encryption">
				<div class="w-layout-vflex rt-data-block-one">
					<div
						data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0f83"
						class="w-layout-vflex rt-data-card-one rt-overflow-hidden"
						style=""
					>
						<div class="rt-text-style-h5">{getText('ai_that_adapts', 'AI That adapts to you')}</div>
						<p class="rt-data-card-one-paragraph">{getText('in_dui_cras', 'In dui cras odio sodales morbi ac egestas. Ipsum integer ultricies vitae purus amet.')}</p>
						<img
							class="rt-data-card-image"
							src={getImage('image_1').url}
							width="330"
							height="330"
							alt={getText('data', 'AI Data')}
							sizes="(max-width: 479px) 100vw, 330px"
							data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0f88"
							loading="lazy"
							style=""
						/>
					</div>
					<div
						data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0f89"
						class="w-layout-hflex rt-data-card-two"
						style=""
					>
						<div class="rt-ai-data-box-two-text">
							<div class="rt-text-style-h6">{getText('intelligent_ai_smarter', 'Intelligent AI, Smarter Decisions')}</div>
						</div>
						<div class="w-layout-vflex rt-ai-data-box-two-image-block">
							<div class="w-layout-hflex rt-ai-data-box-two-image-box">
								<img
									width="79"
									height="69"
									alt={getText('data', 'AI data')}
									src={getImage('image_2').url}
									loading="lazy"
									class="rt-ai-data-box-two-image one"
								/><img
									width="79"
									height="69"
									alt={getText('data', 'AI Data')}
									src={getImage('image_3').url}
									loading="lazy"
									class="rt-ai-data-box-two-image two"
								/>
							</div>
							<div class="w-layout-hflex rt-ai-data-box-two-image-box">
								<img
									width="79"
									height="69"
									alt={getText('data', 'AI Data')}
									src={getImage('image_4').url}
									loading="lazy"
									class="rt-ai-data-box-two-image three"
								/><img
									width="79"
									height="69"
									alt={getText('data', 'AI Data')}
									src={getImage('image_5').url}
									loading="lazy"
									class="rt-ai-data-box-two-image four"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="w-layout-hflex rt-data-block-two">
					<div
						data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0f95"
						class="w-layout-hflex rt-data-card-three rt-position-relative rt-overflow-hidden"
						style=""
					>
						<div class="rt-data-card-text-wrapper">
							<div class="rt-text-style-h4">{getText('secure_data_encryption', 'Secure Data Encryption')}</div>
							<p class="rt-data-card-three-paragraph">
								Pulvinar tempus duis nam metus et nunc nisl. Natoque at aliquam viverra sed. Velit
								quis nunc.
							</p>
							<div class="w-layout-hflex rt-button-block">
								<a
									data-wf--rt-button-v1--variant="base"
									data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
									href="/about"
									class="rt-button w-inline-block"
									><div class="w-layout-hflex rt-button-text-image-wrapper">
										<div class="w-layout-hflex rt-button-text-wrap">
											<div class="rt-button-text rt-button-hover-in" style="">{getText('explore_more', 'Explore More')}</div>
											<div class="rt-button-text rt-button-hover-out" style="">{getText('explore_more', 'Explore More')}</div>
										</div>
										<img
											width="10"
											height="9"
											alt={getText('arrow', 'Arrow')}
											src={getImage('image_6').url}
											loading="lazy"
											class="rt-button-arrow-image"
										/>
									</div></a
								>
							</div>
						</div>
						<div class="rt-cncryption-circle-block">
							<div
								style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
								class="w-layout-hflex rt-encryption-circle-block-three rt-position-relative"
							>
								<div class="w-layout-hflex rt-encryption-small-icon">
									<img
										width="14"
										height="14"
										alt={getText('client', 'Client')}
										src={getImage('image_7').url}
										loading="lazy"
									/>
								</div>
								<div class="w-layout-hflex rt-encryption-small-icon five">
									<img
										width="14"
										height="14"
										alt={getText('client', 'Client')}
										src={getImage('image_8').url}
										loading="lazy"
									/>
								</div>
								<div class="w-layout-hflex rt-encryption-small-icon three">
									<img
										width="23"
										height="23"
										alt={getText('client', 'Client')}
										src={getImage('image_9').url}
										loading="lazy"
									/>
								</div>
								<div class="w-layout-hflex rt-encryption-small-icon four">
									<img
										width="14"
										height="14"
										alt={getText('client', 'Client')}
										src={getImage('image_10').url}
										loading="lazy"
									/>
								</div>
								<div
									style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
									class="w-layout-hflex rt-encryption-circle-block-two rt-position-relative"
								>
									<div class="w-layout-hflex rt-encryption-small-icon one">
										<img
											width="14"
											height="9"
											alt={getText('client', 'Client')}
											src={getImage('image_11').url}
											loading="lazy"
										/>
									</div>
									<div class="w-layout-hflex rt-encryption-small-icon two">
										<img
											width="14"
											height="9"
											alt={getText('client', 'Client')}
											src={getImage('image_12').url}
											loading="lazy"
										/>
									</div>
									<div
										style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
										class="w-layout-hflex rt-encryption-main-icon"
									>
										<img
											width="52"
											height="31"
											alt={getText('data', 'Data')}
											src={getImage('image_13').url}
											loading="lazy"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="w-layout-hflex rt-data-card-four-wrapper">
						<div
							data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0fb2"
							class="w-layout-vflex rt-data-card-four"
							style=""
						>
							<img
								width="350"
								height="174"
								alt={getText('intelligence', 'Intelligence')}
								src={getImage('image_14').url}
								loading="lazy"
								sizes="(max-width: 479px) 100vw, 350px"
								class="rt-data-card-four-image rt-autofit rt-tab-full-image"
							/>
							<div>
								<div class="rt-text-style-h5">{getText('aidriven_insights_for', 'AI-Driven Insights for Growth')}</div>
								<p class="rt-data-card-four-paragraph">
									Neque convallis faucibus lorem sit quis vitae quisque. Dignissim scelerisque
									vulputate.
								</p>
							</div>
						</div>
						<div
							data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0fb9"
							class="w-layout-vflex rt-data-card-four"
							style=""
						>
							<img
								width="350"
								height="174"
								alt={getText('data', 'AI Data')}
								src={getImage('image_15').url}
								loading="lazy"
								sizes="(max-width: 479px) 100vw, 350px"
								class="rt-data-card-four-image rt-autofit rt-tab-full-image"
							/>
							<div>
								<div class="rt-text-style-h5">{getText('automated_workflows', 'Automated Workflows')}</div>
								<p class="rt-data-card-four-paragraph">
									Dui mi accumsan lorem arcu dignissim porta tortor non. Ac mauris vulputate mattis
									amet.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
