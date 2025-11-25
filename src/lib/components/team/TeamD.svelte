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

<section class="rt-testimonial-v1 rt-overflow-hidden">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="rt-testimonial-title-block">
			<div class="rt-desktop-text-center">
				<h2
					data-w-id="c369e5b1-25b6-292c-6d77-d14aed32e42d"
					class="rt-testimonial-title rt-gap-off rt-h2-gap"
				>{getText('section_heading', 'Testimonials that reflect our strong commitment')}</h2>
				<p data-w-id="c369e5b1-25b6-292c-6d77-d14aed32e42f" class="rt-testimonial-paragraph">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Suscipit viverra donec scelerisque tellus in vulputate. Cursus tempus congue faucibus faucibus dui feugiat sit.')}</p>
			</div>
		</div>
	</div>
	<div data-w-id="c369e5b1-25b6-292c-6d77-d14aed32e431" class="rt-position-relative">
		<div class="rt-testimonial-layer"></div>
		<div class="w-layout-hflex rt-testimonial-card-wrapper">
			<div class="w-layout-hflex rt-testimonial-card-train">
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febe8_User.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('david_k_kelly', 'David K. Kelly')}</div>
							<div class="rt-reviewer-designation">Robotics Engineer</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febea_User%2012.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('sophia_jackson', 'Sophia Jackson')}</div>
							<div class="rt-reviewer-designation">NLP Engineer</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febda_User%207.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">Shelli  Della</div>
							<div class="rt-reviewer-designation">Data Analyst</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_4').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febeb_User%2010.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('steven_rodriguez', 'Steven Rodriguez')}</div>
							<div class="rt-reviewer-designation">AI Researcher</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_5').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febd1_User%208.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">Maria  Carruthers</div>
							<div class="rt-reviewer-designation">Cloud Engineer</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_6').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febe9_User%209.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('john_puffer', 'John Puffer')}</div>
							<div class="rt-reviewer-designation">AI Specialist</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
			</div>
			<div class="w-layout-hflex rt-testimonial-card-train">
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febe8_User.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('david_k_kelly', 'David K. Kelly')}</div>
							<div class="rt-reviewer-designation">Robotics Engineer</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febea_User%2012.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('sophia_jackson', 'Sophia Jackson')}</div>
							<div class="rt-reviewer-designation">NLP Engineer</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febda_User%207.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">Shelli  Della</div>
							<div class="rt-reviewer-designation">Data Analyst</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_4').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febeb_User%2010.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('steven_rodriguez', 'Steven Rodriguez')}</div>
							<div class="rt-reviewer-designation">AI Researcher</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_5').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febd1_User%208.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">Maria  Carruthers</div>
							<div class="rt-reviewer-designation">Cloud Engineer</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_6').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febe9_User%209.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('john_puffer', 'John Puffer')}</div>
							<div class="rt-reviewer-designation">AI Specialist</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
			</div>
			<div class="w-layout-hflex rt-testimonial-card-train">
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febe8_User.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('david_k_kelly', 'David K. Kelly')}</div>
							<div class="rt-reviewer-designation">Robotics Engineer</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febea_User%2012.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('sophia_jackson', 'Sophia Jackson')}</div>
							<div class="rt-reviewer-designation">NLP Engineer</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febda_User%207.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">Shelli  Della</div>
							<div class="rt-reviewer-designation">Data Analyst</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_4').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febeb_User%2010.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('steven_rodriguez', 'Steven Rodriguez')}</div>
							<div class="rt-reviewer-designation">AI Researcher</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_5').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febd1_User%208.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">Maria  Carruthers</div>
							<div class="rt-reviewer-designation">Cloud Engineer</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_6').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febe9_User%209.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('john_puffer', 'John Puffer')}</div>
							<div class="rt-reviewer-designation">AI Specialist</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
			</div>
		</div>
		<div class="w-layout-hflex rt-testimonial-card-wrapper-two">
			<div class="w-layout-hflex rt-testimonial-card-train-two">
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febe8_User.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('david_k_kelly', 'David K. Kelly')}</div>
							<div class="rt-reviewer-designation">Robotics Engineer</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febea_User%2012.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('sophia_jackson', 'Sophia Jackson')}</div>
							<div class="rt-reviewer-designation">NLP Engineer</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febda_User%207.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">Shelli  Della</div>
							<div class="rt-reviewer-designation">Data Analyst</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_4').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febeb_User%2010.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('steven_rodriguez', 'Steven Rodriguez')}</div>
							<div class="rt-reviewer-designation">AI Researcher</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_5').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febd1_User%208.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">Maria  Carruthers</div>
							<div class="rt-reviewer-designation">Cloud Engineer</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_6').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febe9_User%209.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('john_puffer', 'John Puffer')}</div>
							<div class="rt-reviewer-designation">AI Specialist</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
			</div>
			<div class="w-layout-hflex rt-testimonial-card-train-two">
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febe8_User.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('david_k_kelly', 'David K. Kelly')}</div>
							<div class="rt-reviewer-designation">Robotics Engineer</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febea_User%2012.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('sophia_jackson', 'Sophia Jackson')}</div>
							<div class="rt-reviewer-designation">NLP Engineer</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febda_User%207.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">Shelli  Della</div>
							<div class="rt-reviewer-designation">Data Analyst</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_4').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febeb_User%2010.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('steven_rodriguez', 'Steven Rodriguez')}</div>
							<div class="rt-reviewer-designation">AI Researcher</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_5').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febd1_User%208.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">Maria  Carruthers</div>
							<div class="rt-reviewer-designation">Cloud Engineer</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_6').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febe9_User%209.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('john_puffer', 'John Puffer')}</div>
							<div class="rt-reviewer-designation">AI Specialist</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
			</div>
			<div class="w-layout-hflex rt-testimonial-card-train-two">
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febe8_User.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('david_k_kelly', 'David K. Kelly')}</div>
							<div class="rt-reviewer-designation">Robotics Engineer</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febea_User%2012.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('sophia_jackson', 'Sophia Jackson')}</div>
							<div class="rt-reviewer-designation">NLP Engineer</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febda_User%207.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">Shelli  Della</div>
							<div class="rt-reviewer-designation">Data Analyst</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_4').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febeb_User%2010.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('steven_rodriguez', 'Steven Rodriguez')}</div>
							<div class="rt-reviewer-designation">AI Researcher</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_5').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febd1_User%208.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">Maria  Carruthers</div>
							<div class="rt-reviewer-designation">Cloud Engineer</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
				<div class="rt-testimonial-card-v1">
					<div class="w-layout-hflex rt-reviewer-details-block">
						<img
							width="72"
							height="72"
							alt={getText('user', 'User 2')}
							src={getImage('image_6').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febe9_User%209.webp'}
							loading="lazy"
							class="rt-reviewer-image"
						/>
						<div class="w-layout-vflex rt-reviewer-details">
							<div class="rt-text-style-h6">{getText('john_puffer', 'John Puffer')}</div>
							<div class="rt-reviewer-designation">AI Specialist</div>
						</div>
					</div>
					<p class="rt-reviewer-text">{getText('lorem_ipsum_dolor_sit', '“Lorem ipsum dolor sit amet consectetur. Imperdiet elit lacus ultrices sed porta tincidunt lectus. Viverra elementum nunc molestie diam massa dignissim eu erat libero”.')}</p>
				</div>
			</div>
		</div>
	</div>
</section>
