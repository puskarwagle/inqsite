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

<section class="rt-home-v2-hero">
	<div>
		<div class="rt-green-dot"></div>
		<div class="rt-dark-yellow-dot"></div>
		<div class="rt-dark-yellow-dot-two"></div>
		<div class="rt-violet-dot"></div>
		<div class="rt-violet-dot-two"></div>
	</div>
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-hflex rt-automate-solution">
			<div class="w-layout-vflex rt-automate-solution-text-wrapper-v2">
				<h1 data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cd97" class="rt-gap-off rt-h1-gap">{getText('hero_heading', 'Automate Conversations with Intelligent AI Solutions')}</h1>
				<p
					data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cd99"
					class="rt-automate-solution-paragraph-v2 rt-gap-off rt-h2-paragraph-gap"
				>
					Eu eget accumsan risus montes nibh hac. Ut condimentum nunc accumsan mollis dis. Lacus non
					ante Netus ultricies.
				</p>
				<div
					data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cd9b"
					class="w-layout-hflex rt-button-wrapper"
				>
					<a
						data-wf--rt-button-v1--variant="base"
						data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
						href="service-one.html"
						class="rt-button w-inline-block"
						><div class="w-layout-hflex rt-button-text-image-wrapper">
							<div class="w-layout-hflex rt-button-text-wrap">
								<div class="rt-button-text rt-button-hover-in">{getText('join_us_today', 'Join Us Today')}</div>
								<div class="rt-button-text rt-button-hover-out">{getText('join_us_today', 'Join Us Today')}</div>
							</div>
							<img
								width="10"
								height="9"
								alt={getText('arrow', 'Arrow')}
								src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg'}
								loading="lazy"
								class="rt-button-arrow-image"
							/></div
					></a>
					<div class="w-layout-hflex rt-video-block">
						<a
							href="home-two.html#"
							data-w-id="d1fcb99f-03d8-310f-1df0-693bc9a3c689"
							class="rt-hero-video-button-block w-inline-block w-lightbox"
							><div
								data-w-id="d1fcb99f-03d8-310f-1df0-693bc9a3c68a"
								class="w-layout-hflex rt-hero-video-button-icon rt-overflow-hidden"
							>
								<img
									width="15"
									height="17"
									alt={getText('play_button', 'Play button')}
									src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf931bfc626df83f9d83c_Play%20button.svg'}
									loading="lazy"
								/>
							</div>
							<div class="w-layout-vflex rt-video-button-text-wrap">
								<div
									data-w-id="d1fcb99f-03d8-310f-1df0-693bc9a3c68d"
									class="rt-button-text rt-button-hover-in"
								>{getText('button_watch_video', 'Watch video')}</div>
								<div
									data-w-id="d1fcb99f-03d8-310f-1df0-693bc9a3c68f"
									class="rt-button-text rt-button-hover-out"
								>{getText('button_watch_video', 'Watch video')}</div>
							</div>
							<script type="application/json" class="w-json">
								{
								  "items": [
								    {
								      "url": "https://youtube.com/watch?v=v1M4ydNlgP0",
								      "originalUrl": "https://youtube.com/watch?v=v1M4ydNlgP0",
								      "width": 940,
								      "height": 528,
								      "thumbnailUrl": "https://i.ytimg.com/vi/v1M4ydNlgP0/hqdefault.jpg",
								      "html": "<iframe class=\"embedly-embed\" src="https://botcloud.webflow.io/\&quot;//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fv1M4ydNlgP0%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dv1M4ydNlgP0&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fv1M4ydNlgP0%2Fhqdefault.jpg&amp;type=text%2Fhtml&amp;schema=youtube\&quot;" width=\"940\" height=\"528\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen; encrypted-media; picture-in-picture;\" allowfullscreen=\"true\"></iframe>",
								      "type": "video"
								    }
								  ],
								  "group": ""
								}
							</script></a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-hflex rt-solution-dashboard rt-position-relative">
			<div data-w-id="3e644226-a296-7e69-8492-6e223b2c1b5e" class="rt-solution-dashboard-image-one">
				<img
					src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/680b3997c8e2f33aceabd809_Home%20Two%20Dashboard.avif'}
					alt={getText('home_two_dashboard', 'Home Two Dashboard')}
					width="1065"
					height="630"
					class="rt-autofit"
				/>
			</div>
			<div
				data-w-id="6ba0eaf1-3de0-4525-0170-9dd58d7a2ddd"
				class="rt-solution-dashboard-image-two-wrapper"
			>
				<img
					src={getImage('image_4').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf92507c68ccfe6dff032_Line%20Styling.webp'}
					loading="lazy"
					width="222"
					height="221"
					alt={getText('statistics', 'Statistics')}
					class="rt-solution-image-two rt-autofit"
				/>
			</div>
		</div>
	</div>
</section>
