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

<section class="rt-pricing-comparison">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-vflex rt-pricing-top-text-wrapper rt-desktop-text-center">
			<h2 data-w-id="1655b1ac-c894-871b-a355-2da52bc7cb25" class="rt-gap-off rt-h2-gap">
				{getText('section_heading', 'Subscription comparison')}
			</h2>
			<p data-w-id="1655b1ac-c894-871b-a355-2da52bc7cb27" class="rt-pricing-top-paragraph">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id magna malesuada tempor mi eget auctor dolor.')}</p>
		</div>
		<div data-w-id="1655b1ac-c894-871b-a355-2da52bc7cb29">
			<div class="w-layout-hflex rt-price-table-row rt-top-row">
				<div class="rt-table-left-column rt-tab-display-off"></div>
				<div class="w-layout-grid rt-pricing-right-column">
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cb2d-45b6abdd"
						class="w-layout-vflex rt-pricing-top-heading-wrapper"
					>
						<div class="rt-text-style-h5 rt-desktop-text-center">{getText('basic_plan', 'Basic plan')}</div>
						<div class="rt-price-value-v3">
							<sup class="dollar">{getText('currency_symbol', '$')}</sup>{getText('basic_plan_price', '199')}<span class="rt-pricing-plan-time">{getText('per_month', '/ month')}</span>
						</div>
						<div class="rt-desktop-text-center">
							{getText('no_credit_card_required', 'No ')}<span class="rt-text-color-black">{getText('credit_card', 'credit card')}</span>{getText('required', ' required.')}
						</div>
						<div class="rt-price-table-button-wrapper">
							<a
								data-wf--rt-button-v1--variant="base"
								data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
								href={getLink('basic_plan_link').href || 'https://aiorbit.webflow.io/product/basic-plan'}
								class="rt-button w-inline-block"
								><div class="w-layout-hflex rt-button-text-image-wrapper">
									<div class="w-layout-hflex rt-button-text-wrap">
										<div class="rt-button-text rt-button-hover-in">{getText('select_plan', 'Select Plan')}</div>
										<div class="rt-button-text rt-button-hover-out">{getText('select_plan', 'Select Plan')}</div>
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
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cb40-45b6abdd"
						class="w-layout-vflex rt-pricing-top-heading-wrapper rt-cell-background-change rt-radious-top"
					>
						<div class="rt-text-style-h5 rt-desktop-text-center">{getText('standard_plan', 'Standard plan')}</div>
						<div class="rt-price-value-v3">
							<sup class="dollar">{getText('currency_symbol', '$')}</sup>{getText('standard_plan_price', '299')}<span class="rt-pricing-plan-time">{getText('per_month', '/ month')}</span>
						</div>
						<div class="rt-desktop-text-center">
							{getText('no_credit_card_required', 'No ')}<span class="rt-text-color-black">{getText('credit_card', 'credit card')}</span>{getText('required', ' required.')}
						</div>
						<div class="rt-price-table-button-wrapper">
							<div
								data-wf--rt-button-v4--variant="base"
								data-w-id="30906ba7-0751-d0b2-4c17-135325c80fcb"
								class="rt-form-button-box rt-position-relative"
							>
								<div class="rt-border-block">
									<a
										href={getLink('standard_plan_link').href || 'https://aiorbit.webflow.io/product/standard-plan'}
										class="rt-button w-inline-block"
										><div class="w-layout-hflex rt-button-text-image-wrapper">
											<div class="w-layout-hflex rt-button-text-wrap">
												<div class="rt-button-text rt-button-hover-in">{getText('select_plan', 'Select Plan')}</div>
												<div class="rt-button-text rt-button-hover-out">{getText('select_plan', 'Select Plan')}</div>
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
						</div>
					</div>
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cb53-45b6abdd"
						class="w-layout-vflex rt-pricing-top-heading-wrapper"
					>
						<div class="rt-text-style-h5 rt-desktop-text-center">{getText('premium_plan', 'Premium plan')}</div>
						<div class="rt-price-value-v3">
							<sup class="dollar">{getText('currency_symbol', '$')}</sup>{getText('premium_plan_price', '399')}<span class="rt-pricing-plan-time">{getText('per_month', '/ month')}</span>
						</div>
						<div class="rt-desktop-text-center">
							{getText('no_credit_card_required', 'No ')}<span class="rt-text-color-black">{getText('credit_card', 'credit card')}</span>{getText('required', ' required.')}
						</div>
						<div class="rt-price-table-button-wrapper">
							<a
								data-wf--rt-button-v1--variant="base"
								data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
								href={getLink('premium_plan_link').href || 'https://aiorbit.webflow.io/product/premium-plan'}
								class="rt-button w-inline-block"
								><div class="w-layout-hflex rt-button-text-image-wrapper">
									<div class="w-layout-hflex rt-button-text-wrap">
										<div class="rt-button-text rt-button-hover-in">{getText('select_plan', 'Select Plan')}</div>
										<div class="rt-button-text rt-button-hover-out">{getText('select_plan', 'Select Plan')}</div>
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
				</div>
			</div>
			<div class="w-layout-hflex rt-price-table-row rt-middle-row rt-table-row-background-color">
				<div class="rt-table-left-column">
					<div class="rt-text-style-h6">{getText('ai_powered_chatbot', 'AI-Powered chatbot')}</div>
				</div>
				<div class="w-layout-grid rt-pricing-right-column">
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cb6b-45b6abdd"
						class="rt-pricing-table-icon-wrapper"
					>
						<img
							width="20"
							height="20"
							alt={getText('price_tick', 'Price Tick')}
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
							loading="lazy"
						/>
					</div>
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cb6d-45b6abdd"
						class="rt-pricing-table-icon-wrapper rt-column-background"
					>
						<img
							width="20"
							height="20"
							alt={getText('price_tick', 'Price Tick')}
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
							loading="lazy"
						/>
					</div>
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cb6f-45b6abdd"
						class="rt-pricing-table-icon-wrapper"
					>
						<img
							width="20"
							height="20"
							alt={getText('price_tick', 'Price Tick')}
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
			<div class="w-layout-hflex rt-price-table-row rt-middle-row">
				<div class="rt-table-left-column">
					<div class="rt-text-style-h6">{getText('ai_processing_speed', 'AI Processing Speed')}</div>
				</div>
				<div class="w-layout-grid rt-pricing-right-column">
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cb76-45b6abdd"
						class="rt-pricing-table-icon-wrapper"
					>
						<img
							width="20"
							height="20"
							alt={getText('price_tick', 'Price Tick')}
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
							loading="lazy"
						/>
					</div>
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cb78-45b6abdd"
						class="rt-pricing-table-icon-wrapper rt-column-background"
					>
						<img
							width="20"
							height="20"
							alt={getText('price_tick', 'Price Tick')}
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
							loading="lazy"
						/>
					</div>
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cb7a-45b6abdd"
						class="rt-pricing-table-icon-wrapper"
					>
						<img
							width="20"
							height="20"
							alt={getText('price_tick', 'Price Tick')}
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
			<div class="w-layout-hflex rt-price-table-row rt-middle-row rt-table-row-background-color">
				<div class="rt-table-left-column">
					<div class="rt-text-style-h6">{getText('multi_language_support', 'Multi-Language support')}</div>
				</div>
				<div class="w-layout-grid rt-pricing-right-column">
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cb81-45b6abdd"
						class="rt-pricing-table-icon-wrapper"
					>
						<img
							width="20"
							height="20"
							alt={getText('price_cross_tick', 'Price Cross Tick')}
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f560_PRice-cross.svg"
							loading="lazy"
						/>
					</div>
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cb83-45b6abdd"
						class="rt-pricing-table-icon-wrapper rt-column-background"
					>
						<img
							width="20"
							height="20"
							alt={getText('price_tick', 'Price Tick')}
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
							loading="lazy"
						/>
					</div>
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cb85-45b6abdd"
						class="rt-pricing-table-icon-wrapper"
					>
						<img
							width="20"
							height="20"
							alt={getText('price_tick', 'Price Tick')}
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
			<div class="w-layout-hflex rt-price-table-row rt-middle-row">
				<div class="rt-table-left-column">
					<div class="rt-text-style-h6">{getText('omni_channel_integration', 'Omni channel integration')}</div>
				</div>
				<div class="w-layout-grid rt-pricing-right-column">
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cb8c-45b6abdd"
						class="rt-pricing-table-icon-wrapper"
					>
						<img
							width="20"
							height="20"
							alt={getText('price_cross_tick', 'Price Cross Tick')}
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f560_PRice-cross.svg"
							loading="lazy"
						/>
					</div>
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cb8e-45b6abdd"
						class="rt-pricing-table-icon-wrapper rt-column-background"
					>
						<img
							width="20"
							height="20"
							alt={getText('price_tick', 'Price Tick')}
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
							loading="lazy"
						/>
					</div>
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cb90-45b6abdd"
						class="rt-pricing-table-icon-wrapper"
					>
						<img
							width="20"
							height="20"
							alt={getText('price_tick', 'Price Tick')}
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
			<div class="w-layout-hflex rt-price-table-row rt-middle-row rt-table-row-background-color">
				<div class="rt-table-left-column">
					<div class="rt-text-style-h6">{getText('customizable_chatbot_flows', 'Customizable chatbot flows')}</div>
				</div>
				<div class="w-layout-grid rt-pricing-right-column">
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cb97-45b6abdd"
						class="rt-pricing-table-icon-wrapper rt-pricing-cell-padding-change"
					>
						<div>{getText('5_times', '5 times')}</div>
					</div>
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cb9a-45b6abdd"
						class="rt-pricing-table-icon-wrapper rt-column-background rt-pricing-cell-padding-change"
					>
						<div>{getText('30_times', '30 times')}</div>
					</div>
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cb9d-45b6abdd"
						class="rt-pricing-table-icon-wrapper rt-pricing-cell-padding-change"
					>
						<div>{getText('unlimited', 'Unlimited')}</div>
					</div>
				</div>
			</div>
			<div class="w-layout-hflex rt-price-table-row rt-middle-row">
				<div class="rt-table-left-column">
					<div class="rt-text-style-h6">{getText('security_compliance', 'Security & Compliance')}</div>
				</div>
				<div class="w-layout-grid rt-pricing-right-column">
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cba5-45b6abdd"
						class="rt-pricing-table-icon-wrapper"
					>
						<img
							width="20"
							height="20"
							alt={getText('price_cross_tick', 'Price Cross Tick')}
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f560_PRice-cross.svg"
							loading="lazy"
						/>
					</div>
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cba7-45b6abdd"
						class="rt-pricing-table-icon-wrapper rt-column-background"
					>
						<img
							width="20"
							height="20"
							alt={getText('price_cross_tick', 'Price Cross Tick')}
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f560_PRice-cross.svg"
							loading="lazy"
						/>
					</div>
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cba9-45b6abdd"
						class="rt-pricing-table-icon-wrapper"
					>
						<img
							width="20"
							height="20"
							alt={getText('price_tick', 'Price Tick')}
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
			<div class="w-layout-hflex rt-price-table-row rt-middle-row rt-table-row-background-color">
				<div class="rt-table-left-column"><div class="rt-text-style-h6">Data Storage</div></div>
				<div class="w-layout-grid rt-pricing-right-column">
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cbb0-45b6abdd"
						class="rt-pricing-table-icon-wrapper rt-pricing-cell-padding-change"
					>
						<div>{getText('10_gb', '10 GB')}</div>
					</div>
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cbb3-45b6abdd"
						class="rt-pricing-table-icon-wrapper rt-column-background rt-pricing-cell-padding-change"
					>
						<div>{getText('100gb', '100GB')}</div>
					</div>
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cbb6-45b6abdd"
						class="rt-pricing-table-icon-wrapper rt-pricing-cell-padding-change"
					>
						<div>{getText('unlimited', 'Unlimited')}</div>
					</div>
				</div>
			</div>
			<div class="w-layout-hflex rt-price-table-row rt-middle-row">
				<div class="rt-table-left-column">
					<div class="rt-text-style-h6">{getText('dedicated_account_manager', 'Dedicated account manager')}</div>
				</div>
				<div class="w-layout-grid rt-pricing-right-column">
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cbbe-45b6abdd"
						class="rt-pricing-table-icon-wrapper"
					>
						<img
							width="20"
							height="20"
							alt={getText('price_tick', 'Price Tick')}
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
							loading="lazy"
						/>
					</div>
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cbc0-45b6abdd"
						class="rt-pricing-table-icon-wrapper rt-column-background"
					>
						<img
							width="20"
							height="20"
							alt={getText('price_tick', 'Price Tick')}
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
							loading="lazy"
						/>
					</div>
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cbc2-45b6abdd"
						class="rt-pricing-table-icon-wrapper"
					>
						<img
							width="20"
							height="20"
							alt={getText('price_tick', 'Price Tick')}
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e4d9c8e5b3f467ff22f561_Price%20Tick.svg"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
			<div class="w-layout-hflex rt-price-table-row rt-middle-row responsive-display-off">
				<div class="rt-table-left-column empty-wrapper"></div>
				<div class="w-layout-grid rt-pricing-right-column">
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cbc7-45b6abdd"
						class="rt-pricing-table-icon-wrapper"
					></div>
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cbc8-45b6abdd"
						class="rt-pricing-table-icon-wrapper rt-column-background rt-background-change"
					></div>
					<div
						id="w-node-_1655b1ac-c894-871b-a355-2da52bc7cbc9-45b6abdd"
						class="rt-pricing-table-icon-wrapper"
					></div>
				</div>
			</div>
		</div>
	</div>
</section>
