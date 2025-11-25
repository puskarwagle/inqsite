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

<section class="rt-price-wrapper">
	<section class="rt-pricing-plan-block-v1">
		<div class="w-layout-blockcontainer rt-container-small w-container">
			<div class="rt-pricing-plan-top-title-block">
				<div class="rt-desktop-text-center">
					<h2
						data-w-id="09bf4b3c-9e24-c6e7-7086-feb882cd3bb6"
						class="pricing-plan-top-title rt-gap-off rt-h2-gap"
					>
						Select the pricing plan that best fits your business
					</h2>
					<p
						data-w-id="09bf4b3c-9e24-c6e7-7086-feb882cd3bb8"
						class="rt-pricing-plan-top-paragraph rt-gap-off rt-h2-paragraph-gap"
					>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur adipiscing elit In et sapien vitae augue lobortis tincidunt Sed sollicitudin nec velit in accumsan. Etiam non urna rutrum, tincidunt diam')}</p>
				</div>
				<div
					data-w-id="09bf4b3c-9e24-c6e7-7086-feb882cd3bba"
					class="w-layout-hflex rt-monthly-yearly-wrapper"
				>
					<div
						data-current="Tab 1"
						data-easing="ease"
						data-duration-in="0"
						data-duration-out="0"
						class="rt-monthly-yearly-block w-tabs"
					>
						<div
							data-w-id="09bf4b3c-9e24-c6e7-7086-feb882cd3bbc"
							class="rt-price-toggle-button w-tab-menu"
						>
							<a data-w-tab="Tab 1" class="rt-toggle-text w-inline-block w-tab-link w--current"
								><div>Monthly</div></a
							><a data-w-tab="Tab 2" class="rt-toggle-text w-inline-block w-tab-link"
								><div>Yearly</div></a
							>
						</div>
						<div class="rt-price-card-block w-tab-content">
							<div data-w-tab="Tab 1" class="w-tab-pane w--tab-active">
								<div class="w-layout-grid rt-price-card-wrapper">
									<div
										data-w-id="09bf4b3c-9e24-c6e7-7086-feb882cd3bc6"
										class="rt-pricing-plan-card-v1 rt-radious-fifteen"
									>
										<div class="w-layout-hflex rt-card-content-top">
											<div>
												<div class="rt-text-style-h5">Basic Plan</div>
												<div class="rt-price-value">$199</div>
												<div>Per month</div>
											</div>
											<div class="rt-price-button-block">
												<a
													data-wf--rt-button-v1--variant="base"
													data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
													href="https://aiorbit.webflow.io/product/basic-plan"
													class="rt-button w-inline-block"
													><div class="w-layout-hflex rt-button-text-image-wrapper">
														<div class="w-layout-hflex rt-button-text-wrap">
															<div class="rt-button-text rt-button-hover-in">Select Plan</div>
															<div class="rt-button-text rt-button-hover-out">Select Plan</div>
														</div>
														<img
															width="10"
															height="9"
															alt={getText('arrow', 'Arrow')}
															src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg"
															loading="lazy"
															class="rt-button-arrow-image"
														/>
													</div></a
												>
											</div>
										</div>
										<div class="w-layout-vflex rt-price-card-details">
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>AI Processing Speed</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>API Access</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>Custom AI Models</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>Automated Workflows</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>10GB Data Storage</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>Standard response time</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>Limited API access</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>No priority updates</div>
											</div>
										</div>
									</div>
									<div
										data-w-id="09bf4b3c-9e24-c6e7-7086-feb882cd3bff"
										class="rt-pricing-plan-card-v1 rt-radious-fifteen active"
									>
										<div class="w-layout-hflex rt-card-content-top">
											<div>
												<div class="rt-text-style-h5">Standard Plan</div>
												<div class="rt-price-value">$299</div>
												<div>Per month</div>
											</div>
											<div class="rt-price-button-block">
												<a
													data-wf--rt-button-v1--variant="base"
													data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
													href="https://aiorbit.webflow.io/product/standard-plan"
													class="rt-button w-inline-block"
													><div class="w-layout-hflex rt-button-text-image-wrapper">
														<div class="w-layout-hflex rt-button-text-wrap">
															<div class="rt-button-text rt-button-hover-in">Select Plan</div>
															<div class="rt-button-text rt-button-hover-out">Select Plan</div>
														</div>
														<img
															width="10"
															height="9"
															alt={getText('arrow', 'Arrow')}
															src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg"
															loading="lazy"
															class="rt-button-arrow-image"
														/>
													</div></a
												>
											</div>
										</div>
										<div class="w-layout-vflex rt-price-card-details">
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two active"
													/>
												</div>
												<div>AI Processing Speed</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two active"
													/>
												</div>
												<div>API Access</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two active"
													/>
												</div>
												<div>Custom AI Models</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two active"
													/>
												</div>
												<div>Automated Workflows</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two active"
													/>
												</div>
												<div>10GB Data Storage</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two active"
													/>
												</div>
												<div>Faster response time</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two active"
													/>
												</div>
												<div>Full API access</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two active"
													/>
												</div>
												<div>Regular feature updates</div>
											</div>
										</div>
									</div>
									<div
										data-w-id="09bf4b3c-9e24-c6e7-7086-feb882cd3c3a"
										class="rt-pricing-plan-card-v1 rt-radious-fifteen"
									>
										<div class="w-layout-hflex rt-card-content-top">
											<div>
												<div class="rt-text-style-h5">Premium Plan</div>
												<div class="rt-price-value">$399</div>
												<div>Per month</div>
											</div>
											<div class="rt-price-button-block">
												<a
													data-wf--rt-button-v1--variant="base"
													data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
													href="https://aiorbit.webflow.io/product/premium-plan"
													class="rt-button w-inline-block"
													><div class="w-layout-hflex rt-button-text-image-wrapper">
														<div class="w-layout-hflex rt-button-text-wrap">
															<div class="rt-button-text rt-button-hover-in">Select Plan</div>
															<div class="rt-button-text rt-button-hover-out">Select Plan</div>
														</div>
														<img
															width="10"
															height="9"
															alt={getText('arrow', 'Arrow')}
															src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg"
															loading="lazy"
															class="rt-button-arrow-image"
														/>
													</div></a
												>
											</div>
										</div>
										<div class="w-layout-vflex rt-price-card-details">
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>AI Processing Speed</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>API Access</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>Custom AI Models</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>Automated Workflows</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>10GB Data Storage</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>Priority response time</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>Custom API integrations</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>Early access to new features</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div data-w-tab="Tab 2" class="w-tab-pane">
								<div class="w-layout-grid rt-price-card-wrapper">
									<div class="rt-pricing-plan-card-v1 rt-radious-fifteen">
										<div class="w-layout-hflex rt-card-content-top">
											<div>
												<div class="rt-text-style-h5">Basic Plan</div>
												<div class="rt-price-value">$149</div>
												<div>Per month</div>
											</div>
											<div class="rt-price-button-block">
												<a
													data-wf--rt-button-v1--variant="base"
													data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
													href="https://aiorbit.webflow.io/product/basic-plan"
													class="rt-button w-inline-block"
													><div class="w-layout-hflex rt-button-text-image-wrapper">
														<div class="w-layout-hflex rt-button-text-wrap">
															<div class="rt-button-text rt-button-hover-in">Select Plan</div>
															<div class="rt-button-text rt-button-hover-out">Select Plan</div>
														</div>
														<img
															width="10"
															height="9"
															alt={getText('arrow', 'Arrow')}
															src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg"
															loading="lazy"
															class="rt-button-arrow-image"
														/>
													</div></a
												>
											</div>
										</div>
										<div class="w-layout-vflex rt-price-card-details">
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>AI Processing Speed</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>API Access</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>Custom AI Models</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>Automated Workflows</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>10GB Data Storage</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>Standard response time</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>Limited API access</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>No priority updates</div>
											</div>
										</div>
									</div>
									<div class="rt-pricing-plan-card-v1 rt-radious-fifteen active">
										<div class="w-layout-hflex rt-card-content-top">
											<div>
												<div class="rt-text-style-h5">Standard Plan</div>
												<div class="rt-price-value">$249</div>
												<div>Per month</div>
											</div>
											<div class="rt-price-button-block">
												<a
													data-wf--rt-button-v1--variant="base"
													data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
													href="https://aiorbit.webflow.io/product/standard-plan"
													class="rt-button w-inline-block"
													><div class="w-layout-hflex rt-button-text-image-wrapper">
														<div class="w-layout-hflex rt-button-text-wrap">
															<div class="rt-button-text rt-button-hover-in">Select Plan</div>
															<div class="rt-button-text rt-button-hover-out">Select Plan</div>
														</div>
														<img
															width="10"
															height="9"
															alt={getText('arrow', 'Arrow')}
															src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg"
															loading="lazy"
															class="rt-button-arrow-image"
														/>
													</div></a
												>
											</div>
										</div>
										<div class="w-layout-vflex rt-price-card-details">
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two active"
													/>
												</div>
												<div>AI Processing Speed</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two active"
													/>
												</div>
												<div>API Access</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two active"
													/>
												</div>
												<div>Custom AI Models</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two active"
													/>
												</div>
												<div>Automated Workflows</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two active"
													/>
												</div>
												<div>10GB Data Storage</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two active"
													/>
												</div>
												<div>Faster response time</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two active"
													/>
												</div>
												<div>Full API access</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two active"
													/>
												</div>
												<div>Regular feature updates</div>
											</div>
										</div>
									</div>
									<div class="rt-pricing-plan-card-v1 rt-radious-fifteen">
										<div class="w-layout-hflex rt-card-content-top">
											<div>
												<div class="rt-text-style-h5">Premium Plan</div>
												<div class="rt-price-value">$349</div>
												<div>Per month</div>
											</div>
											<div class="rt-price-button-block">
												<a
													data-wf--rt-button-v1--variant="base"
													data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
													href="https://aiorbit.webflow.io/product/premium-plan"
													class="rt-button w-inline-block"
													><div class="w-layout-hflex rt-button-text-image-wrapper">
														<div class="w-layout-hflex rt-button-text-wrap">
															<div class="rt-button-text rt-button-hover-in">Select Plan</div>
															<div class="rt-button-text rt-button-hover-out">Select Plan</div>
														</div>
														<img
															width="10"
															height="9"
															alt={getText('arrow', 'Arrow')}
															src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg"
															loading="lazy"
															class="rt-button-arrow-image"
														/>
													</div></a
												>
											</div>
										</div>
										<div class="w-layout-vflex rt-price-card-details">
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>AI Processing Speed</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>API Access</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>Custom AI Models</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>Automated Workflows</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>10GB Data Storage</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>Priority response time</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>Custom API integrations</div>
											</div>
											<div class="w-layout-hflex rt-price-details">
												<div class="w-layout-hflex rt-price-icon-block">
													<img
														width="18"
														height="18"
														alt={getText('tick', 'TIck')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931fb3a4dad2509f866_Skin%20tick.svg"
														loading="lazy"
														class="rt-price-icon"
													/><img
														width="18"
														height="18"
														alt={getText('tick', 'Tick')}
														src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
														loading="lazy"
														class="rt-price-icon-two one"
													/>
												</div>
												<div>Early access to new features</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</section>
