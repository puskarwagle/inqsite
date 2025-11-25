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

<section class="rt-testimonial-v2">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div>
			<div class="rt-testimonial-title-text-v2 rt-desktop-text-center">
				<h2
					data-w-id="a48be4d0-1e22-846f-ee09-2ffc09d25f0a"
					class="rt-testimonial-top-title rt-gap-off rt-h2-gap"
				>{getText('section_heading', 'Testimonials that reflect our strong commitment')}</h2>
				<p data-w-id="a48be4d0-1e22-846f-ee09-2ffc09d25f0c" class="rt-testimonial-paragraph-v2">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Suscipit viverra donec scelerisque tellus in vulputate. Cursus tempus congue faucibus faucibus dui feugiat sit.')}</p>
			</div>
			<div class="rt-overflow-hidden">
				<div
					data-w-id="a48be4d0-1e22-846f-ee09-2ffc09d25f0f"
					class="w-layout-hflex rt-testimonial-card-wrapper-v2"
				>
					<div class="w-layout-hflex rt-testimonial-card-marquee-block">
						<div class="rt-testimonial-card-wrapper-v3">
							<div class="w-layout-vflex rt-testimonial-card-v2 rt-color-cream">
								<img
									loading="lazy"
									src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd503cbd7e331b5952c1be_icon%20section.svg'}
									alt={getText('quote_icon', 'Quote icon')}
								/>
								<p class="rt-testimonial-card-paragraph-v2">
									“Aenean euismod cursus velit ut sollicitud. Maecna molestie nisl semper accumsanva
									rius justo grafevida dolor a viverra mi nulla at arcu phasellus in orci efficit.”
								</p>
								<div class="w-layout-hflex rt-testimonial-card-user-v2">
									<img
										width="60"
										height="60"
										alt={getText('reviewer', 'Reviewer')}
										src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd46958348c1c7eb22e017_User%201.jpg'}
										loading="lazy"
										class="rt-testimonial-card-user-image rt-autofit"
									/>
									<div class="w-layout-vflex rt-testimonial-card-user-detail-v2">
										<div class="rt-text-style-h6">{getText('james_carter', 'James Carter')}</div>
										<div class="rt-testimonial-card-user-post-v2">Network Engineer</div>
									</div>
								</div>
							</div>
						</div>
						<div class="rt-testimonial-card-wrapper-v3">
							<div class="w-layout-vflex rt-testimonial-card-v2 rt-color-light-blue">
								<img
									loading="lazy"
									src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd503cbd7e331b5952c1be_icon%20section.svg'}
									alt={getText('quote_icon', 'Quote icon')}
								/>
								<p class="rt-testimonial-card-paragraph-v2">
									“Aenean euismod cursus velit ut sollicitud. Maecna molestie nisl semper accumsanva
									rius justo grafevida dolor a viverra mi nulla at arcu phasellus in orci efficit.”
								</p>
								<div class="w-layout-hflex rt-testimonial-card-user-v2">
									<img
										width="60"
										height="60"
										alt={getText('reviewer', 'Reviewer')}
										src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd46958348c1c7eb22e039_User%202.webp'}
										loading="lazy"
										class="rt-testimonial-card-user-image rt-autofit"
									/>
									<div class="w-layout-vflex rt-testimonial-card-user-detail-v2">
										<div class="rt-text-style-h6">{getText('emily_johnson', 'Emily Johnson')}</div>
										<div class="rt-testimonial-card-user-post-v2">UX Researcher</div>
									</div>
								</div>
							</div>
						</div>
						<div class="rt-testimonial-card-wrapper-v3">
							<div class="w-layout-vflex rt-testimonial-card-v2 rt-color-light-pink">
								<img
									loading="lazy"
									src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd503cbd7e331b5952c1be_icon%20section.svg'}
									alt={getText('quote_icon', 'Quote icon')}
								/>
								<p class="rt-testimonial-card-paragraph-v2">
									“Aenean euismod cursus velit ut sollicitud. Maecna molestie nisl semper accumsanva
									rius justo grafevida dolor a viverra mi nulla at arcu phasellus in orci efficit.”
								</p>
								<div class="w-layout-hflex rt-testimonial-card-user-v2">
									<img
										width="60"
										height="60"
										alt={getText('reviewer', 'Reviewer')}
										src={getImage('image_4').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd46958348c1c7eb22e038_User%203.webp'}
										loading="lazy"
										class="rt-testimonial-card-user-image rt-autofit"
									/>
									<div class="w-layout-vflex rt-testimonial-card-user-detail-v2">
										<div class="rt-text-style-h6">{getText('robert_turner', 'Robert Turner')}</div>
										<div class="rt-testimonial-card-user-post-v2">Cybersecurity Analyst</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="w-layout-hflex rt-testimonial-card-marquee-block">
						<div class="rt-testimonial-card-wrapper-v3">
							<div class="w-layout-vflex rt-testimonial-card-v2 rt-color-cream">
								<img
									loading="lazy"
									src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd503cbd7e331b5952c1be_icon%20section.svg'}
									alt={getText('quote_icon', 'Quote icon')}
								/>
								<p class="rt-testimonial-card-paragraph-v2">
									“Aenean euismod cursus velit ut sollicitud. Maecna molestie nisl semper accumsanva
									rius justo grafevida dolor a viverra mi nulla at arcu phasellus in orci efficit.”
								</p>
								<div class="w-layout-hflex rt-testimonial-card-user-v2">
									<img
										width="60"
										height="60"
										alt={getText('reviewer', 'Reviewer')}
										src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd46958348c1c7eb22e017_User%201.jpg'}
										loading="lazy"
										class="rt-testimonial-card-user-image rt-autofit"
									/>
									<div class="w-layout-vflex rt-testimonial-card-user-detail-v2">
										<div class="rt-text-style-h6">{getText('james_carter', 'James Carter')}</div>
										<div class="rt-testimonial-card-user-post-v2">Network Engineer</div>
									</div>
								</div>
							</div>
						</div>
						<div class="rt-testimonial-card-wrapper-v3">
							<div class="w-layout-vflex rt-testimonial-card-v2 rt-color-light-blue">
								<img
									loading="lazy"
									src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd503cbd7e331b5952c1be_icon%20section.svg'}
									alt={getText('quote_icon', 'Quote icon')}
								/>
								<p class="rt-testimonial-card-paragraph-v2">
									“Aenean euismod cursus velit ut sollicitud. Maecna molestie nisl semper accumsanva
									rius justo grafevida dolor a viverra mi nulla at arcu phasellus in orci efficit.”
								</p>
								<div class="w-layout-hflex rt-testimonial-card-user-v2">
									<img
										width="60"
										height="60"
										alt={getText('reviewer', 'Reviewer')}
										src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd46958348c1c7eb22e039_User%202.webp'}
										loading="lazy"
										class="rt-testimonial-card-user-image rt-autofit"
									/>
									<div class="w-layout-vflex rt-testimonial-card-user-detail-v2">
										<div class="rt-text-style-h6">{getText('emily_johnson', 'Emily Johnson')}</div>
										<div class="rt-testimonial-card-user-post-v2">UX Researcher</div>
									</div>
								</div>
							</div>
						</div>
						<div class="rt-testimonial-card-wrapper-v3">
							<div class="w-layout-vflex rt-testimonial-card-v2 rt-color-light-pink">
								<img
									loading="lazy"
									src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd503cbd7e331b5952c1be_icon%20section.svg'}
									alt={getText('quote_icon', 'Quote icon')}
								/>
								<p class="rt-testimonial-card-paragraph-v2">
									“Aenean euismod cursus velit ut sollicitud. Maecna molestie nisl semper accumsanva
									rius justo grafevida dolor a viverra mi nulla at arcu phasellus in orci efficit.”
								</p>
								<div class="w-layout-hflex rt-testimonial-card-user-v2">
									<img
										width="60"
										height="60"
										alt={getText('reviewer', 'Reviewer')}
										src={getImage('image_4').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd46958348c1c7eb22e038_User%203.webp'}
										loading="lazy"
										class="rt-testimonial-card-user-image rt-autofit"
									/>
									<div class="w-layout-vflex rt-testimonial-card-user-detail-v2">
										<div class="rt-text-style-h6">{getText('robert_turner', 'Robert Turner')}</div>
										<div class="rt-testimonial-card-user-post-v2">Cybersecurity Analyst</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
