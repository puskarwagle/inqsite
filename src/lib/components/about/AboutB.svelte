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
	data-w-id="d8cc0c89-5611-467c-7b0c-409b05d85a56"
	class="rt-business-operation-v2 rt-overflow-hidden"
>
	<div class="rt-business-operation-content">
		<div class="w-layout-blockcontainer rt-container-small w-container">
			<div class="w-layout-hflex rt-business-operation-text-block-v2">
				<h2
					data-w-id="d8cc0c89-5611-467c-7b0c-409b05d85a5a"
					class="rt-business-operation-text rt-gap-off"
				>{getText('section_heading', 'AI-Powered Automation for Seamless Business Operations')}</h2>
			</div>
		</div>
		<div class="w-layout-blockcontainer rt-container-small w-container">
			<div class="rt-business-operation-card-wrapper">
				<div class="w-layout-hflex rt-business-operation-card-block">
					<div class="w-layout-vflex rt-business-operation-card">
						<div
							class="w-layout-hflex rt-business-operation-image-block rt-overflow-hidden rt-color-light-blue"
						>
							<img
								width="276"
								height="194"
								alt="AboutB"
								src={getImage('image_1').url}
								loading="lazy"
								sizes="(max-width: 479px) 100vw, 276px"
								class="rt-business-operation-image rt-autofit"
							/>
						</div>
						<div class="w-layout-vflex rt-business-operation-text-wrapper">
							<div class="rt-text-style-h5">{getText('ai_that_adapts', 'AI That Adapts to Your Needs')}</div>
							<p>{getText('voluptas_assumenda_est', 'Voluptas assumenda est, omnis dolor Temporibus autem quibusdam')}</p>
						</div>
					</div>
					<div class="w-layout-vflex rt-business-operation-card">
						<div
							class="w-layout-hflex rt-business-operation-image-block rt-overflow-hidden rt-color-cream"
						>
							<img
								width="276"
								height="194"
								alt="AboutB"
								src={getImage('image_2').url}
								loading="lazy"
								sizes="(max-width: 479px) 100vw, 276px"
								class="rt-business-operation-image rt-autofit"
							/>
						</div>
						<div class="w-layout-vflex rt-business-operation-text-wrapper">
							<div class="rt-text-style-h5">{getText('the_future_is', 'The Future is AI-Powered')}</div>
							<p>{getText('voluptas_assumenda_est', 'Voluptas assumenda est, omnis dolor Temporibus autem quibusdam')}</p>
						</div>
					</div>
					<div class="w-layout-vflex rt-business-operation-card">
						<div
							class="w-layout-hflex rt-business-operation-image-block-two rt-overflow-hidden rt-color-light-blue"
						>
							<img
								width="276"
								height="194"
								alt="AboutB"
								src={getImage('image_3').url}
								loading="lazy"
								sizes="(max-width: 479px) 100vw, 276px"
								class="rt-business-operation-image-two rt-autofit"
							/>
						</div>
						<div class="w-layout-vflex rt-business-operation-text-wrapper">
							<div class="rt-text-style-h5">{getText('leading_the_ai', 'Leading the AI Revolution')}</div>
							<p>{getText('voluptas_assumenda_est', 'Voluptas assumenda est, omnis dolor Temporibus autem quibusdam')}</p>
						</div>
					</div>
					<div class="w-layout-vflex rt-business-operation-card">
						<div
							class="w-layout-hflex rt-business-operation-image-block rt-overflow-hidden rt-color-cream"
						>
							<img
								width="276"
								height="194"
								alt="AboutB"
								src={getImage('image_4').url}
								loading="lazy"
								sizes="(max-width: 479px) 100vw, 276px"
								class="rt-business-operation-image rt-autofit"
							/>
						</div>
						<div class="w-layout-vflex rt-business-operation-text-wrapper">
							<div class="rt-text-style-h5">{getText('ai_that_moves', 'AI That Moves the World Forward')}</div>
							<p>{getText('voluptas_assumenda_est', 'Voluptas assumenda est, omnis dolor Temporibus autem quibusdam')}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
