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

<section class="rt-users-gallery">
	<div class="w-layout-blockcontainer rt-container-large w-container">
		<div class="rt-users-gallery-main">
			<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cef4" class="rt-users-gallery-wrapper">
				<div class="rt-users-gallery-layer"></div>
				<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cef6" class="rt-users-gallery-block one">
					<img
						width="62"
						height="54"
						alt={getText('client', 'Client')}
						src={getImage('image_1').url}
						loading="lazy"
						class="rt-users-gallery-icon"
					/>
				</div>
				<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cef8" class="rt-users-gallery-block two">
					<img
						width="70"
						height="70"
						alt={getText('capabilities_icon', 'Capabilities Icon')}
						src={getImage('image_2').url}
						loading="lazy"
						class="rt-users-gallery-icon"
					/>
				</div>
				<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cefa" class="rt-users-gallery-block three">
					<img
						width="70"
						height="70"
						alt={getText('capabilities_icon', 'Capabilities icon')}
						src={getImage('image_3').url}
						loading="lazy"
						class="rt-users-gallery-icon"
					/>
				</div>
				<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cefc" class="rt-users-gallery-block four">
					<img
						width="61"
						height="61"
						alt={getText('client', 'Client')}
						src={getImage('image_4').url}
						loading="lazy"
						class="rt-users-gallery-icon"
					/>
				</div>
				<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cefe" class="rt-users-gallery-block five">
					<img
						width="56"
						height="56"
						alt={getText('client', 'Client')}
						src={getImage('image_5').url}
						loading="lazy"
						class="rt-users-gallery-icon"
					/>
				</div>
				<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cf00" class="rt-users-gallery-block six">
					<img
						width="50"
						height="50"
						alt={getText('client', 'Client')}
						src={getImage('image_6').url}
						loading="lazy"
						class="rt-users-gallery-icon"
					/>
				</div>
				<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cf02" class="rt-users-gallery-block seven">
					<img
						width="54"
						height="54"
						alt={getText('client', 'Client')}
						src={getImage('image_7').url}
						loading="lazy"
						class="rt-users-gallery-icon"
					/>
				</div>
				<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cf04" class="rt-users-gallery-block eight">
					<img
						width="51"
						height="51"
						alt={getText('capabilities_icon', 'Capabilities Icon')}
						src={getImage('image_8').url}
						loading="lazy"
						class="rt-users-gallery-icon"
					/>
				</div>
				<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cf06" class="rt-users-gallery-block nine">
					<img
						width="63"
						height="56"
						alt={getText('capabilities_icon', 'Capabilities Icon')}
						src={getImage('image_9').url}
						loading="lazy"
						class="rt-users-gallery-icon"
					/>
				</div>
				<div data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cf08" class="rt-users-gallery-block ten">
					<img
						width="60"
						height="60"
						alt={getText('capabilities_icon', 'Capabilities Icon')}
						src={getImage('image_10').url}
						loading="lazy"
						class="rt-users-gallery-icon"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
