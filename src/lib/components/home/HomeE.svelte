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

<section class="rt-ai-problems-v1">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-hflex rt-ai-problem-wrapper rt-change">
			<div class="w-layout-vflex rt-ai-problem-image-block">
				<div
					data-w-id="965b533d-b585-1bc0-23a7-8e4fcb06bfd4"
					class="rt-ai-problem-small-image rt-drop-shadow rt-overflow-hidden"
					style=""
				>
					<img
						width="172"
						height="181"
						alt={getText('performance_statistics', 'Performance Statistics')}
						src={getImage('image_1').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf92607c68ccfe6dff095_Performance-stat.webp'}
						loading="lazy"
						data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0fc5"
						class="rt-autofit rt-image-full-width"
					/>
				</div>
				<div
					data-w-id="3d26e481-28a5-cad9-5e4e-cc47505b6d40"
					class="rt-ai-problem-main-image rt-drop-shadow"
					style=""
				>
					<img
						class="rt-autofit rt-radious-fifteen rt-tab-full-image"
						src={getImage('image_2').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/6800841c90fb84230c9c4728_Complex.webp'}
						width="630"
						height="444"
						alt={getText('complex', 'Complex')}
						sizes="(max-width: 767px) 100vw, 630px"
						data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0fc4"
						loading="lazy"
						srcset="
                  https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/6800841c90fb84230c9c4728_Complex-p-500.webp   500w,
                  https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/6800841c90fb84230c9c4728_Complex-p-800.webp   800w,
                  https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/6800841c90fb84230c9c4728_Complex-p-1080.webp 1080w,
                  https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/6800841c90fb84230c9c4728_Complex.webp        1254w
                "
					/>
				</div>
			</div>
			<div class="w-layout-vflex rt-ai-problem-text-wrapper">
				<div
					data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0fc7"
					class="w-layout-vflex rt-ai-problem-text"
					style=""
				>
					<h2 class="rt-gap-off rt-h2-gap">{getText('section_heading', 'AI That Simplifies Complex Problems Instantly')}</h2>
					<p class="rt-ai-problem-paragraph rt-gap-off rt-h2-paragraph-gap">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur adipiscing elit In et sapien vitae augue lobortis tincidunt Sed sollicitudin nec velit in accumsan. Etiam non urna rutrum, tincidunt diam')}</p>
				</div>
				<div class="w-layout-hflex rt-problem-point-block">
					<div
						data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0fcd"
						class="rt-problem-block-one"
						style=""
					>
						<div class="w-layout-hflex rt-problem-small-title-one">
							<div class="w-layout-hflex rt-ai-problem-icon rt-overflow-hidden">
								<img
									width="33"
									height="33"
									alt={getText('tech', 'Tech')}
									src={getImage('image_3').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/6805e0a15665bac885966e7d_chat-messages.svg'}
									loading="lazy"
								/>
							</div>
							<div class="rt-text-style-h5">{getText('automated_ai_conversations', 'Automated AI Conversations')}</div>
						</div>
						<p>{getText('sit_et_donec', 'Sit et donec nunc odio im sum platea integer cursus.')}</p>
					</div>
					<div
						data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0fd5"
						class="rt-problem-block-one"
						style=""
					>
						<div class="w-layout-hflex rt-problem-small-title-one">
							<div class="w-layout-hflex rt-ai-problem-icon rt-overflow-hidden">
								<img
									width="33"
									height="33"
									alt={getText('tech', 'Tech')}
									src={getImage('image_4').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/6805e0a1d0576dff0ddb1030_Group%201321315622.svg'}
									loading="lazy"
								/>
							</div>
							<div class="rt-text-style-h5">{getText('aitohuman_interaction', 'AI-to-Human Interaction')}</div>
						</div>
						<p>{getText('augue_aliquam_volutpat', 'Augue aliquam volutpat dui dolor purus miet nam atnam.')}</p>
					</div>
				</div>
				<div
					data-w-id="e0a8f063-0a46-3e02-55a6-47cb858b0fdd"
					class="w-layout-hflex rt-button-block"
					style=""
				>
					<a
						data-wf--rt-button-v1--variant="base"
						data-w-id="aa6e688e-e49c-e80a-016f-32f06f481539"
						href="/service-one"
						class="rt-button w-inline-block"
						><div class="w-layout-hflex rt-button-text-image-wrapper">
							<div class="w-layout-hflex rt-button-text-wrap">
								<div class="rt-button-text rt-button-hover-in" style="">{getText('explore_more', 'Explore More')}</div>
								<div class="rt-button-text rt-button-hover-out" style="">{getText('explore_more', 'Explore More')}</div>
							</div>
							<img
								width="10"
								height="9"
								alt={getText('arrow', 'Arrow')}
								src={getImage('image_5').url || 'https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg'}
								loading="lazy"
								class="rt-button-arrow-image"
							/>
						</div></a
					>
				</div>
			</div>
		</div>
	</div>
</section>
