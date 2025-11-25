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

<section data-wf--rt-nav-v1--variant="main-button" class="rt-nav-block">
	<div
		data-animation="default"
		class="rt-navbar-block w-nav"
		data-easing2="ease"
		data-easing="ease"
		data-collapse="medium"
		data-w-id="1b85dd4c-7485-c684-ea1d-d2fdaaa34420"
		role="banner"
		data-duration="400"
		data-doc-height="1"
	>
		<div class="rt-container-small w-container">
			<div class="w-layout-hflex rt-nav-main">
				<div class="rt-nav-logo">
					<a href={getLink('jobquest').href || '/'} class="rt-logo w-nav-brand" aria-label="home"
						><img
							width="191"
							height="36"
							alt="Header"
							src={getImage('image_1').url}
							class="rt-site-logo"
						/></a
					>
				</div>
				<nav
					role="navigation"
					id="w-node-_1b85dd4c-7485-c684-ea1d-d2fdaaa34427-aaa3441f"
					class="rt-nav w-nav-menu"
				>
					<div
						data-delay="300"
						data-hover="true"
						data-w-id="1b85dd4c-7485-c684-ea1d-d2fdaaa344cb"
						class="rt-dropdown w-dropdown"
						style="max-width: 1320px;"
					>
						<div
							class="rt-dropdown-toggle w-dropdown-toggle"
							id="w-dropdown-toggle-3"
							aria-controls="w-dropdown-list-3"
							aria-haspopup="menu"
							aria-expanded="false"
							role="button"
							tabindex="0"
							style="color: rgb(255, 255, 255);"
						>
							<div class="rt-menu-font rt-color"><a href="/service-two">{getText('jobquest', 'JobQuest')}</a></div>
						</div>
					</div>
					<div
						data-delay="300"
						data-hover="true"
						data-w-id="279266e4-0400-8d3d-783c-e063c01f41ce"
						class="rt-dropdown w-dropdown"
						style="max-width: 1320px;"
					>
						<div
							class="rt-dropdown-toggle w-dropdown-toggle"
							id="w-dropdown-toggle-4"
							aria-controls="w-dropdown-list-4"
							aria-haspopup="menu"
							aria-expanded="false"
							role="button"
							tabindex="0"
						>
							<div class="rt-menu-font rt-color"><a href="/service-one">{getText('inqcrm', 'InqCrm')}</a></div>
						</div>
					</div>
					<div
						data-delay="300"
						data-hover="true"
						data-w-id="1b85dd4c-7485-c684-ea1d-d2fdaaa344e0"
						class="rt-dropdown w-dropdown"
						style="max-width: 1320px;"
					>
						<div
							class="rt-dropdown-toggle w-dropdown-toggle"
							id="w-dropdown-toggle-5"
							aria-controls="w-dropdown-list-5"
							aria-haspopup="menu"
							aria-expanded="false"
							role="button"
							tabindex="0"
							style="color: rgb(255, 255, 255);"
						>
							<div class="rt-menu-font rt-color"><a href={getLink('aiagents').href || '/aboutus'}>{getText('aiagents', 'AiAgents')}</a></div>
						</div>
					</div>
					<div data-w-id="1b85dd4c-7485-c684-ea1d-d2fdaaa3444c" class="rt-mega-menu-main">
						<div
							data-delay="300"
							data-hover="true"
							data-w-id="1b85dd4c-7485-c684-ea1d-d2fdaaa3444d"
							class="rt-dropdown w-dropdown"
							style="max-width: 1320px;"
						>
							<div
								class="rt-dropdown-toggle w-dropdown-toggle"
								id="w-dropdown-toggle-1"
								aria-controls="w-dropdown-list-1"
								aria-haspopup="menu"
								aria-expanded="false"
								role="button"
								tabindex="0"
								style="color: rgb(255, 255, 255);"
							>
								<div class="rt-menu-font rt-color">pages</div>
								<div class="rt-dropdown-icon-wrapper">
									<img
										width="10"
										height="6"
										alt="Header"
										src={getImage('image_2').url}
										loading="lazy"
										class="rt-dropdown-black-icon rt-color"
										style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
									/><img
										width="10"
										height="6"
										alt="Header"
										src={getImage('image_3').url}
										loading="lazy"
										class="rt-dropdown-green-icon rt-color"
									/>
								</div>
							</div>
							<nav
								class="rt-dropdown-list w-dropdown-list"
								id="w-dropdown-list-1"
								aria-labelledby="w-dropdown-toggle-1"
								style="height: 0px;"
							></nav>
						</div>
						<div class="rt-mega-menu-block" style="width: 100%; height: 0px; display: none;">
							<div class="w-layout-vflex rt-mega-menu-wrapper">
								<div class="rt-text-style-h4">{getText('inner_pages', 'Inner Pages')}</div>
								<div class="w-layout-hflex rt-mega-menu-inner-wrap">
									<div class="rt-nav-menu-block-one">
										<a href={getLink('inqcrm').href || '/home-one'} class="rt-nav-sub-menu w-inline-block"
											><div class="w-layout-hflex rt-mega-menu-icon">
												<img
													width="18"
													height="18"
													alt="Header"
													src={getImage('image_4').url}
													loading="lazy"
												/>
											</div>
											<div class="rt-dropdown-link">{getText('home_one', 'Home One')}</div></a
										><a href="/home-two" class="rt-nav-sub-menu w-inline-block"
											><div class="w-layout-hflex rt-mega-menu-icon">
												<img
													width="18"
													height="18"
													alt="Header"
													src={getImage('image_4').url}
													loading="lazy"
												/>
											</div>
											<div class="rt-dropdown-link">{getText('home_two', 'Home Two')}</div></a
										><a href={getLink('aiagents').href || '/aboutus'} class="rt-nav-sub-menu w-inline-block"
											><div class="w-layout-hflex rt-mega-menu-icon">
												<img
													width="18"
													height="18"
													alt="Header"
													src={getImage('image_4').url}
													loading="lazy"
												/>
											</div>
											<div class="rt-dropdown-link">About Us</div></a
										><a href="/service-one" class="rt-nav-sub-menu w-inline-block"
											><div class="w-layout-hflex rt-mega-menu-icon">
												<img
													width="18"
													height="18"
													alt="Header"
													src={getImage('image_4').url}
													loading="lazy"
												/>
											</div>
											<div class="rt-dropdown-link">{getText('service_one', 'Service One')}</div></a
										><a href="/service-two" class="rt-nav-sub-menu w-inline-block"
											><div class="w-layout-hflex rt-mega-menu-icon">
												<img
													width="18"
													height="19"
													alt="Header"
													src={getImage('image_4').url}
													loading="lazy"
												/>
											</div>
											<div class="rt-dropdown-link">{getText('service_two', 'Service Two')}</div></a
										><a href="/pricing-one" class="rt-nav-sub-menu w-inline-block"
											><div class="w-layout-hflex rt-mega-menu-icon">
												<img
													width="20"
													height="20"
													alt="Header"
													src={getImage('image_5').url}
													loading="lazy"
												/>
											</div>
											<div class="rt-dropdown-link">{getText('pricing', 'Pricing')}</div></a
										>
									</div>
									<div class="rt-nav-menu-block-one">
										<a href="/team" class="rt-nav-sub-menu w-inline-block"
											><div class="w-layout-hflex rt-mega-menu-icon">
												<img
													width="28"
													height="27"
													alt="Header"
													src={getImage('image_6').url}
													loading="lazy"
													class="rt-mega-menu-icon"
												/>
											</div>
											<div class="rt-dropdown-link">{getText('team', 'Team')}</div></a
										>
									</div>
								</div>
								<div class="w-layout-hflex rt-mega-menu-inner-bottom-wrap">
									<div class="w-layout-vflex rt-menu-bottom-text-wrapper">
										<div class="w-layout-hflex rt-menu-bottom-text">
											<div class="rt-text-style-h5">{getText('explore_ai_platform', 'Explore AI Platform')}</div>
											<img
												width="22"
												height="26"
												alt="Header"
												src={getImage('image_7').url}
												loading="lazy"
											/>
										</div>
										<div>AI Hub – Learn, explore, and get inspired.</div>
									</div>
									<a
										data-wf--rt-button-v1--variant="base"
										data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
										href="/pricing-one"
										class="rt-button w-inline-block"
										><div class="w-layout-hflex rt-button-text-image-wrapper">
											<div class="w-layout-hflex rt-button-text-wrap">
												<div
													class="rt-button-text rt-button-hover-in"
													style="transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
												>{getText('button_get_started', 'Get Started')}</div>
												<div
													class="rt-button-text rt-button-hover-out"
													style="transform: translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
												>{getText('button_get_started', 'Get Started')}</div>
											</div>
											<img
												width="10"
												height="9"
												alt="Header"
												src={getImage('image_8').url}
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
						data-delay="300"
						data-hover="true"
						data-w-id="1b85dd4c-7485-c684-ea1d-d2fdaaa344ad"
						class="rt-dropdown rt-change w-dropdown"
						style="max-width: 1320px;"
					>
						<div
							class="rt-dropdown-toggle w-dropdown-toggle"
							id="w-dropdown-toggle-2"
							aria-controls="w-dropdown-list-2"
							aria-haspopup="menu"
							aria-expanded="false"
							role="button"
							tabindex="0"
							style="color: rgb(255, 255, 255);"
						>
							<div class="rt-menu-font rt-color">{getText('pages', 'Pages')}</div>
							<div class="rt-dropdown-icon-wrapper">
								<img
									width="10"
									height="6"
									alt="Header"
									src={getImage('image_2').url}
									loading="lazy"
									class="rt-dropdown-black-icon rt-color"
									style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
								/><img
									width="10"
									height="6"
									alt="Header"
									src={getImage('image_3').url}
									loading="lazy"
									class="rt-dropdown-green-icon"
								/>
							</div>
						</div>
						<nav
							class="rt-dropdown-list w-dropdown-list"
							id="w-dropdown-list-2"
							aria-labelledby="w-dropdown-toggle-2"
							style="height: 0px;"
						>
							<div class="rt-dropdown-list-wrapper">
								<a href={getLink('inqcrm').href || '/home-one'} class="rt-nav-sub-menu w-inline-block" tabindex="0"
									><div class="rt-dropdown-link">{getText('home_one', 'Home One')}</div></a
								><a href="/home-two" class="rt-nav-sub-menu w-inline-block" tabindex="0"
									><div class="rt-dropdown-link">{getText('home_two', 'Home Two')}</div></a
								><a href={getLink('aiagents').href || '/aboutus'} class="rt-nav-sub-menu w-inline-block" tabindex="0"
									><div class="rt-dropdown-link">{getText('about_us', 'About US')}</div></a
								><a href="/service-one" class="rt-nav-sub-menu w-inline-block" tabindex="0"
									><div class="rt-dropdown-link">{getText('service_one', 'Service One')}</div></a
								><a href="/service-two" class="rt-nav-sub-menu w-inline-block" tabindex="0"
									><div class="rt-dropdown-link">{getText('service_two', 'Service Two')}</div></a
								><a href="/pricing-one" class="rt-nav-sub-menu w-inline-block" tabindex="0"
									><div class="rt-dropdown-link">{getText('pricing', 'Pricing')}</div></a
								><a href="/team" class="rt-nav-sub-menu w-inline-block" tabindex="0"
									><div class="rt-dropdown-link">{getText('team', 'Team')}</div></a
								>
							</div>
						</nav>
					</div>
				</nav>
				<div class="rt-nav-right-side">
					<div
						class="rt-hamburger-menu w-nav-button"
						style="-webkit-user-select: text;"
						aria-label="menu"
						role="button"
						tabindex="0"
						aria-controls="w-nav-overlay-0"
						aria-haspopup="menu"
						aria-expanded="false"
					>
						<div class="rt-top-bar"></div>
						<div class="rt-middle-bar"></div>
						<div class="rt-bottom-bar"></div>
						<div class="rt-cross-bar"></div>
						<div class="rt-cross-bar-two"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
	</div>
	<section class="rt-desktop-nav-menu">
		<div class="w-layout-blockcontainer rt-container-small w-container">
			<div class="w-layout-hflex rt-nav-two">
				<div class="rt-nav-logo">
					<a href={getLink('jobquest').href || '/'} class="rt-logo w-nav-brand"
						><img
							width="191"
							height="36"
							alt="Header"
							src={getImage('image_1').url}
							class="rt-site-logo"
						/></a
					>
				</div>
				<div
					id="w-node-_1b85dd4c-7485-c684-ea1d-d2fdaaa34540-aaa3441f"
					class="w-layout-hflex rt-nav-responsive"
				>
					<div
						data-delay="300"
						data-hover="true"
						data-w-id="1b85dd4c-7485-c684-ea1d-d2fdaaa345e4"
						class="rt-dropdown w-dropdown"
					>
						<div
							class="rt-dropdown-toggle w-dropdown-toggle"
							id="w-dropdown-toggle-8"
							aria-controls="w-dropdown-list-8"
							aria-haspopup="menu"
							aria-expanded="false"
							role="button"
							tabindex="0"
							style="color: rgb(255, 255, 255);"
						>
							<div class="rt-menu-font rt-color">{getText('ecommerce', 'ecommerce')}</div>
						</div>
					</div>
					<div
						data-delay="300"
						data-hover="true"
						data-w-id="8c87f797-09a8-706e-1d50-cd91e2578e55"
						class="rt-dropdown w-dropdown"
					>
						<div
							class="rt-dropdown-toggle w-dropdown-toggle"
							id="w-dropdown-toggle-9"
							aria-controls="w-dropdown-list-9"
							aria-haspopup="menu"
							aria-expanded="false"
							role="button"
							tabindex="0"
							style="color: rgb(255, 255, 255);"
						>
							<div class="rt-menu-font rt-color">
								<a class="rt-menu-font rt-color" href="/service-one">{getText('inqcrm', 'InqCrm')}</a></div>
						</div>
					</div>
					<div
						data-delay="300"
						data-hover="true"
						data-w-id="1b85dd4c-7485-c684-ea1d-d2fdaaa345f9"
						class="rt-dropdown w-dropdown"
					>
						<div
							class="rt-dropdown-toggle w-dropdown-toggle"
							id="w-dropdown-toggle-10"
							aria-controls="w-dropdown-list-10"
							aria-haspopup="menu"
							aria-expanded="false"
							role="button"
							tabindex="0"
							style="color: rgb(255, 255, 255);"
						>
							<div class="rt-menu-font rt-color"><a href={getLink('aiagents').href || '/aboutus'}>{getText('aiagents', 'AiAgents')}</a></div>
						</div>
					</div>
					<div data-w-id="1b85dd4c-7485-c684-ea1d-d2fdaaa34565" class="rt-mega-menu-main">
						<div
							data-delay="300"
							data-hover="true"
							data-w-id="1b85dd4c-7485-c684-ea1d-d2fdaaa34566"
							class="rt-dropdown w-dropdown"
							style=""
						>
							<div
								class="rt-dropdown-toggle w-dropdown-toggle"
								id="w-dropdown-toggle-7"
								aria-controls="w-dropdown-list-7"
								aria-haspopup="menu"
								aria-expanded="false"
								role="button"
								tabindex="0"
								style="color: rgb(255, 255, 255);"
							>
								<div class="rt-menu-font rt-color">pages</div>
								<div class="rt-dropdown-icon-wrapper">
									<img
										width="10"
										height="6"
										alt="Header"
										src={getImage('image_2').url}
										loading="lazy"
										class="rt-dropdown-black-icon rt-color"
										style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
									/><img
										width="10"
										height="6"
										alt="Header"
										src={getImage('image_3').url}
										loading="lazy"
										class="rt-dropdown-green-icon rt-color"
									/>
								</div>
							</div>
							<nav
								class="rt-dropdown-list w-dropdown-list"
								id="w-dropdown-list-7"
								aria-labelledby="w-dropdown-toggle-7"
								style="width: 200px; height: 0px;"
							></nav>
						</div>
						<div class="rt-mega-menu-block" style="width: 100%; display: none; height: 0px;">
							<div class="w-layout-vflex rt-mega-menu-wrapper">
								<div class="rt-text-style-h4">{getText('inner_pages', 'Inner Pages')}</div>
								<div class="w-layout-hflex rt-mega-menu-inner-wrap">
									<div class="rt-nav-menu-block-one">
										<a href={getLink('inqcrm').href || '/home-one'} class="rt-nav-sub-menu w-inline-block"
											><div class="w-layout-hflex rt-mega-menu-icon">
												<img
													width="18"
													height="18"
													alt="Header"
													src={getImage('image_4').url}
													loading="lazy"
												/>
											</div>
											<div class="rt-dropdown-link">{getText('home_one', 'Home One')}</div></a
										><a href="/home-two" class="rt-nav-sub-menu w-inline-block"
											><div class="w-layout-hflex rt-mega-menu-icon">
												<img
													width="18"
													height="18"
													alt="Header"
													src={getImage('image_4').url}
													loading="lazy"
												/>
											</div>
											<div class="rt-dropdown-link">{getText('home_two', 'Home Two')}</div></a
										><a href={getLink('aiagents').href || '/aboutus'} class="rt-nav-sub-menu w-inline-block"
											><div class="w-layout-hflex rt-mega-menu-icon">
												<img
													width="18"
													height="18"
													alt="Header"
													src={getImage('image_4').url}
													loading="lazy"
												/>
											</div>
											<div class="rt-dropdown-link">About Us</div></a
										><a href="/service-one" class="rt-nav-sub-menu w-inline-block"
											><div class="w-layout-hflex rt-mega-menu-icon">
												<img
													width="18"
													height="18"
													alt="Header"
													src={getImage('image_4').url}
													loading="lazy"
												/>
											</div>
											<div class="rt-dropdown-link">{getText('service_one', 'Service One')}</div></a
										><a href="/service-two" class="rt-nav-sub-menu w-inline-block"
											><div class="w-layout-hflex rt-mega-menu-icon">
												<img
													width="18"
													height="19"
													alt="Header"
													src={getImage('image_4').url}
													loading="lazy"
												/>
											</div>
											<div class="rt-dropdown-link">{getText('service_two', 'Service Two')}</div></a
										><a href="/pricing-one" class="rt-nav-sub-menu w-inline-block"
											><div class="w-layout-hflex rt-mega-menu-icon">
												<img
													width="20"
													height="20"
													alt="Header"
													src={getImage('image_5').url}
													loading="lazy"
												/>
											</div>
											<div class="rt-dropdown-link">{getText('pricing', 'Pricing')}</div></a
										>
									</div>
									<div class="rt-nav-menu-block-one">
										<a href="/team" class="rt-nav-sub-menu w-inline-block"
											><div class="w-layout-hflex rt-mega-menu-icon">
												<img
													width="28"
													height="27"
													alt="Header"
													src={getImage('image_6').url}
													loading="lazy"
													class="rt-mega-menu-icon"
												/>
											</div>
											<div class="rt-dropdown-link">{getText('team', 'Team')}</div></a
										>
									</div>
								</div>
								<div class="w-layout-hflex rt-mega-menu-inner-bottom-wrap">
									<div class="w-layout-vflex rt-menu-bottom-text-wrapper">
										<div class="w-layout-hflex rt-menu-bottom-text">
											<div class="rt-text-style-h5">{getText('explore_ai_platform', 'Explore AI Platform')}</div>
											<img
												width="22"
												height="26"
												alt="Header"
												src={getImage('image_7').url}
												loading="lazy"
											/>
										</div>
										<div>AI Hub – Learn, explore, and get inspired.</div>
									</div>
									<a
										data-wf--rt-button-v1--variant="base"
										data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
										href="/pricing-one"
										class="rt-button w-inline-block"
										><div class="w-layout-hflex rt-button-text-image-wrapper">
											<div class="w-layout-hflex rt-button-text-wrap">
												<div
													class="rt-button-text rt-button-hover-in"
													style="transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
												>{getText('button_get_started', 'Get Started')}</div>
												<div
													class="rt-button-text rt-button-hover-out"
													style="transform: translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
												>{getText('button_get_started', 'Get Started')}</div>
											</div>
											<img
												width="10"
												height="9"
												alt="Header"
												src={getImage('image_8').url}
												loading="lazy"
												class="rt-button-arrow-image"
											/>
										</div></a
									>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="rt-nav-right-side">
					<div class="w-layout-hflex rt-nav-cart-block">
						<div class="rt-nav-button-wrap rt-change">
							<div class="rt-nav-button-one-wrapper w-variant-8f94f79e-7064-6290-dffd-2290a562dc45">
								<a
									data-wf--rt-button-v1--variant="base"
									data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
									class="rt-button w-inline-block"
									href="/contact"
									><div class="w-layout-hflex rt-button-text-image-wrapper">
										<div class="w-layout-hflex rt-button-text-wrap">
											<div
												class="rt-button-text rt-button-hover-in"
												style="transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
											>{getText('get_in_touch', 'Get In Touch')}</div>
											<div
												class="rt-button-text rt-button-hover-out"
												style="transform: translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
											>{getText('get_in_touch', 'Get In Touch')}</div>
										</div>
										<img
											width="10"
											height="9"
											alt="Header"
											src={getImage('image_8').url}
											loading="lazy"
											class="rt-button-arrow-image"
										/>
									</div></a
								>
							</div>
							<div class="rt-nav-button-two-wrapper w-variant-8f94f79e-7064-6290-dffd-2290a562dc45">
								<a
									data-wf--rt-button-v1--variant="base"
									data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
									class="rt-button w-inline-block"
									href="/contact"
									><div class="w-layout-hflex rt-button-text-image-wrapper">
										<div class="w-layout-hflex rt-button-text-wrap">
											<div
												class="rt-button-text rt-button-hover-in"
												style="transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
											>{getText('get_in_touch', 'Get In Touch')}</div>
											<div
												class="rt-button-text rt-button-hover-out"
												style="transform: translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
											>{getText('get_in_touch', 'Get In Touch')}</div>
										</div>
										<img
											width="10"
											height="9"
											alt="Header"
											src={getImage('image_8').url}
											loading="lazy"
											class="rt-button-arrow-image"
										/>
									</div></a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</section>
