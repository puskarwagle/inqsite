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

<section
	data-wf--rt-recent-blog-post--variant="background-change"
	class="rt-insight-updates-v2 w-variant-caf4d6f7-0ffc-3180-9452-aa3e9829687f"
>
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="rt-insight-updates-title">
			<h2
				data-w-id="229e6ec2-7b8c-6e7d-fb5a-116b174467c9"
				class="rt-desktop-text-center rt-gap-off"
			>{getText('section_heading', 'Insights and Updates from Our Recent Posts')}</h2>
		</div>
		<div class="rt-blog-recent-post-wrapper">
			<div class="w-dyn-list">
				<div role="list" class="rt-recent-post-list w-dyn-items">
					<div role="listitem" class="w-dyn-item">
						<a
							data-w-id="229e6ec2-7b8c-6e7d-fb5a-116b174467cc"
							href="blog-details/how-ai-is-reshaping-the-business-landscape.html"
							class="rt-insight-card-v2 w-inline-block"
							><div class="rt-overflow-hidden rt-radious-ten">
								<img
									width="410"
									height="283"
									alt=""
									src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/68060095b0772f5c96e3de97_Small%20Image%20(7).webp'}
									loading="lazy"
									sizes="(max-width: 479px) 100vw, 410px"
									srcset="https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/68060095b0772f5c96e3de97_Small%20Image%20(7)-p-500.webp 500w, https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/68060095b0772f5c96e3de97_Small%20Image%20(7)-p-800.webp 800w, https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/68060095b0772f5c96e3de97_Small%20Image%20(7)-p-1080.webp 1080w, https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/68060095b0772f5c96e3de97_Small%20Image%20(7).webp 1260w"
									class="rt-autofit rt-radious-ten rt-tab-full-image"
								/>
							</div>
							<div class="w-layout-hflex rt-post-details">
								<div class="w-layout-hflex rt-insight-post-date">
									<img
										width="18"
										height="18"
										alt={getText('calender', 'Calender')}
										src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf925e3ae73778f61ace6_Calender.svg'}
										loading="lazy"
									/>
									<div>April 21, 2025</div>
								</div>
								<div class="w-layout-hflex rt-insight-post-author">
									<img
										width="18"
										height="18"
										alt={getText('user', 'User')}
										src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7df_User.svg'}
										loading="lazy"
									/>
									<div>Lisa Belcher</div>
								</div>
							</div>
							<div class="rt-post-details-title-wrap">
								<div class="rt-text-style-h5">{getText('how_ai_is', 'How AI is Reshaping the Business Landscape')}</div>
							</div></a
						>
					</div>
					<div role="listitem" class="w-dyn-item">
						<a
							data-w-id="229e6ec2-7b8c-6e7d-fb5a-116b174467cc"
							href="blog-details/blending-intelligence-and-immersion-for-creativity.html"
							class="rt-insight-card-v2 w-inline-block"
							><div class="rt-overflow-hidden rt-radious-ten">
								<img
									width="410"
									height="283"
									alt=""
									src={getImage('image_4').url || 'https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/6805f384894ded930d20c714_Small%20Image(8).webp'}
									loading="lazy"
									sizes="(max-width: 479px) 100vw, 410px"
									srcset="https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/6805f384894ded930d20c714_Small%20Image(8)-p-500.webp 500w, https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/6805f384894ded930d20c714_Small%20Image(8)-p-800.webp 800w, https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/6805f384894ded930d20c714_Small%20Image(8)-p-1080.webp 1080w, https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/6805f384894ded930d20c714_Small%20Image(8).webp 1260w"
									class="rt-autofit rt-radious-ten rt-tab-full-image"
								/>
							</div>
							<div class="w-layout-hflex rt-post-details">
								<div class="w-layout-hflex rt-insight-post-date">
									<img
										width="18"
										height="18"
										alt={getText('calender', 'Calender')}
										src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf925e3ae73778f61ace6_Calender.svg'}
										loading="lazy"
									/>
									<div>April 21, 2025</div>
								</div>
								<div class="w-layout-hflex rt-insight-post-author">
									<img
										width="18"
										height="18"
										alt={getText('user', 'User')}
										src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7df_User.svg'}
										loading="lazy"
									/>
									<div>Harriet Block</div>
								</div>
							</div>
							<div class="rt-post-details-title-wrap">
								<div class="rt-text-style-h5">{getText('blending_intelligence_and', 'Blending Intelligence and Immersion for Creativity')}</div>
							</div></a
						>
					</div>
					<div role="listitem" class="w-dyn-item">
						<a
							data-w-id="229e6ec2-7b8c-6e7d-fb5a-116b174467cc"
							href="blog-details/ai-in-customer-service-the-new-standard.html"
							class="rt-insight-card-v2 w-inline-block"
							><div class="rt-overflow-hidden rt-radious-ten">
								<img
									width="410"
									height="283"
									alt=""
									src={getImage('image_5').url || 'https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67ea227fe2ee3679eab02ea3_Post%20image%20(7).webp'}
									loading="lazy"
									sizes="(max-width: 479px) 100vw, 410px"
									srcset="https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67ea227fe2ee3679eab02ea3_Post%20image%20(7)-p-500.webp 500w, https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67ea227fe2ee3679eab02ea3_Post%20image%20(7)-p-800.webp 800w, https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67ea227fe2ee3679eab02ea3_Post%20image%20(7)-p-1080.webp 1080w, https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67ea227fe2ee3679eab02ea3_Post%20image%20(7).webp 1260w"
									class="rt-autofit rt-radious-ten rt-tab-full-image"
								/>
							</div>
							<div class="w-layout-hflex rt-post-details">
								<div class="w-layout-hflex rt-insight-post-date">
									<img
										width="18"
										height="18"
										alt={getText('calender', 'Calender')}
										src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf925e3ae73778f61ace6_Calender.svg'}
										loading="lazy"
									/>
									<div>April 21, 2025</div>
								</div>
								<div class="w-layout-hflex rt-insight-post-author">
									<img
										width="18"
										height="18"
										alt={getText('user', 'User')}
										src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7df_User.svg'}
										loading="lazy"
									/>
									<div>Phillip Nitzsche</div>
								</div>
							</div>
							<div class="rt-post-details-title-wrap">
								<div class="rt-text-style-h5">{getText('ai_in_customer', 'AI in Customer Service: The New Standard')}</div>
							</div></a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
