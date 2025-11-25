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

<section class="rt-revolution-v3">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-hflex rt-revolution-content-v3">
			<div class="w-layout-vflex rt-revolution-image-wrapper-v3 rt-position-relative">
				<div class="rt-revolution-image-one-block-v3 rt-overflow-hidden">
					<img
						class="rt-revolution-image-one-v3"
						src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805d302f3bd2444df9a4936_Industries%20dashboard.webp"
						width="590"
						height="420"
						alt={getText('industries_dashboard', 'Industries Dashboard')}
						sizes="(max-width: 767px) 100vw, 590px"
						data-w-id="b1df3202-e056-36f7-b9dc-7f9b02f8b581"
						loading="lazy"
						srcset="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805d302f3bd2444df9a4936_Industries%20dashboard-p-500.webp 500w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805d302f3bd2444df9a4936_Industries%20dashboard-p-800.webp 800w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805d302f3bd2444df9a4936_Industries%20dashboard-p-1080.webp 1080w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805d302f3bd2444df9a4936_Industries%20dashboard.webp 1182w"
					/>
				</div>
				<div class="rt-revolution-image-two-v3">
					<img
						class="rt-autofit"
						src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a816d_Revolution%203.webp"
						width="287"
						height="162"
						alt={getText('revolution', 'Revolution')}
						sizes="(max-width: 479px) 100vw, 287px"
						data-w-id="b1df3202-e056-36f7-b9dc-7f9b02f8b582"
						loading="lazy"
						srcset="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a816d_Revolution%25203-p-500.webp 500w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a816d_Revolution%25203-p-800.webp 800w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67e2a165f3cea78a742a816d_Revolution%203.webp 822w"
					/>
				</div>
			</div>
			<div class="w-layout-vflex rt-revolution-text-wrapper-v3">
				<div class="w-layout-vflex rt-revolution-text-v3">
					<h2 data-w-id="b1df3202-e056-36f7-b9dc-7f9b02f8b585" class="rt-gap-off rt-h2-gap">
						{getText('section_heading', 'Revolutionizing Industries with AI Intelligence')}
					</h2>
					<p data-w-id="b1df3202-e056-36f7-b9dc-7f9b02f8b587" class="rt-revolution-paragraph-v3">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis velit sed sollicitudin semper. Donec mattis pulvinar quam')}</p>
				</div>
				<div class="w-layout-vflex rt-revolution-box-wrapper-v3">
					<div
						data-w-id="b1df3202-e056-36f7-b9dc-7f9b02f8b58a"
						class="w-layout-hflex rt-revolution-box-v3"
					>
						<img
							width="24"
							height="24"
							alt={getText('tick', 'Tick')}
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
							loading="lazy"
							class="rt-revolution-box-icon-v3"
						/>
						<div class="w-layout-vflex rt-revolution-box-text-wrapper-v3">
							<div class="rt-text-style-h5">{getText('machine_learning_edge_heading', 'Machine Learning Edge')}</div>
							<p>
								{getText('machine_learning_edge_description', 'Proin consectetur risus quis euismod ultricies. Maecenas a auctor magna eu efficitur leo risus dapibus facilisis.')}
							</p>
						</div>
					</div>
					<div
						data-w-id="b1df3202-e056-36f7-b9dc-7f9b02f8b591"
						class="w-layout-hflex rt-revolution-box-v3"
					>
						<img
							width="24"
							height="24"
							alt={getText('tick', 'Tick')}
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7cf_Full%20black%20tick.svg"
							loading="lazy"
							class="rt-revolution-box-icon-v3"
						/>
						<div class="w-layout-vflex rt-revolution-box-text-wrapper-v3">
							<div class="rt-text-style-h5">{getText('ai_powered_innovation_heading', 'AI-Powered Innovation')}</div>
							<p>
								{getText('ai_powered_innovation_description', 'Proin consectetur risus quis euismod ultricies. Maecenas a auctor magna eu efficitur leo risus dapibus facilisis.')}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
