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

<section data-w-id="b98fe9fb-c1a1-6e28-b3c4-a129db49c1df" class="rt-home-v3-hero">
	<div class="rt-green-dot"></div>
	<div class="rt-dark-yellow-dot"></div>
	<div class="rt-dark-yellow-dot-two"></div>
	<div class="rt-violet-dot"></div>
	<div class="rt-violet-dot-two"></div>
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-vflex rt-automate-solution rt-change">
			<div class="w-layout-vflex rt-automate-solution-text-wrapper rt-desktop-text-center">
				<h1 data-w-id="9ee8ad4e-f15e-5c8b-fa16-b415dbf46872" class="rt-gap-off rt-h1-gap">
					{getText('hero_heading', 'Quest Bot - Your AI-Powered Job Search Team')}
				</h1>
				<p
					data-w-id="b98fe9fb-c1a1-6e28-b3c4-a129db49c1ea"
					class="rt-automate-solution-paragraph rt-gap-off rt-h2-paragraph-gap"
				>
					{getText('hero_description', 'A suite of intelligent AI agents that work together to automate and accelerate your job search. Think of it as having a dedicated team of specialists working 24/7 to land your dream job.')}
				</p>
				<div
					data-w-id="b98fe9fb-c1a1-6e28-b3c4-a129db49c1ec"
					class="w-layout-hflex rt-button-wrapper"
				>
					<a
						data-wf--rt-button-v1--variant="base"
						data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
						href="service-two.html"
						class="rt-button w-inline-block"
						><div class="w-layout-hflex rt-button-text-image-wrapper">
							<div class="w-layout-hflex rt-button-text-wrap">
								<div class="rt-button-text rt-button-hover-in">{getText('join_us_today', 'Join Us Today')}</div>
								<div class="rt-button-text rt-button-hover-out">{getText('join_us_today', 'Join Us Today')}</div>
							</div>
							<img
								width="10"
								height="9"
								alt="HomeOneA"
								src={getImage('image_1').url}
								loading="lazy"
								class="rt-button-arrow-image"
							/></div
					></a>
					<div class="w-layout-hflex rt-video-block">
						<a
							href="home-one.html#"
							data-w-id="b98fe9fb-c1a1-6e28-b3c4-a129db49c1f0"
							class="rt-hero-video-button-block w-inline-block w-lightbox"
							><div
								data-w-id="b98fe9fb-c1a1-6e28-b3c4-a129db49c1f1"
								class="w-layout-hflex rt-hero-video-button-icon rt-overflow-hidden"
							>
								<img
									width="15"
									height="17"
									alt="HomeOneA"
									src={getImage('image_2').url}
									loading="lazy"
								/>
							</div>
							<div class="w-layout-vflex rt-video-button-text-wrap">
								<div
									data-w-id="b98fe9fb-c1a1-6e28-b3c4-a129db49c1f3"
									class="rt-button-text rt-button-hover-in"
								>{getText('button_watch_video', 'Watch video')}</div>
								<div
									data-w-id="5c3b1dc6-9d40-3c2b-f131-03003607828a"
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
			<div class="w-layout-hflex rt-automate-solution-hero-image-wrapper rt-position-relative">
				<div class="rt-robot-image-home-v3">
					<img
						src={getImage('image_3').url}
						loading="lazy"
						width="215"
						height="377"
						alt="HomeOneA"
						data-w-id="6f4d1dbe-8c0d-0825-8652-35273102a2f1"
						class="rt-autofit"
					/>
				</div>
				<img
					src={getImage('image_4').url}
					data-w-id="e0dd51ef-3eaa-89e8-36d6-9eb7f0b2ec3d"
					width="1065"
					height="758"
					alt="HomeOneA"
					sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
					class="rt-automate-solution-image-one rt-autofit rt-tab-full-image"
				/><img
					src={getImage('image_5').url}
					data-w-id="ec3d56e6-4bcb-691d-4e27-c505359b1963"
					width="802"
					height="578"
					alt="HomeOneA"
					class="rt-automate-solution-image-two rt-autofit rt-tab-full-image"
				/><img
					src={getImage('image_6').url}
					data-w-id="f0f6f0f0-7486-fe5c-8bc5-32435480fadb"
					width="249"
					height="198"
					alt="HomeOneA"
					class="rt-automate-solution-image-three rt-autofit"
				/><img
					src={getImage('image_7').url}
					data-w-id="8d597ad8-8a8a-e579-0303-5b70726259b1"
					width="230"
					height="102"
					alt="HomeOneA"
					class="rt-automate-solution-image-four"
				/>
			</div>
		</div>
	</div>
</section>
