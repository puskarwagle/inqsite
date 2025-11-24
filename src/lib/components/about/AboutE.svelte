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

<section class="rt-industries">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-hflex rt-industries-main-box-wrap">
			<div class="w-layout-vflex rt-industries-text-box-wrap">
				<div class="w-layout-vflex rt-industries-text">
					<h2 data-w-id="4721e793-9498-9902-6f2c-10a09ced4b8a" class="rt-gap-off rt-h2-gap">{getText('section_heading', 'Revolutionizing Industries with AI Intelligence')}</h2>
					<p data-w-id="4721e793-9498-9902-6f2c-10a09ced4b8c">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis velit sed
						sollicitudin semper. Donec mattis pulvinar quam
					</p>
				</div>
				<div class="w-layout-vflex rt-industries-small-box-wrapper">
					<div
						data-w-id="4721e793-9498-9902-6f2c-10a09ced4b8f"
						class="w-layout-hflex rt-industries-small-box active"
					>
						<div class="w-layout-hflex rt-icon-block-v2 active rt-margin">
							<img
								src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805e329842d2aaa810039b9_Group%201321315407.svg'}
								loading="lazy"
								width="27"
								height="27"
								alt="Intelligence Icon"
							/>
						</div>
						<div class="w-layout-vflex rt-industries-text-block">
							<div class="rt-text-style-h6">{getText('simpler_process', 'Simpler Process')}</div>
							<p>{getText('lorem_ipsum_dolor', 'Lorem ipsum dolor sit amet consectetur.')}</p>
						</div>
					</div>
					<div
						data-w-id="4721e793-9498-9902-6f2c-10a09ced4b97"
						class="w-layout-hflex rt-industries-small-box"
					>
						<div class="w-layout-hflex rt-icon-block-v2 rt-margin">
							<img
								src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805e328940cc8c6e304689d_Group%201321315408.svg'}
								loading="lazy"
								width="24"
								height="22"
								alt="Intelligence Icon"
							/>
						</div>
						<div class="w-layout-vflex rt-industries-text-block">
							<div class="rt-text-style-h6">{getText('previous_documentation', 'Previous Documentation')}</div>
							<p>{getText('lorem_ipsum_dolor', 'Lorem ipsum dolor sit amet consectetur.')}</p>
						</div>
					</div>
					<div
						data-w-id="4721e793-9498-9902-6f2c-10a09ced4b9f"
						class="w-layout-hflex rt-industries-small-box"
					>
						<div class="w-layout-hflex rt-icon-block-v2 rt-margin">
							<img
								src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805e328704c4d4313d87c52_Group%201321315409.svg'}
								loading="lazy"
								width="26"
								height="26"
								alt="Intelligence Icon"
							/>
						</div>
						<div class="w-layout-vflex rt-industries-text-block">
							<div class="rt-text-style-h6">{getText('ai_powered_building', 'AI Powered Building')}</div>
							<p>{getText('lorem_ipsum_dolor', 'Lorem ipsum dolor sit amet consectetur.')}</p>
						</div>
					</div>
				</div>
			</div>
			<div
				data-w-id="4721e793-9498-9902-6f2c-10a09ced4ba7"
				class="w-layout-hflex rt-industries-image-box-wrap rt-position-relative"
			>
				<img
					src={getImage('image_4').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805cac0f7bc963f0394fa8e_1.webp'}
					loading="lazy"
					width="716"
					height="525"
					alt="Chat"
					srcset="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805cac0f7bc963f0394fa8e_1-p-500.webp 500w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805cac0f7bc963f0394fa8e_1-p-800.webp 800w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805cac0f7bc963f0394fa8e_1-p-1080.webp 1080w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805cac0f7bc963f0394fa8e_1.webp 1448w"
					sizes="(max-width: 767px) 100vw, 716px"
					class="rt-industries-image rt-tab-full-image"
				/><img
					class="rt-industries-image rt-tab-full-image two"
					src={getImage('image_5').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805cac0b65a027dddf454e3_2.webp'}
					width="716"
					height="525"
					alt="Chat"
					sizes="(max-width: 767px) 100vw, 716px"
					data-w-id="7cd4024f-9652-dbc0-c413-9f9eab23de74"
					loading="lazy"
					srcset="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805cac0b65a027dddf454e3_2-p-500.webp 500w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805cac0b65a027dddf454e3_2-p-800.webp 800w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805cac0b65a027dddf454e3_2-p-1080.webp 1080w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805cac0b65a027dddf454e3_2.webp 1454w"
				/><img
					class="rt-industries-image rt-tab-full-image three"
					src={getImage('image_6').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805cac0ac7691cd07eded11_3.webp'}
					width="716"
					height="525"
					alt="Chat"
					sizes="(max-width: 767px) 100vw, 716px"
					data-w-id="0cca7acf-7d4c-5a55-0474-09de0342f994"
					loading="lazy"
					srcset="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805cac0ac7691cd07eded11_3-p-500.webp 500w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805cac0ac7691cd07eded11_3-p-800.webp 800w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805cac0ac7691cd07eded11_3-p-1080.webp 1080w, https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805cac0ac7691cd07eded11_3.webp 1432w"
				/>
			</div>
		</div>
	</div>
</section>
