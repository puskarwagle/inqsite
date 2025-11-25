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

<section class="rt-transform-solution">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-vflex rt-transform-top-title rt-desktop-text-center">
			<h2 data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cdd3" class="rt-gap-off rt-h2-gap">{getText('section_heading', 'AI-Powered Solutions to Transform Your Industry')}</h2>
			<p
				data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cdd5"
				class="rt-transform-top-paragraph rt-gap-off rt-h2-paragraph-gap"
			>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Suscipit viverra donec scelerisque tellus in vulputate. Cursus tempus congue faucibus faucibus dui feugiat sit.')}</p>
		</div>
		<div class="w-layout-vflex rt-transform-card-wrapper">
			<div class="w-layout-hflex rt-transform-card-block">
				<div
					data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cdd9"
					class="w-layout-hflex rt-transform-card rt-radious-fifteen rt-color-light-pink"
				>
					<div class="w-layout-hflex rt-icon-block rt-overflow-hidden">
						<img
							width="25"
							height="25"
							alt="HomeTwoC"
							src={getImage('image_1').url}
							loading="lazy"
						/>
					</div>
					<div class="w-layout-vflex rt-transform-card-text">
						<div class="rt-text-style-h5">{getText('the_ai_revolution', 'The AI Revolution')}</div>
						<p>{getText('voluptas_assumenda_est', 'Voluptas assumenda est, omnis dolor Temporibus autem.')}</p>
					</div>
				</div>
				<div
					data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cde1"
					class="w-layout-hflex rt-transform-card rt-radious-fifteen rt-color-light-blue"
				>
					<div class="w-layout-hflex rt-icon-block rt-overflow-hidden">
						<img
							width="25"
							height="25"
							alt="HomeTwoC"
							src={getImage('image_2').url}
							loading="lazy"
						/>
					</div>
					<div class="w-layout-vflex rt-transform-card-text">
						<div class="rt-text-style-h5">{getText('smart_ai_solutions', 'Smart AI Solutions')}</div>
						<p>{getText('voluptas_assumenda_est', 'Voluptas assumenda est, omnis dolor Temporibus autem.')}</p>
					</div>
				</div>
			</div>
			<div class="w-layout-hflex rt-transform-card-block">
				<div
					data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cdea"
					class="w-layout-hflex rt-transform-card rt-radious-fifteen rt-color-light-green"
				>
					<div class="w-layout-hflex rt-icon-block rt-overflow-hidden">
						<img
							width="33"
							height="28"
							alt="HomeTwoC"
							src={getImage('image_3').url}
							loading="lazy"
						/>
					</div>
					<div class="w-layout-vflex rt-transform-card-text">
						<div class="rt-text-style-h5">{getText('cloud_approach', 'Cloud Approach')}</div>
						<p>{getText('voluptas_assumenda_est', 'Voluptas assumenda est, omnis dolor Temporibus autem.')}</p>
					</div>
				</div>
				<div
					data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cdf2"
					class="w-layout-hflex rt-transform-card rt-radious-fifteen rt-color-cream"
				>
					<div class="w-layout-hflex rt-icon-block rt-overflow-hidden">
						<img
							width="31"
							height="31"
							alt="HomeTwoC"
							src={getImage('image_4').url}
							loading="lazy"
						/>
					</div>
					<div class="w-layout-vflex rt-transform-card-text">
						<div class="rt-text-style-h5">{getText('powering_ai_evolution', 'Powering AI Evolution')}</div>
						<p>{getText('voluptas_assumenda_est', 'Voluptas assumenda est, omnis dolor Temporibus autem.')}</p>
					</div>
				</div>
				<div
					data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cdfa"
					class="w-layout-hflex rt-transform-card rt-radious-fifteen rt-color-colud-mist"
				>
					<div class="w-layout-hflex rt-icon-block rt-overflow-hidden">
						<img
							width="29"
							height="29"
							alt="HomeTwoC"
							src={getImage('image_5').url}
							loading="lazy"
						/>
					</div>
					<div class="w-layout-vflex rt-transform-card-text">
						<div class="rt-text-style-h5">{getText('security_solution', 'Security Solution')}</div>
						<p>{getText('voluptas_assumenda_est', 'Voluptas assumenda est, omnis dolor Temporibus autem.')}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
