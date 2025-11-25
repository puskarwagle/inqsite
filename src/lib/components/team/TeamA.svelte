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

<section class="rt-team">
	<div>
		<div class="w-layout-blockcontainer rt-container-small w-container">
			<div class="w-layout-vflex rt-team-top-header rt-desktop-text-center">
				<h1 data-w-id="b02c4caf-17f8-df66-31b2-c61ea72ecfbc" class="rt-gap-off rt-h1-gap">{getText('hero_heading', 'AI-Powered Team Driving Business Innovation')}</h1>
				<p
					data-w-id="592006d9-23ab-d5af-7775-8cec26a04f79"
					class="rt-team-top-paragraph rt-gap-off"
				>
					Eu eget accumsan risus montes nibh hac. Ut condimentum nunc accumsan mollis dis. Lacus non
					ante Netus ultricies.
				</p>
			</div>
		</div>
	</div>
	<div class="rt-member-image-marquee">
		<div class="w-layout-hflex rt-member-image-block-center">
			<div class="w-layout-hflex rt-member-circle-block">
				<div class="rt-image-scroll-box one w-dyn-list">
					<div role="list" class="w-dyn-items">
						<div role="listitem" class="w-dyn-item">
							<div class="w-layout-hflex rt-circle-image-wrapper">
								<img
									src={getImage('image_1').url}
									loading="lazy"
									width="316"
									height="421"
									alt=""
									sizes="(max-width: 479px) 100vw, 316px"
									srcset="https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e992e78336152373d237ba_Team%20Member%20Portrait%20(4)-p-500.webp 500w, https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e992e78336152373d237ba_Team%20Member%20Portrait%20(4).webp 632w"
									class="rt-circle-image rt-autofit"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="rt-image-scroll-box two w-dyn-list">
					<div role="list" class="w-dyn-items">
						<div role="listitem" class="w-dyn-item">
							<div class="w-layout-hflex rt-circle-image-wrapper">
								<img
									src={getImage('image_2').url}
									loading="lazy"
									width="316"
									height="421"
									alt=""
									sizes="(max-width: 479px) 100vw, 316px"
									srcset="https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e99295a1a0012219fe2599_Team%20Member%20Portrait%20(5)-p-500.webp 500w, https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e99295a1a0012219fe2599_Team%20Member%20Portrait%20(5).webp 632w"
									class="rt-circle-image rt-autofit"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="rt-image-scroll-box three w-dyn-list">
					<div role="list" class="w-dyn-items">
						<div role="listitem" class="w-dyn-item">
							<div class="w-layout-hflex rt-circle-image-wrapper">
								<img
									src={getImage('image_3').url}
									loading="lazy"
									width="316"
									height="421"
									alt=""
									sizes="(max-width: 479px) 100vw, 316px"
									srcset="https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e9923d2e113f5398c10566_Team%20Member%20Portrait-p-500.webp 500w, https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e9923d2e113f5398c10566_Team%20Member%20Portrait.webp 632w"
									class="rt-circle-image rt-autofit"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="rt-image-scroll-box four w-dyn-list">
					<div role="list" class="w-dyn-items">
						<div role="listitem" class="w-dyn-item">
							<div class="w-layout-hflex rt-circle-image-wrapper">
								<img
									src={getImage('image_4').url}
									loading="lazy"
									width="316"
									height="421"
									alt=""
									sizes="(max-width: 479px) 100vw, 316px"
									srcset="https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e991e830d76b050553541d_Team%20Member%20Portrait%20(3)-p-500.webp 500w, https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e991e830d76b050553541d_Team%20Member%20Portrait%20(3).webp 632w"
									class="rt-circle-image rt-autofit"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="rt-image-scroll-box five w-dyn-list">
					<div role="list" class="w-dyn-items">
						<div role="listitem" class="w-dyn-item">
							<div class="w-layout-hflex rt-circle-image-wrapper">
								<img
									src={getImage('image_5').url}
									loading="lazy"
									width="316"
									height="421"
									alt=""
									sizes="(max-width: 479px) 100vw, 316px"
									srcset="https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e991afcf0f44a24216fcc5_Team%20Member%20Portrait%20(2)-p-500.webp 500w, https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e991afcf0f44a24216fcc5_Team%20Member%20Portrait%20(2).webp 632w"
									class="rt-circle-image rt-autofit"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="rt-image-scroll-box six w-dyn-list">
					<div role="list" class="w-dyn-items">
						<div role="listitem" class="w-dyn-item">
							<div class="w-layout-hflex rt-circle-image-wrapper">
								<img
									src={getImage('image_6').url}
									loading="lazy"
									width="316"
									height="421"
									alt=""
									sizes="(max-width: 479px) 100vw, 316px"
									srcset="https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e991301ffdef79166f533e_Team%20Member%20Portrait%20(1)-p-500.webp 500w, https://cdn.prod.website-files.com/67e0fe61aeef80d2da1f13ba/67e991301ffdef79166f533e_Team%20Member%20Portrait%20(1).webp 632w"
									class="rt-circle-image rt-autofit"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
