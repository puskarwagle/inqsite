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

<section class="rt-team-member">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-vflex rt-team-top-text rt-desktop-text-center">
			<h2 data-w-id="3de62447-9c24-7bb7-1178-d12017d4c51c" class="rt-gap-off rt-h2-gap">{getText('section_heading', 'Join our amazing team')}</h2>
			<p data-w-id="3de62447-9c24-7bb7-1178-d12017d4c51e" class="rt-gap-off rt-h2-paragraph-gap">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.')}</p>
		</div>
		<div class="w-layout-hflex rt-team-card-block">
			<div class="w-layout-grid rt-team-card-wrapper-v2">
				<div data-w-id="3de62447-9c24-7bb7-1178-d12017d4c521" class="w-dyn-list">
					<div role="list" class="w-dyn-items">
						<div role="listitem" class="w-dyn-item">
							<div data-w-id="3de62447-9c24-7bb7-1178-d12017d4c524" class="rt-position-relative">
								<a
									href="team-details/olivia-davis.html"
									class="rt-team-card rt-overflow-hidden w-inline-block"
									><img
										width="410"
										height="460"
										alt="TeamB"
										src={getImage('image_1').url}
										loading="lazy"
										sizes="(max-width: 479px) 100vw, 410px"
										class="rt-autofit rt-tab-full-image"
									/>
									<div class="w-layout-vflex rt-team-description">
										<div class="rt-text-style-h6">{getText('olivia_davis', 'Olivia Davis')}</div>
										<div class="rt-team-position">Data Analyst</div>
									</div></a
								>
								<div
									data-w-id="3de62447-9c24-7bb7-1178-d12017d4c52a"
									class="w-layout-vflex rt-social-box"
								>
									<a
										href="https://dribbble.com"
										target="_blank"
										class="rt-team-social-card-link w-inline-block"
										><img
											width="15"
											height="15"
											alt="TeamB"
											src={getImage('image_2').url}
											loading="lazy"
											class="rt-autofit"
										/></a
									><a
										href="https://www.instagram.com"
										target="_blank"
										class="rt-team-social-card-link w-inline-block"
										><img
											width="16"
											height="16"
											alt="TeamB"
											src={getImage('image_3').url}
											loading="lazy"
											class="rt-autofit"
										/></a
									><a
										href="https://in.pinterest.com"
										target="_blank"
										class="rt-team-social-card-link w-inline-block"
										><img
											width="16"
											height="16"
											alt="TeamB"
											src={getImage('image_4').url}
											loading="lazy"
											class="rt-autofit"
										/></a
									>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div data-w-id="3de62447-9c24-7bb7-1178-d12017d4c534" class="w-dyn-list">
					<div role="list" class="w-dyn-items">
						<div role="listitem" class="w-dyn-item">
							<div data-w-id="3de62447-9c24-7bb7-1178-d12017d4c537" class="rt-position-relative">
								<a
									href="team-details/rachel-mohr.html"
									class="rt-team-card rt-overflow-hidden w-inline-block"
									><img
										width="410"
										height="460"
										alt="TeamB"
										src={getImage('image_5').url}
										loading="lazy"
										sizes="(max-width: 479px) 100vw, 410px"
										class="rt-autofit rt-tab-full-image"
									/>
									<div class="w-layout-vflex rt-team-description">
										<div class="rt-text-style-h6">{getText('rachel_mohr', 'Rachel Mohr')}</div>
										<div class="rt-team-position">Programmer</div>
									</div></a
								>
								<div
									data-w-id="3de62447-9c24-7bb7-1178-d12017d4c53d"
									class="w-layout-vflex rt-social-box"
								>
									<a
										href="https://dribbble.com"
										target="_blank"
										class="rt-team-social-card-link w-inline-block"
										><img
											width="15"
											height="15"
											alt="TeamB"
											src={getImage('image_2').url}
											loading="lazy"
											class="rt-autofit"
										/></a
									><a
										href="https://www.instagram.com"
										target="_blank"
										class="rt-team-social-card-link w-inline-block"
										><img
											width="16"
											height="16"
											alt="TeamB"
											src={getImage('image_3').url}
											loading="lazy"
											class="rt-autofit"
										/></a
									><a
										href="https://in.pinterest.com"
										target="_blank"
										class="rt-team-social-card-link w-inline-block"
										><img
											width="16"
											height="16"
											alt="TeamB"
											src={getImage('image_4').url}
											loading="lazy"
											class="rt-autofit"
										/></a
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="w-layout-grid rt-team-card-wrapper-v2 rt-team-card-margin">
				<div data-w-id="e1b8580b-ad11-b085-619d-9a66439130d5" class="w-dyn-list">
					<div role="list" class="w-dyn-items">
						<div role="listitem" class="w-dyn-item">
							<div data-w-id="e1b8580b-ad11-b085-619d-9a66439130d8" class="rt-position-relative">
								<a
									href="team-details/louis-pickell.html"
									class="rt-team-card rt-overflow-hidden w-inline-block"
									><img
										width="410"
										height="460"
										alt="TeamB"
										src={getImage('image_6').url}
										loading="lazy"
										sizes="(max-width: 479px) 100vw, 410px"
										class="rt-autofit rt-tab-full-image"
									/>
									<div class="w-layout-vflex rt-team-description">
										<div class="rt-text-style-h6">{getText('louis_pickell', 'Louis Pickell')}</div>
										<div class="rt-team-position">Applications Analyst</div>
									</div></a
								>
								<div
									data-w-id="e1b8580b-ad11-b085-619d-9a66439130de"
									class="w-layout-vflex rt-social-box"
								>
									<a
										href="https://dribbble.com"
										target="_blank"
										class="rt-team-social-card-link w-inline-block"
										><img
											width="15"
											height="15"
											alt="TeamB"
											src={getImage('image_2').url}
											loading="lazy"
											class="rt-autofit"
										/></a
									><a
										href="https://www.instagram.com"
										target="_blank"
										class="rt-team-social-card-link w-inline-block"
										><img
											width="16"
											height="16"
											alt="TeamB"
											src={getImage('image_3').url}
											loading="lazy"
											class="rt-autofit"
										/></a
									><a
										href="https://in.pinterest.com"
										target="_blank"
										class="rt-team-social-card-link w-inline-block"
										><img
											width="16"
											height="16"
											alt="TeamB"
											src={getImage('image_4').url}
											loading="lazy"
											class="rt-autofit"
										/></a
									>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div data-w-id="e1b8580b-ad11-b085-619d-9a66439130e8" class="w-dyn-list">
					<div role="list" class="w-dyn-items">
						<div role="listitem" class="w-dyn-item">
							<div data-w-id="e1b8580b-ad11-b085-619d-9a66439130eb" class="rt-position-relative">
								<a
									href="team-details/ashley-roberts.html"
									class="rt-team-card rt-overflow-hidden w-inline-block"
									><img
										width="410"
										height="460"
										alt="TeamB"
										src={getImage('image_7').url}
										loading="lazy"
										sizes="(max-width: 479px) 100vw, 410px"
										class="rt-autofit rt-tab-full-image"
									/>
									<div class="w-layout-vflex rt-team-description">
										<div class="rt-text-style-h6">{getText('ashley_roberts', 'Ashley Roberts')}</div>
										<div class="rt-team-position">Creative Producer</div>
									</div></a
								>
								<div
									data-w-id="e1b8580b-ad11-b085-619d-9a66439130f1"
									class="w-layout-vflex rt-social-box"
								>
									<a
										href="https://dribbble.com"
										target="_blank"
										class="rt-team-social-card-link w-inline-block"
										><img
											width="15"
											height="15"
											alt="TeamB"
											src={getImage('image_2').url}
											loading="lazy"
											class="rt-autofit"
										/></a
									><a
										href="https://www.instagram.com"
										target="_blank"
										class="rt-team-social-card-link w-inline-block"
										><img
											width="16"
											height="16"
											alt="TeamB"
											src={getImage('image_3').url}
											loading="lazy"
											class="rt-autofit"
										/></a
									><a
										href="https://in.pinterest.com"
										target="_blank"
										class="rt-team-social-card-link w-inline-block"
										><img
											width="16"
											height="16"
											alt="TeamB"
											src={getImage('image_4').url}
											loading="lazy"
											class="rt-autofit"
										/></a
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="w-layout-grid rt-team-card-wrapper-v2">
				<div data-w-id="9f1cc427-9547-69b5-8b6a-602419d528f0" class="w-dyn-list">
					<div role="list" class="w-dyn-items">
						<div role="listitem" class="w-dyn-item">
							<div data-w-id="9f1cc427-9547-69b5-8b6a-602419d528f3" class="rt-position-relative">
								<a
									href="team-details/lauren-gleichner.html"
									class="rt-team-card rt-overflow-hidden w-inline-block"
									><img
										width="410"
										height="460"
										alt="TeamB"
										src={getImage('image_8').url}
										loading="lazy"
										sizes="(max-width: 479px) 100vw, 410px"
										class="rt-autofit rt-tab-full-image"
									/>
									<div class="w-layout-vflex rt-team-description">
										<div class="rt-text-style-h6">{getText('lauren_gleichner', 'Lauren Gleichner')}</div>
										<div class="rt-team-position">Intranet Associate</div>
									</div></a
								>
								<div
									data-w-id="9f1cc427-9547-69b5-8b6a-602419d528f9"
									class="w-layout-vflex rt-social-box"
								>
									<a
										href="https://dribbble.com"
										target="_blank"
										class="rt-team-social-card-link w-inline-block"
										><img
											width="15"
											height="15"
											alt="TeamB"
											src={getImage('image_2').url}
											loading="lazy"
											class="rt-autofit"
										/></a
									><a
										href="https://www.instagram.com"
										target="_blank"
										class="rt-team-social-card-link w-inline-block"
										><img
											width="16"
											height="16"
											alt="TeamB"
											src={getImage('image_3').url}
											loading="lazy"
											class="rt-autofit"
										/></a
									><a
										href="https://in.pinterest.com"
										target="_blank"
										class="rt-team-social-card-link w-inline-block"
										><img
											width="16"
											height="16"
											alt="TeamB"
											src={getImage('image_4').url}
											loading="lazy"
											class="rt-autofit"
										/></a
									>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div data-w-id="9f1cc427-9547-69b5-8b6a-602419d52903" class="w-dyn-list">
					<div role="list" class="w-dyn-items">
						<div role="listitem" class="w-dyn-item">
							<div data-w-id="9f1cc427-9547-69b5-8b6a-602419d52906" class="rt-position-relative">
								<a
									href="team-details/denise-kutch.html"
									class="rt-team-card rt-overflow-hidden w-inline-block"
									><img
										width="410"
										height="460"
										alt="TeamB"
										src={getImage('image_9').url}
										loading="lazy"
										sizes="(max-width: 479px) 100vw, 410px"
										class="rt-autofit rt-tab-full-image"
									/>
									<div class="w-layout-vflex rt-team-description">
										<div class="rt-text-style-h6">{getText('denise_kutch', 'Denise Kutch')}</div>
										<div class="rt-team-position">Manager</div>
									</div></a
								>
								<div
									data-w-id="9f1cc427-9547-69b5-8b6a-602419d5290c"
									class="w-layout-vflex rt-social-box"
								>
									<a
										href="https://dribbble.com"
										target="_blank"
										class="rt-team-social-card-link w-inline-block"
										><img
											width="15"
											height="15"
											alt="TeamB"
											src={getImage('image_2').url}
											loading="lazy"
											class="rt-autofit"
										/></a
									><a
										href="https://www.instagram.com"
										target="_blank"
										class="rt-team-social-card-link w-inline-block"
										><img
											width="16"
											height="16"
											alt="TeamB"
											src={getImage('image_3').url}
											loading="lazy"
											class="rt-autofit"
										/></a
									><a
										href="https://in.pinterest.com"
										target="_blank"
										class="rt-team-social-card-link w-inline-block"
										><img
											width="16"
											height="16"
											alt="TeamB"
											src={getImage('image_4').url}
											loading="lazy"
											class="rt-autofit"
										/></a
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
