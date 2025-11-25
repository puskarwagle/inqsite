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

<section class="rt-our-branches">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-vflex rt-branch-details">
			<div class="rt-branch-top-header">
				<h2 data-w-id="cbacd7a6-1db3-3668-2b7a-cd57bb206df6" class="rt-gap-off">{getText('section_heading', 'Discover our branch offices globally and connect instantly')}</h2>
			</div>
			<div class="w-layout-grid rt-branch-card-wrapper">
				<div data-w-id="cbacd7a6-1db3-3668-2b7a-cd57bb206df9" class="w-layout-vflex rt-branch-card">
					<div class="rt-overflow-hidden rt-image-radious">
						<img
							class="rt-branch-image rt-autofit rt-tab-full-image"
							src={getImage('image_1').url}
							width="300"
							height="310"
							alt="ContactB"
							sizes="(max-width: 479px) 100vw, 300px"
							data-w-id="cbacd7a6-1db3-3668-2b7a-cd57bb206dfa"
							loading="lazy"
						/>
					</div>
					<div class="w-layout-vflex rt-branches-details">
						<div class="rt-text-style-h5">{getText('calfornia', 'Calfornia')}</div>
						<p class="rt-branch-address-width rt-gap-off">
							1234 Innovation Blvd, Suite 200  San Mateo, CA 94403, USA
						</p>
					</div>
				</div>
				<div data-w-id="cbacd7a6-1db3-3668-2b7a-cd57bb206e00" class="w-layout-vflex rt-branch-card">
					<div class="rt-overflow-hidden rt-image-radious">
						<img
							class="rt-branch-image rt-autofit rt-tab-full-image"
							src={getImage('image_2').url}
							width="300"
							height="310"
							alt="ContactB"
							sizes="(max-width: 479px) 100vw, 300px"
							data-w-id="cbacd7a6-1db3-3668-2b7a-cd57bb206e01"
							loading="lazy"
						/>
					</div>
					<div class="w-layout-vflex rt-branches-details rt-resize">
						<div class="rt-text-style-h5">{getText('germany', 'Germany')}</div>
						<p class="rt-branch-address-width-two rt-gap-off">{getText('alexanderplatz_510178_berlin', 'Alexanderplatz 510178 Berlin')}</p>
					</div>
				</div>
				<div data-w-id="cbacd7a6-1db3-3668-2b7a-cd57bb206e07" class="w-layout-vflex rt-branch-card">
					<div class="rt-overflow-hidden rt-image-radious">
						<img
							class="rt-branch-image rt-autofit rt-tab-full-image"
							src={getImage('image_3').url}
							width="300"
							height="310"
							alt="ContactB"
							sizes="(max-width: 479px) 100vw, 300px"
							data-w-id="cbacd7a6-1db3-3668-2b7a-cd57bb206e08"
							loading="lazy"
						/>
					</div>
					<div class="w-layout-vflex rt-branches-details">
						<div class="rt-text-style-h5">{getText('australia', 'Australia')}</div>
						<p class="rt-gap-off">{getText('123_example_street', '123 Example Street, Sydney NSW 2000, Australia')}</p>
					</div>
				</div>
				<div data-w-id="cbacd7a6-1db3-3668-2b7a-cd57bb206e0e" class="w-layout-vflex rt-branch-card">
					<div class="rt-overflow-hidden rt-image-radious">
						<img
							class="rt-branch-image rt-autofit rt-tab-full-image"
							src={getImage('image_4').url}
							width="300"
							height="310"
							alt="ContactB"
							sizes="(max-width: 479px) 100vw, 300px"
							data-w-id="cbacd7a6-1db3-3668-2b7a-cd57bb206e0f"
							loading="lazy"
						/>
					</div>
					<div class="w-layout-vflex rt-branches-details">
						<div class="rt-text-style-h5">{getText('canada', 'Canada')}</div>
						<p class="rt-gap-off">{getText('1234_maple_avenue', '1234 Maple Avenue, Suite 567, Toronto, ON M5H 2N2 Canada')}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
