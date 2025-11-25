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

<section class="rt-team-member rt-change">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-vflex rt-team-top-text rt-desktop-text-center">
			<h2 data-w-id="b1df3202-e056-36f7-b9dc-7f9b02f8b69c" class="rt-gap-off rt-h2-gap">
				{getText('section_heading', 'Join our amazing team')}
			</h2>
			<p data-w-id="b1df3202-e056-36f7-b9dc-7f9b02f8b69e" class="rt-gap-off rt-h2-paragraph-gap">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.')}</p>
		</div>
		<div class="w-layout-grid rt-team-card-wrapper">
			<div class="w-dyn-list">
				<div role="list" class="w-dyn-items">
					<div role="listitem" class="w-dyn-item">
						<div data-w-id="01060389-59c7-7d7b-6ead-2934a63dcaab" class="rt-position-relative">
							<a
								href={getLink('team_member_1_link').href || 'team-details/olivia-davis.html'}
								class="rt-team-card rt-overflow-hidden w-inline-block"
								><img
									width="410"
									height="460"
									alt={getImage('team_member_1_image').alt || 'Olivia Davis'}
									src={getImage('team_member_1_image').url || 'https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e991a1528c3b1646bcfed3_Team%20Member%20(5).webp'}
									loading="lazy"
									sizes="(max-width: 479px) 100vw, 410px"
									srcset="https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e991a1528c3b1646bcfed3_Team%20Member%20(5)-p-500.webp 500w, https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e991a1528c3b1646bcfed3_Team%20Member%20(5)-p-800.webp 800w, https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e991a1528c3b1646bcfed3_Team%20Member%20(5).webp 1070w"
									class="rt-autofit rt-tab-full-image"
								/>
								<div class="w-layout-vflex rt-team-description">
									<div class="rt-text-style-h6">{getText('team_member_1_name', 'Olivia Davis')}</div>
									<div class="rt-team-position">{getText('team_member_1_position', 'Data Analyst')}</div>
								</div></a
							>
							<div
								data-w-id="b1df3202-e056-36f7-b9dc-7f9b02f8b6a8"
								class="w-layout-vflex rt-social-box"
							>
								<a
									href={getLink('team_member_1_social_1').href || 'https://dribbble.com'}
									target="_blank"
									class="rt-team-social-card-link w-inline-block"
									><img
										width="15"
										height="15"
										alt={getText('dribble', 'Dribble')}
										src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a8181_Dribble.svg"
										loading="lazy"
										class="rt-autofit"
									/></a
								><a
									href={getLink('team_member_1_social_2').href || 'https://www.instagram.com'}
									target="_blank"
									class="rt-team-social-card-link w-inline-block"
									><img
										width="16"
										height="16"
										alt={getText('instagram', 'Instagram')}
										src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a817f_Instagram.svg"
										loading="lazy"
										class="rt-autofit"
									/></a
								><a
									href={getLink('team_member_1_social_3').href || 'https://in.pinterest.com'}
									target="_blank"
									class="rt-team-social-card-link w-inline-block"
									><img
										width="16"
										height="16"
										alt={getText('pinterest', 'Pinterest')}
										src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a8180_Pinterest.svg"
										loading="lazy"
										class="rt-autofit"
									/></a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="rt-team-card-margin w-dyn-list">
				<div role="list" class="w-dyn-items">
					<div role="listitem" class="w-dyn-item">
						<div data-w-id="275a89e8-af93-aead-fe2b-c66d985965a6" class="rt-position-relative">
							<a
								href={getLink('team_member_2_link').href || 'team-details/louis-pickell.html'}
								class="rt-team-card rt-overflow-hidden w-inline-block"
								><img
									width="410"
									height="460"
									alt={getImage('team_member_2_image').alt || 'Louis Pickell'}
									src={getImage('team_member_2_image').url || 'https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e99274324c102df5dc36c0_Team%20Member%20(4).webp'}
									loading="lazy"
									sizes="(max-width: 479px) 100vw, 410px"
									srcset="https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e99274324c102df5dc36c0_Team%20Member%20(4)-p-500.webp 500w, https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e99274324c102df5dc36c0_Team%20Member%20(4)-p-800.webp 800w, https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e99274324c102df5dc36c0_Team%20Member%20(4).webp 1070w"
									class="rt-autofit rt-tab-full-image"
								/>
								<div class="w-layout-vflex rt-team-description">
									<div class="rt-text-style-h6">{getText('team_member_2_name', 'Louis Pickell')}</div>
									<div class="rt-team-position">{getText('team_member_2_position', 'Applications Analyst')}</div>
								</div></a
							>
							<div
								data-w-id="275a89e8-af93-aead-fe2b-c66d985965ac"
								class="w-layout-vflex rt-social-box"
							>
								<a
									href={getLink('team_member_2_social_1').href || 'https://dribbble.com'}
									target="_blank"
									class="rt-team-social-card-link w-inline-block"
									><img
										width="15"
										height="15"
										alt={getText('dribble', 'Dribble')}
										src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a8181_Dribble.svg"
										loading="lazy"
										class="rt-autofit"
									/></a
								><a
									href={getLink('team_member_2_social_2').href || 'https://www.instagram.com'}
									target="_blank"
									class="rt-team-social-card-link w-inline-block"
									><img
										width="16"
										height="16"
										alt={getText('instagram', 'Instagram')}
										src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a817f_Instagram.svg"
										loading="lazy"
										class="rt-autofit"
									/></a
								><a
									href={getLink('team_member_2_social_3').href || 'https://in.pinterest.com/login'}
									target="_blank"
									class="rt-team-social-card-link w-inline-block"
									><img
										width="16"
										height="16"
										alt={getText('pinterest', 'Pinterest')}
										src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a8180_Pinterest.svg"
										loading="lazy"
										class="rt-autofit"
									/></a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="w-dyn-list">
				<div role="list" class="w-dyn-items">
					<div role="listitem" class="w-dyn-item">
						<div data-w-id="f1e6009a-3de9-b03b-5c25-0be515e44b49" class="rt-position-relative">
							<a
								href={getLink('team_member_3_link').href || 'team-details/ashley-roberts.html'}
								class="rt-team-card rt-overflow-hidden w-inline-block"
								><img
									width="410"
									height="460"
									alt={getImage('team_member_3_image').alt || 'Ashley Roberts'}
									src={getImage('team_member_3_image').url || 'https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e991a764939dd7fe6abc08_Team%20Member%20(2).webp'}
									loading="lazy"
									sizes="(max-width: 479px) 100vw, 410px"
									srcset="https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e991a764939dd7fe6abc08_Team%20Member%20(2)-p-500.webp 500w, https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e991a764939dd7fe6abc08_Team%20Member%20(2)-p-800.webp 800w, https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e991a764939dd7fe6abc08_Team%20Member%20(2).webp 1070w"
									class="rt-autofit rt-tab-full-image"
								/>
								<div class="w-layout-vflex rt-team-description">
									<div class="rt-text-style-h6">{getText('team_member_3_name', 'Ashley Roberts')}</div>
									<div class="rt-team-position">{getText('team_member_3_position', 'Creative Producer')}</div>
								</div></a
							>
							<div
								data-w-id="f1e6009a-3de9-b03b-5c25-0be515e44b4f"
								class="w-layout-vflex rt-social-box"
							>
								<a
									href={getLink('team_member_3_social_1').href || 'https://dribbble.com'}
									target="_blank"
									class="rt-team-social-card-link w-inline-block"
									><img
										width="15"
										height="15"
										alt={getText('dribble', 'Dribble')}
										src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a8181_Dribble.svg"
										loading="lazy"
										class="rt-autofit"
									/></a
								><a
									href={getLink('team_member_3_social_2').href || 'https://www.instagram.com'}
									target="_blank"
									class="rt-team-social-card-link w-inline-block"
									><img
										width="16"
										height="16"
										alt={getText('instagram', 'Instagram')}
										src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a817f_Instagram.svg"
										loading="lazy"
										class="rt-autofit"
									/></a
								><a
									href={getLink('team_member_3_social_3').href || 'https://in.pinterest.com'}
									target="_blank"
									class="rt-team-social-card-link w-inline-block"
									><img
										width="16"
										height="16"
										alt={getText('pinterest', 'Pinterest')}
										src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a8180_Pinterest.svg"
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
</section>
