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
				{getText('section_heading', 'Select the plan that suits you best')}
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
						><div>{getText('monthly', 'Monthly')}</div></a
					                    ><a data-w-tab="Tab 2" class="rt-toggle-text w-inline-block w-tab-link"
											><div>{getText('yearly', 'Yearly')}</div></a
										>				</div>
				<div class="rt-price-card-block w-tab-content">
					<div data-w-tab="Tab 1" class="w-tab-pane w--tab-active">
						<div class="w-layout-grid rt-price-card-wrapper-v2">
							<div class="rt-pricing-plan-card-v2 rt-radious-fifteen">
								<div class="w-layout-hflex rt-card-text-top-v2">
									<div class="rt-card-text-top-text-wrapper-v2">
										<div class="rt-text-style-h5">{getText('basic_plan', 'Basic Plan')}</div>
										<div class="w-layout-hflex rt-price-value-v2">
											<div class="rt-text-style-h2">{getText('basic_plan_price_monthly', '$199')}</div>
											<div>{getText('per_month', '/ month')}</div>
										</div>
										<p>{getText('free_icons_offer', 'Get over 700 top-notch icons for FREE!')}</p>
									</div>
								</div>
								<div class="w-layout-vflex rt-price-card-details-v2">
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('ai_processing_speed', 'AI Processing Speed')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('api_access', 'API Access')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('custom_ai_models', 'Custom AI Models')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('automated_workflows', 'Automated Workflows')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('10gb_data_storage', '10GB Data Storage')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src={getImage('price_tick').url}
											loading="lazy"
										/>
										<div>{getText('standard_response_time', 'Standard response time')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src={getImage('price_tick').url}
											loading="lazy"
										/>
										<div>{getText('limited_api_access', 'Limited API access')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src={getImage('price_tick').url}
											loading="lazy"
										/>
										<div>{getText('no_priority_updates', 'No priority updates')}</div>
									</div>
								</div>
								<div class="w-layout-vflex rt-button-block-center">
									<a
										data-wf--rt-button-v2--variant="padding"
										data-w-id="f63f91f4-b7e1-4ea7-4fb5-ef7294740b09"
										href={getLink('basic_plan_link').href || 'https://aiorbit.webflow.io/product/basic-plan'}
										class="rt-button rt-button-black w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 w-inline-block"
										><div class="w-layout-hflex rt-button-text-image-wrapper color-change">
											<div class="w-layout-hflex rt-button-text-wrap">
												<div
													class="rt-button-text rt-color-change w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 rt-button-hover-in"
												>
													{getText('select_plan', 'Select Plan')}
												</div>
												<div
													class="rt-button-text rt-color-change w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 rt-button-hover-out"
												>
													{getText('select_plan', 'Select Plan')}
												</div>
											</div>
											<img
												width="10"
												height="9"
												alt={getText('arrow', 'Arrow')}
												src={getImage('button_arrow').url}
												loading="lazy"
												class="rt-button-arrow-image rt-color-change"
											/>
										</div></a
									>
									<div class="rt-price-cancel-link">{getText('cancel_anytime', 'Cancel Anytime')}</div>
								</div>
							</div>
							<div class="rt-pricing-plan-card-v2 rt-radious-fifteen active">
								<div class="w-layout-hflex rt-recommended-button">
									<img
										width="10"
										height="10"
										alt={getText('star', 'Star')}
										src={getImage('star_icon').url}
										loading="lazy"
									/>
									<div>{getText('recommended', 'Recommended')}</div>
								</div>
								<div class="w-layout-hflex rt-card-text-top-v2">
									<div class="rt-card-text-top-text-wrapper-v2">
										<div class="rt-text-style-h5">{getText('standard_plan', 'Standard Plan')}</div>
										<div class="w-layout-hflex rt-price-value-v2">
											<div class="rt-text-style-h2">{getText('standard_plan_price_monthly', '$299')}</div>
											<div>{getText('per_month', '/ month')}</div>
										</div>
										<p>{getText('free_icons_offer', 'Get over 700 top-notch icons for FREE!')}</p>
									</div>
								</div>
								<div class="w-layout-vflex rt-price-card-details-v2">
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('ai_processing_speed', 'AI Processing Speed')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('api_access', 'API Access')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('custom_ai_models', 'Custom AI Models')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('automated_workflows', 'Automated Workflows')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('100gb_data_storage', '100GB Data Storage')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src={getImage('price_tick').url}
											loading="lazy"
										/>
										<div>{getText('faster_response_time', 'Faster response time')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src={getImage('price_tick').url}
											loading="lazy"
										/>
										<div>{getText('full_api_access', 'Full API access')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src={getImage('price_tick').url}
											loading="lazy"
										/>
										<div>{getText('regular_feature_updates', 'Regular feature updates')}</div>
									</div>
								</div>
								<div class="w-layout-vflex rt-button-block-center">
									<a
										data-wf--rt-button-v1--variant="padding"
										data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
										href={getLink('standard_plan_link').href || 'https://aiorbit.webflow.io/product/standard-plan'}
										class="rt-button w-variant-d0d31aa2-ab56-3185-ec08-96b77848f9ee w-inline-block"
										><div class="w-layout-hflex rt-button-text-image-wrapper">
											<div class="w-layout-hflex rt-button-text-wrap">
												<div class="rt-button-text rt-button-hover-in">{getText('select_plan', 'Select Plan')}</div>
												<div class="rt-button-text rt-button-hover-out">{getText('select_plan', 'Select Plan')}</div>
											</div>
											<img
												width="10"
												height="9"
												alt={getText('arrow', 'Arrow')}
												src={getImage('button_arrow').url}
												loading="lazy"
												class="rt-button-arrow-image"
											/>
										</div></a
									>
									<div class="rt-price-cancel-link">{getText('cancel_anytime', 'Cancel Anytime')}</div>
								</div>
							</div>
							<div class="rt-pricing-plan-card-v2 rt-radious-fifteen">
								<div class="w-layout-hflex rt-card-text-top-v2">
									<div class="rt-card-text-top-text-wrapper-v2">
										<div class="rt-text-style-h5">{getText('premium_plan', 'Premium Plan')}</div>
										<div class="w-layout-hflex rt-price-value-v2">
											<div class="rt-text-style-h2">{getText('premium_plan_price_monthly', '$399')}</div>
											<div>{getText('per_month', '/ month')}</div>
										</div>
										<p>{getText('free_icons_offer', 'Get over 700 top-notch icons for FREE!')}</p>
									</div>
								</div>
								<div class="w-layout-vflex rt-price-card-details-v2">
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('ai_processing_speed', 'AI Processing Speed')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('api_access', 'API Access')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('custom_ai_models', 'Custom AI Models')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('automated_workflows', 'Automated Workflows')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('unlimited_data_storage', 'Unlimited Data Storage')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src={getImage('price_tick').url}
											loading="lazy"
										/>
										<div>{getText('priority_response_time', 'Priority response time')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src={getImage('price_tick').url}
											loading="lazy"
										/>
										<div>{getText('custom_api_integrations', 'Custom API integrations')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src={getImage('price_tick').url}
											loading="lazy"
										/>
										<div>{getText('early_access_to_new_features', 'Early access to new features')}</div>
									</div>
								</div>
								<div class="w-layout-vflex rt-button-block-center">
									<a
										data-wf--rt-button-v2--variant="padding"
										data-w-id="f63f91f4-b7e1-4ea7-4fb5-ef7294740b09"
										href={getLink('premium_plan_link').href || 'https://aiorbit.webflow.io/product/premium-plan'}
										class="rt-button rt-button-black w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 w-inline-block"
										><div class="w-layout-hflex rt-button-text-image-wrapper color-change">
											<div class="w-layout-hflex rt-button-text-wrap">
												<div
													class="rt-button-text rt-color-change w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 rt-button-hover-in"
												>
													{getText('select_plan', 'Select Plan')}
												</div>
												<div
													class="rt-button-text rt-color-change w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 rt-button-hover-out"
												>
													{getText('select_plan', 'Select Plan')}
												</div>
											</div>
											<img
												width="10"
												height="9"
												alt={getText('arrow', 'Arrow')}
												src={getImage('button_arrow').url}
												loading="lazy"
												class="rt-button-arrow-image rt-color-change"
											/>
										</div></a
									>
									<div class="rt-price-cancel-link">{getText('cancel_anytime', 'Cancel Anytime')}</div>
								</div>
							</div>
						</div>
					</div>
					<div data-w-tab="Tab 2" class="w-tab-pane">
						<div class="w-layout-grid rt-price-card-wrapper-v2">
							<div class="rt-pricing-plan-card-v2 rt-radious-fifteen">
								<div class="w-layout-hflex rt-card-text-top-v2">
									<div class="rt-card-text-top-text-wrapper-v2">
										<div class="rt-text-style-h5">{getText('basic_plan', 'Basic Plan')}</div>
										<div class="w-layout-hflex rt-price-value-v2">
											<div class="rt-text-style-h2">{getText('basic_plan_price_yearly', '$149')}</div>
											<div>{getText('per_month', '/ month')}</div>
										</div>
										<p>{getText('free_icons_offer', 'Get over 700 top-notch icons for FREE!')}</p>
									</div>
								</div>
								<div class="w-layout-vflex rt-price-card-details-v2">
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('ai_processing_speed', 'AI Processing Speed')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('api_access', 'API Access')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('custom_ai_models', 'Custom AI Models')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('automated_workflows', 'Automated Workflows')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('10gb_data_storage', '10GB Data Storage')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src={getImage('price_tick').url}
											loading="lazy"
										/>
										<div>{getText('standard_response_time', 'Standard response time')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src={getImage('price_tick').url}
											loading="lazy"
										/>
										<div>{getText('limited_api_access', 'Limited API access')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src={getImage('price_tick').url}
											loading="lazy"
										/>
										<div>{getText('no_priority_updates', 'No priority updates')}</div>
									</div>
								</div>
								<div class="w-layout-vflex rt-button-block-center">
									<a
										data-wf--rt-button-v2--variant="padding"
										data-w-id="f63f91f4-b7e1-4ea7-4fb5-ef7294740b09"
										href={getLink('basic_plan_link').href || 'https://aiorbit.webflow.io/product/basic-plan'}
										class="rt-button rt-button-black w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 w-inline-block"
										><div class="w-layout-hflex rt-button-text-image-wrapper color-change">
											<div class="w-layout-hflex rt-button-text-wrap">
												<div
													class="rt-button-text rt-color-change w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 rt-button-hover-in"
												>
													{getText('select_plan', 'Select Plan')}
												</div>
												<div
													class="rt-button-text rt-color-change w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 rt-button-hover-out"
												>
													{getText('select_plan', 'Select Plan')}
												</div>
											</div>
											<img
												width="10"
												height="9"
												alt={getText('arrow', 'Arrow')}
												src={getImage('button_arrow').url}
												loading="lazy"
												class="rt-button-arrow-image rt-color-change"
											/>
										</div></a
									>
									<div class="rt-price-cancel-link">{getText('cancel_anytime', 'Cancel Anytime')}</div>
								</div>
							</div>
							<div class="rt-pricing-plan-card-v2 rt-radious-fifteen active">
								<div class="w-layout-hflex rt-recommended-button">
									<img
										width="10"
										height="10"
										alt={getText('star', 'Star')}
										src={getImage('star_icon').url}
										loading="lazy"
									/>
									<div>{getText('recommended', 'Recommended')}</div>
								</div>
								<div class="w-layout-hflex rt-card-text-top-v2">
									<div class="rt-card-text-top-text-wrapper-v2">
										<div class="rt-text-style-h5">{getText('standard_plan', 'Standard Plan')}</div>
										<div class="w-layout-hflex rt-price-value-v2">
											<div class="rt-text-style-h2">{getText('standard_plan_price_yearly', '$249')}</div>
											<div>{getText('per_month', '/ month')}</div>
										</div>
										<p>{getText('free_icons_offer', 'Get over 700 top-notch icons for FREE!')}</p>
									</div>
								</div>
								<div class="w-layout-vflex rt-price-card-details-v2">
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('ai_processing_speed', 'AI Processing Speed')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('api_access', 'API Access')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('custom_ai_models', 'Custom AI Models')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('automated_workflows', 'Automated Workflows')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('100gb_data_storage', '100GB Data Storage')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src={getImage('price_tick').url}
											loading="lazy"
										/>
										<div>{getText('faster_response_time', 'Faster response time')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src={getImage('price_tick').url}
											loading="lazy"
										/>
										<div>{getText('full_api_access', 'Full API access')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src={getImage('price_tick').url}
											loading="lazy"
										/>
										<div>{getText('regular_feature_updates', 'Regular feature updates')}</div>
									</div>
								</div>
								<div class="w-layout-vflex rt-button-block-center">
									<a
										data-wf--rt-button-v1--variant="padding"
										data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
										href={getLink('standard_plan_link').href || 'https://aiorbit.webflow.io/product/standard-plan'}
										class="rt-button w-variant-d0d31aa2-ab56-3185-ec08-96b77848f9ee w-inline-block"
										><div class="w-layout-hflex rt-button-text-image-wrapper">
											<div class="w-layout-hflex rt-button-text-wrap">
												<div class="rt-button-text rt-button-hover-in">{getText('select_plan', 'Select Plan')}</div>
												<div class="rt-button-text rt-button-hover-out">{getText('select_plan', 'Select Plan')}</div>
											</div>
											<img
												width="10"
												height="9"
												alt={getText('arrow', 'Arrow')}
												src={getImage('button_arrow').url}
												loading="lazy"
												class="rt-button-arrow-image"
											/>
										</div></a
									>
									<div class="rt-price-cancel-link">{getText('cancel_anytime', 'Cancel Anytime')}</div>
								</div>
							</div>
							<div class="rt-pricing-plan-card-v2 rt-radious-fifteen">
								<div class="w-layout-hflex rt-card-text-top-v2">
									<div class="rt-card-text-top-text-wrapper-v2">
										<div class="rt-text-style-h5">{getText('premium_plan', 'Premium Plan')}</div>
										<div class="w-layout-hflex rt-price-value-v2">
											<div class="rt-text-style-h2">{getText('premium_plan_price_yearly', '$349')}</div>
											<div>{getText('per_month', '/ month')}</div>
										</div>
										<p>{getText('free_icons_offer', 'Get over 700 top-notch icons for FREE!')}</p>
									</div>
								</div>
								<div class="w-layout-vflex rt-price-card-details-v2">
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('ai_processing_speed', 'AI Processing Speed')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('api_access', 'API Access')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('custom_ai_models', 'Custom AI Models')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('automated_workflows', 'Automated Workflows')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<div class="w-layout-hflex rt-price-icon-block-v2">
											<img
												width="18"
												height="18"
												alt={getText('price_tick', 'Price Tick')}
												src={getImage('price_tick').url}
												loading="lazy"
												class="rt-price-icon"
											/>
										</div>
										<div>{getText('unlimited_data_storage', 'Unlimited Data Storage')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src={getImage('price_tick').url}
											loading="lazy"
										/>
										<div>{getText('priority_response_time', 'Priority response time')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src={getImage('price_tick').url}
											loading="lazy"
										/>
										<div>{getText('custom_api_integrations', 'Custom API integrations')}</div>
									</div>
									<div class="w-layout-hflex rt-price-details-v2">
										<img
											width="18"
											height="18"
											alt={getText('price_tick', 'Price Tick')}
											src={getImage('price_tick').url}
											loading="lazy"
										/>
										<div>{getText('early_access_to_new_features', 'Early access to new features')}</div>
									</div>
								</div>
								<div class="w-layout-vflex rt-button-block-center">
									<a
										data-wf--rt-button-v2--variant="padding"
										data-w-id="f63f91f4-b7e1-4ea7-4fb5-ef7294740b09"
										href={getLink('premium_plan_link').href || 'https://aiorbit.webflow.io/product/premium-plan'}
										class="rt-button rt-button-black w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 w-inline-block"
										><div class="w-layout-hflex rt-button-text-image-wrapper color-change">
											<div class="w-layout-hflex rt-button-text-wrap">
												<div
													class="rt-button-text rt-color-change w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 rt-button-hover-in"
												>
													{getText('select_plan', 'Select Plan')}
												</div>
												<div
													class="rt-button-text rt-color-change w-variant-0b421581-c6c8-2584-17fd-15cc55a70555 rt-button-hover-out"
												>
													{getText('select_plan', 'Select Plan')}
												</div>
											</div>
											<img
												width="10"
												height="9"
												alt={getText('arrow', 'Arrow')}
												src={getImage('button_arrow').url}
												loading="lazy"
												class="rt-button-arrow-image rt-color-change"
											/>
										</div></a
									>
									<div class="rt-price-cancel-link">{getText('cancel_anytime', 'Cancel Anytime')}</div>
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
