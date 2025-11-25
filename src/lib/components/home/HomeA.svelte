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
	data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0e29"
	class="rt-home-v1-hero rt-position-relative"
>
	<div class="w-layout-blockcontainer rt-container-medium w-container">
		<div data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0e2b" class="w-layout-hflex rt-productivity">
			<div class="w-layout-vflex rt-robot-box rt-position-relative">
				<div
					data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0e2d"
					class="rt-robot-image-block rt-position-relative"
				>
					<img
						width="350"
						height="Auto"
						alt={getImage('robot_main').alt || 'Spline Image one'}
						src={getImage('robot_main').url}
						loading="eager"
						data-w-id="266b3c56-04d4-1030-dfa1-6834dafddf42"
						class="rt-robot-image rt-autofit"
						style="transform-style: preserve-3d; will-change: transform;"
					/>
					<img
						width="192"
						height="21"
						alt={getText('shape', 'Shape')}
						src="https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d790_Robot%20shadow.svg"
						loading="lazy"
						class="rt-robot-shadow"
						style="transform: translate3d(0px, 0px, 0px) scale3d(0.973168, 0.973168, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d; will-change: transform;"
					/>
				</div>
				<img
					width="403"
					height="260"
					alt={getText('dashboard_image', 'Dashboard Image')}
					src="https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/680a35d8c8a43a90efd9fc6e_Frame.webp"
					data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0e30"
					sizes="(max-width: 479px) 100vw, 403px"
					class="rt-stat-one"
					style="opacity: 1; transform-style: preserve-3d;"
				/><img
					width="100"
					height="55"
					alt={getText('cloud', 'Cloud')}
					src="https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf926202a4f1f698410e7_Cloud.webp"
					loading="eager"
					data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0e31"
					class="rt-cloud"
					style="opacity: 1; transform-style: preserve-3d; will-change: transform;"
				/><img
					width="303"
					height="174"
					alt={getText('dashboard_image', 'Dashboard Image')}
					src="https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/680a36cc948881b7259c43c9_Dashboard-9-2.webp"
					loading="eager"
					data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0e32"
					class="rt-stat-line-image"
					style="opacity: 1; transform-style: preserve-3d;"
				/><img
					width="233.5"
					height="93"
					alt={getText('dashboard_image', 'Dashboard Image')}
					src="https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/680a360db03aeb95e0fce0e7_Group.webp"
					data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0e33"
					class="rt-stat-line-image-two"
					style="opacity: 1; transform-style: preserve-3d;"
				/><img
					width="46"
					height="54"
					alt={getText('rocket', 'Rocket')}
					src="https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf9266a29175f2e719597_rocket.webp"
					loading="lazy"
					data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0e34"
					class="rt-rocket"
					style="opacity: 1; transform-style: preserve-3d; will-change: transform;"
				/><img
					width="123"
					height="61"
					alt={getText('user', 'User')}
					src="https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf927630cb9fa0101283a_User.webp"
					loading="eager"
					data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0e35"
					class="rt-float-user"
					style="opacity: 1; transform-style: preserve-3d; will-change: transform;"
				/>
			</div>
			<div class="w-layout-vflex rt-productivity-text-wrapper">
				<div class="w-layout-vflex rt-productivity-text">
					<h1
						data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0e38"
						class="rt-gap-off rt-h1-gap"
						style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
					>
						{getText('hero_heading', 'Elevate Productivity with Future-Ready AI Applications')}
					</h1>
					<p
						data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0e3a"
						class="rt-productivity-paragraph rt-gap-off rt-h2-paragraph-gap"
						style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
					>
						{getText('hero_paragraph', 'Lorem ipsum dolor sit amet consectetur. Amet ullamcorper atsit eros risus eget tristique diam imperdiet. Eleifend')}
					</p>
				</div>
				<div
					data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0e3c"
					class="w-layout-hflex rt-button-wrapper"
					style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
				>
					<a
						data-wf--rt-button-v1--variant="base"
						data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
						href={getLink('cta_button').href || '/about'}
						class="rt-button w-inline-block"
						><div class="w-layout-hflex rt-button-text-image-wrapper">
							<div class="w-layout-hflex rt-button-text-wrap">
								<div
									class="rt-button-text rt-button-hover-in"
									style="transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
								>
									{getText('button_get_started', 'Get Started')}
								</div>
								<div
									class="rt-button-text rt-button-hover-out"
									style="transform: translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
								>
									{getText('button_get_started', 'Get Started')}
								</div>
							</div>
							<img
								width="10"
								height="9"
								alt={getText('arrow', 'Arrow')}
								src="https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg"
								loading="lazy"
								class="rt-button-arrow-image"
							/>
						</div></a
					>
					<div class="w-layout-hflex rt-video-block">
						<a
							href="#"
							data-w-id="a7f1de74-f930-2a44-f77e-3357e0074c1d"
							class="rt-hero-video-button-block w-inline-block w-lightbox"
							aria-label="open lightbox"
							aria-haspopup="dialog"
							><div
								data-w-id="a7f1de74-f930-2a44-f77e-3357e0074c1e"
								class="w-layout-hflex rt-hero-video-button-icon rt-overflow-hidden"
								style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
							>
								<img
									width="15"
									height="17"
									alt={getText('play_button', 'Play button')}
									src="https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf931bfc626df83f9d83c_Play%20button.svg"
									loading="lazy"
								/>
							</div>
							<div class="w-layout-vflex rt-video-button-text-wrap">
								<div
									data-w-id="a7f1de74-f930-2a44-f77e-3357e0074c21"
									class="rt-button-text rt-button-hover-in"
									style="transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
								>
									Watch video
								</div>
								<div
									data-w-id="a7f1de74-f930-2a44-f77e-3357e0074c23"
									class="rt-button-text rt-button-hover-out"
									style="transform: translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
								>
									Watch video
								</div>
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
											"html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fv1M4ydNlgP0%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dv1M4ydNlgP0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fv1M4ydNlgP0%2Fhqdefault.jpg&type=text%2Fhtml&schema=youtube\" width=\"940\" height=\"528\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen; encrypted-media; picture-in-picture;\" allowfullscreen=\"true\"></iframe>",
											"type": "video"
										}
									],
									"group": ""
								}
							</script></a
						>
					</div>
				</div>
				<div
					data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0e47"
					class="w-layout-hflex rt-rating-block"
					style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
				>
					<div class="w-layout-hflex rt-rating-image-block rt-overflow-hidden">
						<img
							width="58"
							height="58"
							alt={getText('user', 'User')}
							src="https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf9270ce1a503421d3681_Users.webp"
							loading="eager"
							class="rt-user-image"
						/><img
							width="58"
							height="58"
							alt={getText('users', 'Users')}
							src="https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d78e_Users%202.webp"
							loading="eager"
							class="rt-user-image rt-left-slide"
						/><img
							width="58"
							height="58"
							alt={getText('users', 'Users')}
							src="https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d78f_Users%203.webp"
							loading="eager"
							class="rt-user-image rt-left-slide"
						/>
					</div>
					<div>
						<div class="w-layout-hflex rt-rating-top-block">
							<img
								width="92"
								height="14"
								alt={getText('star', 'Star')}
								src="https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d793_Star.svg"
								loading="lazy"
							/>
							<div>4.9/5</div>
						</div>
						<div class="rt-text-style-h6">AI Performance Rating</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="rt-achievement-counter-wrapper">
			<div data-wf--rt-counter-v1--variant="base" class="w-layout-grid rt-our-achievement-v1">
				<div class="w-layout-vflex rt-achievement-box">
					<div
						data-w-id="73eb367f-86c6-0ebc-de7f-236ac5f86f86"
						class="w-layout-hflex rt-counter rt-overflow-hidden"
					>
						<div class="w-layout-vflex rt-counter-block rt-margin">
							<div
								class="w-layout-vflex rt-counter-train"
								style="transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
							>
								<div class="rt-text-style-h1 counter-color-change">0</div>
							</div>
							<div
								class="w-layout-vflex rt-counter-train"
								style="transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
							>
								<div class="rt-text-style-h1 counter-color-change">1</div>
							</div>
						</div>
						<div class="w-layout-vflex rt-counter-block rt-margin">
							<div
								class="w-layout-vflex rt-counter-train"
								style="transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
							>
								<div class="rt-text-style-h1 counter-color-change">0</div>
								<div class="rt-text-style-h1 counter-color-change">1</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
							</div>
							<div
								class="w-layout-vflex rt-counter-train"
								style="transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
							>
								<div class="rt-text-style-h1 counter-color-change">4</div>
								<div class="rt-text-style-h1 counter-color-change">3</div>
								<div class="rt-text-style-h1 counter-color-change">4</div>
							</div>
						</div>
						<div class="w-layout-vflex rt-counter-block">
							<div
								class="w-layout-vflex rt-counter-train"
								style="transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
							>
								<div class="rt-text-style-h1 counter-color-change">0</div>
								<div class="rt-text-style-h1 counter-color-change">1</div>
							</div>
							<div
								class="w-layout-vflex rt-counter-train"
								style="transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
							>
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">1</div>
							</div>
						</div>
					</div>
					<div class="rt-text-style-h5 counter-color-chnage">New Features</div>
				</div>
				<div class="w-layout-vflex rt-achievement-box rt-border-remove-tab">
					<div
						data-w-id="73eb367f-86c6-0ebc-de7f-236ac5f86fab"
						class="w-layout-hflex rt-counter rt-overflow-hidden"
					>
						<div class="w-layout-vflex rt-counter-block rt-margin">
							<div
								class="w-layout-vflex rt-counter-train"
								style="transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
							>
								<div class="rt-text-style-h1 counter-color-change">0</div>
								<div class="rt-text-style-h1 counter-color-change">1</div>
							</div>
							<div
								class="w-layout-vflex rt-counter-train"
								style="transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
							>
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
							</div>
						</div>
						<div class="w-layout-vflex rt-counter-block">
							<div
								class="w-layout-vflex rt-counter-train"
								style="transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
							>
								<div class="rt-text-style-h1 counter-color-change">0</div>
								<div class="rt-text-style-h1 counter-color-change">1</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">3</div>
								<div class="rt-text-style-h1 counter-color-change">4</div>
								<div class="rt-text-style-h1 counter-color-change">5</div>
								<div class="rt-text-style-h1 counter-color-change">6</div>
								<div class="rt-text-style-h1 counter-color-change">7</div>
							</div>
							<div
								class="w-layout-vflex rt-counter-train"
								style="transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
							>
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
					<div class="rt-text-style-h5 counter-color-chnage">APP Download</div>
				</div>
				<div class="w-layout-vflex rt-achievement-box">
					<div
						data-w-id="73eb367f-86c6-0ebc-de7f-236ac5f86fdf"
						class="w-layout-hflex rt-counter rt-overflow-hidden"
					>
						<div class="w-layout-vflex rt-counter-block">
							<div
								class="w-layout-vflex rt-counter-train"
								style="transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
							>
								<div class="rt-text-style-h1 counter-color-change">0</div>
								<div class="rt-text-style-h1 counter-color-change">1</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">4</div>
							</div>
							<div
								class="w-layout-vflex rt-counter-train"
								style="transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
							>
								<div class="rt-text-style-h1 counter-color-change">5</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
							</div>
						</div>
						<div class="w-layout-vflex rt-counter-block">
							<div
								class="w-layout-vflex rt-counter-train"
								style="transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
							>
								<div class="rt-text-style-h1 counter-color-change">0</div>
								<div class="rt-text-style-h1 counter-color-change">1</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
							</div>
							<div
								class="w-layout-vflex rt-counter-train"
								style="transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
							>
								<div class="rt-text-style-h1 counter-color-change">3</div>
								<div class="rt-text-style-h1 counter-color-change">3</div>
								<div class="rt-text-style-h1 counter-color-change">4</div>
							</div>
						</div>
						<div class="rt-text-style-h1 counter-color-change">K</div>
					</div>
					<div class="rt-text-style-h5 counter-color-chnage">Happy Clients</div>
				</div>
				<div class="w-layout-vflex rt-achievement-box rt-border-remove">
					<div
						data-w-id="73eb367f-86c6-0ebc-de7f-236ac5f8700b"
						class="w-layout-hflex rt-counter rt-overflow-hidden"
					>
						<div class="w-layout-vflex rt-counter-block rt-margin">
							<div
								class="w-layout-vflex rt-counter-train"
								style="transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d; will-change: transform;"
							>
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
							<div
								class="w-layout-vflex rt-counter-train"
								style="transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d; will-change: transform;"
							>
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
							<div
								class="w-layout-vflex rt-counter-train"
								style="transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d; will-change: transform;"
							>
								<div class="rt-text-style-h1 counter-color-change">0</div>
								<div class="rt-text-style-h1 counter-color-change">1</div>
								<div class="rt-text-style-h1 counter-color-change">2</div>
								<div class="rt-text-style-h1 counter-color-change">3</div>
								<div class="rt-text-style-h1 counter-color-change">4</div>
								<div class="rt-text-style-h1 counter-color-change">5</div>
								<div class="rt-text-style-h1 counter-color-change">6</div>
								<div class="rt-text-style-h1 counter-color-change">7</div>
							</div>
							<div
								class="w-layout-vflex rt-counter-train"
								style="transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d; will-change: transform;"
							>
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
					<div class="rt-text-style-h5 counter-color-chnage">Positive rate</div>
				</div>
			</div>
		</div>
	</div>
	<div>
		<div class="rt-green-dot"></div>
		<div class="rt-dark-yellow-dot"></div>
		<div class="rt-dark-yellow-dot-two"></div>
		<div class="rt-violet-dot"></div>
		<div class="rt-violet-dot-two"></div>
	</div>
</section>
