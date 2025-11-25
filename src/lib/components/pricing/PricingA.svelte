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

<section class="rt-price-hero-v1 rt-position-relative">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-vflex rt-price-top-text rt-desktop-text-center">
			<h1 data-w-id="1655b1ac-c894-871b-a355-2da52bc7c9ac" class="rt-gap-off rt-h1-gap">
				Select the plan that suits you best
			</h1>
			<p
				data-w-id="1655b1ac-c894-871b-a355-2da52bc7c9ae"
				class="rt-price-top-paragraph rt-gap-off rt-h2-paragraph-gap"
			>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id magna malesuada tempor mi eget auctor dolor.')}</p>
		</div>
		<div
			data-w-id="1655b1ac-c894-871b-a355-2da52bc7c9b0"
			class="w-layout-hflex rt-monthly-yearly-wrapper-v2"
		>
			<div
				data-current="Tab 1"
				data-easing="ease"
				data-duration-in="0"
				data-duration-out="0"
				class="rt-monthly-yearly-block w-tabs"
			>
				<div class="rt-price-toggle-button w-tab-menu">
					<a data-w-tab="Tab 1" class="rt-toggle-text w-inline-block w-tab-link w--current"
						><div>Monthly</div></a
					><a data-w-tab="Tab 2" class="rt-toggle-text w-inline-block w-tab-link"
						><div>Yearly</div></a
					>
				</div>
				<div class="rt-price-card-block w-tab-content">
					<div data-w-tab="Tab 1" class="w-tab-pane w--tab-active">
						<div class="w-layout-grid rt-price-card-wrapper-v2">
							<div class="rt-pricing-plan-card-v2 rt-radious-fifteen">
								<div class="w-layout-hflex rt-card-text-top-v2">
									<div class="rt-card-text-top-text-wrapper-v2">
										<div class="rt-text-style-h5">Basic Plan</div>
										<div class="w-layout-hflex rt-price-value-v2">
											<div class="rt-text-style-h2">$199</div>
											<div>/ month</div>
										</div>
										<p>Get over 700 top-notch icons for FREE!</p>
									</div>
								</div>
								<div class="w-layout-vflex rt-price-card-details-v2">
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>AI Processing Speed</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>API Access</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>Custom AI Models</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>Automated Workflows</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>10GB Data Storage</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
											loading="lazy"
										/>
										<div>Standard response time</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
											loading="lazy"
										/>
										<div>Limited API access</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
											loading="lazy"
										/>
										<div>No priority updates</div>
									</div>
								</div>
								<div class="w-layout-vflex rt-button-block-center">
									<a
										data-wf--rt-button-v2--variant="padding"
										data-w-id="f63f91f4-b7e1-4ea7-4fb5-ef7294740b09"
										href="https://aiorbit.webflow.io/product/basic-plan"
										class="rt-button rt-button-black w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 w-inline-block"
										><div class="w-layout-hflex rt-button-text-image-wrapper color-change">
											<div class="w-layout-hflex rt-button-text-wrap">
												<div
													class="rt-button-text rt-color-change w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 rt-button-hover-in"
												>
													Select Plan
												</div>
												<div
													class="rt-button-text rt-color-change w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 rt-button-hover-out"
												>
													Select Plan
												</div>
											</div>
											<img
												width="10"
												height="9"
												alt={getText('arrow', 'Arrow')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg"
												loading="lazy"
												class="rt-button-arrow-image rt-color-change"
											/>
										</div></a
									>
									<div class="rt-price-cancel-link">Cancel Anytime</div>
								</div>
							</div>
							<div class="rt-pricing-plan-card-v2 rt-radious-fifteen active">
								<div class="w-layout-hflex rt-recommended-button">
									<img
										width="10"
										height="10"
										alt={getText('star', 'Star')}
										src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f562_Star%2068.svg"
										loading="lazy"
									/>
									<div>Recommended</div>
								</div>
								<div class="w-layout-hflex rt-card-text-top-v2">
									<div class="rt-card-text-top-text-wrapper-v2">
										<div class="rt-text-style-h5">Standard Plan</div>
										<div class="w-layout-hflex rt-price-value-v2">
											<div class="rt-text-style-h2">$299</div>
											<div>/ month</div>
										</div>
										<p>Get over 700 top-notch icons for FREE!</p>
									</div>
								</div>
								<div class="w-layout-vflex rt-price-card-details-v2">
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>AI Processing Speed</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>API Access</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>Custom AI Models</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>Automated Workflows</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>100GB Data Storage</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
											loading="lazy"
										/>
										<div>Faster response time</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
											loading="lazy"
										/>
										<div>Full API access</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
											loading="lazy"
										/>
										<div>Regular feature updates</div>
									</div>
								</div>
								<div class="w-layout-vflex rt-button-block-center">
									<a
										data-wf--rt-button-v1--variant="padding"
										data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
										href="https://aiorbit.webflow.io/product/standard-plan"
										class="rt-button w-variant-d0d31aa2-ab56-3185-ec08-96b77848f9ee w-inline-block"
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
									<div class="rt-price-cancel-link">Cancel Anytime</div>
								</div>
							</div>
							<div class="rt-pricing-plan-card-v2 rt-radious-fifteen">
								<div class="w-layout-hflex rt-card-text-top-v2">
									<div class="rt-card-text-top-text-wrapper-v2">
										<div class="rt-text-style-h5">Premium Plan</div>
										<div class="w-layout-hflex rt-price-value-v2">
											<div class="rt-text-style-h2">$399</div>
											<div>/ month</div>
										</div>
										<p>Get over 700 top-notch icons for FREE!</p>
									</div>
								</div>
								<div class="w-layout-vflex rt-price-card-details-v2">
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>AI Processing Speed</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>API Access</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>Custom AI Models</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>Automated Workflows</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>Unlimited Data Storage</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
											loading="lazy"
										/>
										<div>Priority response time</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
											loading="lazy"
										/>
										<div>Custom API integrations</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
											loading="lazy"
										/>
										<div>Early access to new features</div>
									</div>
								</div>
								<div class="w-layout-vflex rt-button-block-center">
									<a
										data-wf--rt-button-v2--variant="padding"
										data-w-id="f63f91f4-b7e1-4ea7-4fb5-ef7294740b09"
										href="https://aiorbit.webflow.io/product/premium-plan"
										class="rt-button rt-button-black w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 w-inline-block"
										><div class="w-layout-hflex rt-button-text-image-wrapper color-change">
											<div class="w-layout-hflex rt-button-text-wrap">
												<div
													class="rt-button-text rt-color-change w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 rt-button-hover-in"
												>
													Select Plan
												</div>
												<div
													class="rt-button-text rt-color-change w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 rt-button-hover-out"
												>
													Select Plan
												</div>
											</div>
											<img
												width="10"
												height="9"
												alt={getText('arrow', 'Arrow')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg"
												loading="lazy"
												class="rt-button-arrow-image rt-color-change"
											/>
										</div></a
									>
									<div class="rt-price-cancel-link">Cancel Anytime</div>
								</div>
							</div>
						</div>
					</div>
					<div data-w-tab="Tab 2" class="w-tab-pane">
						<div class="w-layout-grid rt-price-card-wrapper-v2">
							<div class="rt-pricing-plan-card-v2 rt-radious-fifteen">
								<div class="w-layout-hflex rt-card-text-top-v2">
									<div class="rt-card-text-top-text-wrapper-v2">
										<div class="rt-text-style-h5">Basic Plan</div>
										<div class="w-layout-hflex rt-price-value-v2">
											<div class="rt-text-style-h2">$149</div>
											<div>/ month</div>
										</div>
										<p>Get over 700 top-notch icons for FREE!</p>
									</div>
								</div>
								<div class="w-layout-vflex rt-price-card-details-v2">
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>AI Processing Speed</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>API Access</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>Custom AI Models</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>Automated Workflows</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>10GB Data Storage</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
											loading="lazy"
										/>
										<div>Standard response time</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
											loading="lazy"
										/>
										<div>Limited API access</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
											loading="lazy"
										/>
										<div>No priority updates</div>
									</div>
								</div>
								<div class="w-layout-vflex rt-button-block-center">
									<a
										data-wf--rt-button-v2--variant="padding"
										data-w-id="f63f91f4-b7e1-4ea7-4fb5-ef7294740b09"
										href="https://aiorbit.webflow.io/product/basic-plan"
										class="rt-button rt-button-black w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 w-inline-block"
										><div class="w-layout-hflex rt-button-text-image-wrapper color-change">
											<div class="w-layout-hflex rt-button-text-wrap">
												<div
													class="rt-button-text rt-color-change w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 rt-button-hover-in"
												>
													Select Plan
												</div>
												<div
													class="rt-button-text rt-color-change w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 rt-button-hover-out"
												>
													Select Plan
												</div>
											</div>
											<img
												width="10"
												height="9"
												alt={getText('arrow', 'Arrow')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg"
												loading="lazy"
												class="rt-button-arrow-image rt-color-change"
											/>
										</div></a
									>
									<div class="rt-price-cancel-link">Cancel Anytime</div>
								</div>
							</div>
							<div class="rt-pricing-plan-card-v2 rt-radious-fifteen active">
								<div class="w-layout-hflex rt-recommended-button">
									<img
										width="10"
										height="10"
										alt={getText('star', 'Star')}
										src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f562_Star%2068.svg"
										loading="lazy"
									/>
									<div>Recommended</div>
								</div>
								<div class="w-layout-hflex rt-card-text-top-v2">
									<div class="rt-card-text-top-text-wrapper-v2">
										<div class="rt-text-style-h5">Standard Plan</div>
										<div class="w-layout-hflex rt-price-value-v2">
											<div class="rt-text-style-h2">$249</div>
											<div>/ month</div>
										</div>
										<p>Get over 700 top-notch icons for FREE!</p>
									</div>
								</div>
								<div class="w-layout-vflex rt-price-card-details-v2">
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>AI Processing Speed</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>API Access</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>Custom AI Models</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>Automated Workflows</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>100GB Data Storage</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
											loading="lazy"
										/>
										<div>Faster response time</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
											loading="lazy"
										/>
										<div>Full API access</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
											loading="lazy"
										/>
										<div>Regular feature updates</div>
									</div>
								</div>
								<div class="w-layout-vflex rt-button-block-center">
									<a
										data-wf--rt-button-v1--variant="padding"
										data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
										href="https://aiorbit.webflow.io/product/standard-plan"
										class="rt-button w-variant-d0d31aa2-ab56-3185-ec08-96b77848f9ee w-inline-block"
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
									<div class="rt-price-cancel-link">Cancel Anytime</div>
								</div>
							</div>
							<div class="rt-pricing-plan-card-v2 rt-radious-fifteen">
								<div class="w-layout-hflex rt-card-text-top-v2">
									<div class="rt-card-text-top-text-wrapper-v2">
										<div class="rt-text-style-h5">Premium Plan</div>
										<div class="w-layout-hflex rt-price-value-v2">
											<div class="rt-text-style-h2">$349</div>
											<div>/ month</div>
										</div>
										<p>Get over 700 top-notch icons for FREE!</p>
									</div>
								</div>
								<div class="w-layout-vflex rt-price-card-details-v2">
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>AI Processing Speed</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>API Access</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>Custom AI Models</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>Automated Workflows</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>Unlimited Data Storage</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
											loading="lazy"
										/>
										<div>Priority response time</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
											loading="lazy"
										/>
										<div>Custom API integrations</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
											loading="lazy"
										/>
										<div>Early access to new features</div>
									</div>
								</div>
								<div class="w-layout-vflex rt-button-block-center">
									<a
										data-wf--rt-button-v2--variant="padding"
										data-w-id="f63f91f4-b7e1-4ea7-4fb5-ef7294740b09"
										href="https://aiorbit.webflow.io/product/premium-plan"
										class="rt-button rt-button-black w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 w-inline-block"
										><div class="w-layout-hflex rt-button-text-image-wrapper color-change">
											<div class="w-layout-hflex rt-button-text-wrap">
												<div
													class="rt-button-text rt-color-change w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 rt-button-hover-in"
												>
													Select Plan
												</div>
												<div
													class="rt-button-text rt-color-change w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 rt-button-hover-out"
												>
													Select Plan
												</div>
											</div>
											<img
												width="10"
												height="9"
												alt={getText('arrow', 'Arrow')}
												src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg"
												loading="lazy"
												class="rt-button-arrow-image rt-color-change"
											/>
										</div></a
									>
									<div class="rt-price-cancel-link">Cancel Anytime</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="rt-green-dot"></div>
	<div class="rt-dark-yellow-dot"></div>
	<div class="rt-dark-yellow-dot-two"></div>
	<div class="rt-violet-dot"></div>
	<div class="rt-violet-dot-two"></div>
</section>
