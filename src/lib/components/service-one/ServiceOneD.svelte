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

<section class="rt-possibilities">
	<div data-w-id="b0970569-eae0-1832-c7f5-94d7755d2b57" class="rt-possibilities-scroll-wrapper">
		<div class="rt-possibilities-scroll-content">
			<div class="w-layout-blockcontainer rt-container-small rt-full-container w-container">
				<div class="w-layout-vflex rt-possibilities-top-title rt-desktop-text-center">
					<h2 data-w-id="b1df3202-e056-36f7-b9dc-7f9b02f8b59c" class="rt-gap-off rt-h2-gap">
						{getText('section_heading', 'Unlocking New Possibilities with Artificial Intelligence')}
					</h2>
					<p
						data-w-id="b1df3202-e056-36f7-b9dc-7f9b02f8b59e"
						class="rt-gap-off rt-h2-paragraph-gap"
					>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Suscipit viverra donec scelerisque tellus in vulputate. Cursus tempus congue faucibus faucibus dui feugiat sit.')}</p>
				</div>
				<div class="w-layout-hflex rt-possibilities-ideas">
					<div class="w-layout-vflex rt-possibilities-left-box">
						<div class="w-layout-hflex rt-possibilities-left-box-content one">
							<div class="w-layout-hflex rt-possibilities-icon one">
								<img
									width="36"
									height="24"
									alt={getImage('icon_expert_1').alt || getText('expert', 'Expert')}
									src={getImage('icon_expert_1').url}
									loading="lazy"
								/>
							</div>
							<div class="w-layout-vflex rt-possibilities-left-box-text-wrap">
								<div class="rt-text-style-h5">{getText('ai_transforming_future_heading', 'AI Transforming the Future')}</div>
								<p>{getText('ai_transforming_future_description', 'We design business models and growth strategies to effective competitive.')}</p>
							</div>
						</div>
						<div class="w-layout-hflex rt-possibilities-left-box-content two">
							<div class="w-layout-hflex rt-possibilities-icon two">
								<img
									width="27"
									height="30"
									alt={getImage('icon_expert_2').alt || getText('expert', 'Expert')}
									src={getImage('icon_expert_2').url}
									loading="lazy"
								/>
							</div>
							<div class="w-layout-vflex rt-possibilities-left-box-text-wrap">
								<div class="rt-text-style-h5">{getText('ai_driven_technologies_heading', 'AI-Driven Smart Technologies')}</div>
								<p>{getText('ai_driven_technologies_description', 'We design business models and growth strategies to effective competitive.')}</p>
							</div>
						</div>
						<div class="w-layout-hflex rt-possibilities-left-box-content three">
							<div class="w-layout-hflex rt-possibilities-icon three">
								<img
									width="19"
									height="28"
									alt={getImage('icon_expert_3').alt || getText('expert', 'Expert')}
									src={getImage('icon_expert_3').url}
									loading="lazy"
								/>
							</div>
							<div class="w-layout-vflex rt-possibilities-left-box-text-wrap">
								<div class="rt-text-style-h5">{getText('redefining_intelligence_heading', 'Redefining Intelligence with AI')}</div>
								<p>{getText('redefining_intelligence_description', 'We design business models and growth strategies to effective competitive.')}</p>
							</div>
						</div>
					</div>
					<div
						class="w-layout-vflex rt-possibilities-right-box rt-position-relative rt-overflow-hidden"
					>
						<img
							width="654"
							height="460"
							alt={getImage('possibilities_dashboard').alt || getText('possibilities_dashboard', 'Possibilities Dashboard')}
							src={getImage('possibilities_dashboard').url}
							loading="lazy"
							srcset="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a8175_Posssibilities%2520dashboard-p-500.webp 500w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a8175_Posssibilities%2520dashboard-p-800.webp 800w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a8175_Posssibilities%2520dashboard-p-1080.webp 1080w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a8175_Posssibilities%20dashboard.webp 1308w"
							sizes="(max-width: 767px) 100vw, 654px"
							class="rt-possibilities-right-box-image"
						/><img
							width="654"
							height="460"
							alt={getImage('order_dashboard').alt || getText('order', 'Order')}
							src={getImage('order_dashboard').url}
							loading="lazy"
							srcset="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805d8b7b775b8c77226ae82_Order-p-500.webp 500w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805d8b7b775b8c77226ae82_Order-p-800.webp 800w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805d8b7b775b8c77226ae82_Order-p-1080.webp 1080w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805d8b7b775b8c77226ae82_Order.webp 1324w"
							sizes="(max-width: 767px) 100vw, 654px"
							class="rt-possibilities-right-box-image-two"
						/><img
							width="654"
							height="460"
							alt={getImage('artificial_dashboard').alt || getText('artificial', 'Artificial')}
							src={getImage('artificial_dashboard').url}
							loading="lazy"
							srcset="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805d7e085017b3502ee2df7_Artificial-p-500.webp 500w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805d7e085017b3502ee2df7_Artificial-p-800.webp 800w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805d7e085017b3502ee2df7_Artificial-p-1080.webp 1080w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805d7e085017b3502ee2df7_Artificial.webp 1328w"
							sizes="(max-width: 767px) 100vw, 654px"
							class="rt-possibilities-right-box-image-three"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="rt-counter-v3">
			<div data-wf--rt-counter-v1--variant="base" class="w-layout-grid rt-our-achievement-v1">
				<div class="w-layout-vflex rt-achievement-box">
					<div
						data-w-id="73eb367f-86c6-0ebc-de7f-236ac5f86f86"
						class="w-layout-hflex rt-counter rt-overflow-hidden"
					>
						<div class="w-layout-vflex rt-counter-block rt-margin">
							<div class="w-layout-vflex rt-counter-train">
								<div class="rt-text-style-h1 counter-color-change">0</div>
							</div>
							<div class="w-layout-vflex rt-counter-train">
								<div class="rt-text-style-h1 counter-color-change">1</div>
							</div>
						</div>
						<div class="w-layout-vflex rt-counter-block rt-margin">
							<div class="w-layout-vflex rt-counter-train">
								<div class="rt-text-style-h1 counter-color-change">0</div>
								<div class="rt-text-style-h1 counter-color-change">1</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
							</div>
							<div class="w-layout-vflex rt-counter-train">
								<div class="rt-text-style-h1 counter-color-change">4</div>
								<div class="rt-text-style-h1 counter-color-change">3</div>
								<div class="rt-text-style-h1 counter-color-change">4</div>
							</div>
						</div>
						<div class="w-layout-vflex rt-counter-block">
							<div class="w-layout-vflex rt-counter-train">
								<div class="rt-text-style-h1 counter-color-change">0</div>
								<div class="rt-text-style-h1 counter-color-change">1</div>
							</div>
							<div class="w-layout-vflex rt-counter-train">
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">1</div>
							</div>
						</div>
					</div>
					<div class="rt-text-style-h5 counter-color-chnage">{getText('new_features_label', 'New Features')}</div>
				</div>
				<div class="w-layout-vflex rt-achievement-box rt-border-remove-tab">
					<div
						data-w-id="73eb367f-86c6-0ebc-de7f-236ac5f86fab"
						class="w-layout-hflex rt-counter rt-overflow-hidden"
					>
						<div class="w-layout-vflex rt-counter-block rt-margin">
							<div class="w-layout-vflex rt-counter-train">
								<div class="rt-text-style-h1 counter-color-change">0</div>
								<div class="rt-text-style-h1 counter-color-change">1</div>
							</div>
							<div class="w-layout-vflex rt-counter-train">
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
							</div>
						</div>
						<div class="w-layout-vflex rt-counter-block">
							<div class="w-layout-vflex rt-counter-train">
								<div class="rt-text-style-h1 counter-color-change">0</div>
								<div class="rt-text-style-h1 counter-color-change">1</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">3</div>
								<div class="rt-text-style-h1 counter-color-change">4</div>
								<div class="rt-text-style-h1 counter-color-change">5</div>
								<div class="rt-text-style-h1 counter-color-change">6</div>
								<div class="rt-text-style-h1 counter-color-change">7</div>
							</div>
							<div class="w-layout-vflex rt-counter-train">
								<div class="rt-text-style-h1 counter-color-change">8</div>
								<div class="rt-text-style-h1 counter-color-change">3</div>
								<div class="rt-text-style-h1 counter-color-change">4</div>
								<div class="rt-text-style-h1 counter-color-change">4</div>
								<div class="rt-text-style-h1 counter-color-change">4</div>
								<div class="rt-text-style-h1 counter-color-change">4</div>
								<div class="rt-text-style-h1 counter-color-change">4</div>
								<div class="rt-text-style-h1 counter-color-change">4</div>
							</div>
						</div>
						<div class="rt-text-style-h1 counter-color-change">K</div>
					</div>
					<div class="rt-text-style-h5 counter-color-chnage">{getText('app_download_label', 'APP Download')}</div>
				</div>
				<div class="w-layout-vflex rt-achievement-box">
					<div
						data-w-id="73eb367f-86c6-0ebc-de7f-236ac5f86fdf"
						class="w-layout-hflex rt-counter rt-overflow-hidden"
					>
						<div class="w-layout-vflex rt-counter-block">
							<div class="w-layout-vflex rt-counter-train">
								<div class="rt-text-style-h1 counter-color-change">0</div>
								<div class="rt-text-style-h1 counter-color-change">1</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">4</div>
							</div>
							<div class="w-layout-vflex rt-counter-train">
								<div class="rt-text-style-h1 counter-color-change">5</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
							</div>
						</div>
						<div class="w-layout-vflex rt-counter-block">
							<div class="w-layout-vflex rt-counter-train">
								<div class="rt-text-style-h1 counter-color-change">0</div>
								<div class="rt-text-style-h1 counter-color-change">1</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
							</div>
							<div class="w-layout-vflex rt-counter-train">
								<div class="rt-text-style-h1 counter-color-change">3</div>
								<div class="rt-text-style-h1 counter-color-change">3</div>
								<div class="rt-text-style-h1 counter-color-change">4</div>
							</div>
						</div>
						<div class="rt-text-style-h1 counter-color-change">K</div>
					</div>
					<div class="rt-text-style-h5 counter-color-chnage">{getText('happy_clients_label', 'Happy Clients')}</div>
				</div>
				<div class="w-layout-vflex rt-achievement-box rt-border-remove">
					<div
						data-w-id="73eb367f-86c6-0ebc-de7f-236ac5f8700b"
						class="w-layout-hflex rt-counter rt-overflow-hidden"
					>
						<div class="w-layout-vflex rt-counter-block rt-margin">
							<div class="w-layout-vflex rt-counter-train">
								<div class="rt-text-style-h1 counter-color-change">0</div>
								<div class="rt-text-style-h1 counter-color-change">1</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">3</div>
								<div class="rt-text-style-h1 counter-color-change">4</div>
								<div class="rt-text-style-h1 counter-color-change">5</div>
								<div class="rt-text-style-h1 counter-color-change">6</div>
								<div class="rt-text-style-h1 counter-color-change">7</div>
								<div class="rt-text-style-h1 counter-color-change">8</div>
							</div>
							<div class="w-layout-vflex rt-counter-train">
								<div class="rt-text-style-h1 counter-color-change">9</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
							</div>
						</div>
						<div class="w-layout-vflex rt-counter-block">
							<div class="w-layout-vflex rt-counter-train">
								<div class="rt-text-style-h1 counter-color-change">0</div>
								<div class="rt-text-style-h1 counter-color-change">1</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">3</div>
								<div class="rt-text-style-h1 counter-color-change">4</div>
								<div class="rt-text-style-h1 counter-color-change">5</div>
								<div class="rt-text-style-h1 counter-color-change">6</div>
								<div class="rt-text-style-h1 counter-color-change">7</div>
							</div>
							<div class="w-layout-vflex rt-counter-train">
								<div class="rt-text-style-h1 counter-color-change">8</div>
								<div class="rt-text-style-h1 counter-color-change">3</div>
								<div class="rt-text-style-h1 counter-color-change">4</div>
								<div class="rt-text-style-h1 counter-color-change">4</div>
								<div class="rt-text-style-h1 counter-color-change">4</div>
								<div class="rt-text-style-h1 counter-color-change">4</div>
								<div class="rt-text-style-h1 counter-color-change">4</div>
								<div class="rt-text-style-h1 counter-color-change">4</div>
							</div>
						</div>
						<div class="rt-text-style-h1 counter-color-change">%</div>
					</div>
					<div class="rt-text-style-h5 counter-color-chnage">{getText('positive_rate_label', 'Positive rate')}</div>
				</div>
			</div>
		</div>
	</div>
</section>
