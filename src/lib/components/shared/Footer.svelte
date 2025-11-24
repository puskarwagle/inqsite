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

<section data-wf--rt-footer-v1--variant="base" class="rt-footer-v1 rt-position-relative">
	<div class="rt-footer-layer"></div>
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-hflex rt-footer-link-wrapper rt-position-relative">
			<div class="w-layout-hflex rt-nav-link-box-wrapper">
				<div
					id="w-node-_4f860c93-1d67-c871-603e-07e0bac3d13f-bac3d13a"
					class="w-layout-vflex rt-nav-link-box-one rt-nav-link-top"
				>
					<div
						id="w-node-_4f860c93-1d67-c871-603e-07e0bac3d140-bac3d13a"
						class="rt-text-style-h5 rt-text-color-white rt-span-2"
					>
						{getText('contact_heading', 'Stay Connected')}
					</div>
					<div class="w-layout-hflex rt-contact-box">
						<img
							width="18"
							height="18"
							alt={getImage('mail_icon').alt || 'Mail'}
							src={getImage('mail_icon').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7e1_mail.svg'}
							loading="lazy"
							class="rt-mail-logo"
						/>
						<div class="w-layout-vflex rt-contact-information">
							<div class="rt-contact-text">{getText('email_label', 'email address')}</div>
							<a href={getLink('email_link').href || 'mailto:info@example.com'} class="rt-text-color-white rt-text-color-change">
								{getText('email', 'info@example.com')}
							</a>
						</div>
					</div>
					<div class="w-layout-hflex rt-contact-box">
						<img
							width="18"
							height="18"
							alt={getImage('phone_icon').alt || 'Call'}
							src={getImage('phone_icon').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d7e0_Call.svg'}
							loading="lazy"
							class="rt-mail-logo"
						/>
						<div class="w-layout-vflex rt-contact-information">
							<div class="rt-contact-text">{getText('phone_label', 'Phone Number')}</div>
							<a href={getLink('phone_link').href || 'tel:88812345678'} class="rt-text-color-white rt-text-color-change"
								>{getText('phone', '(888) 1234-5678')}</a
							>
						</div>
					</div>
				</div>
				<div class="w-layout-vflex rt-nav-link-box-one">
					<div class="rt-text-style-h5 rt-text-color-white">{getText('quick_links_heading', 'Quick Links')}</div>
					<div class="w-layout-vflex rt-contact-box-two">
						<a href={getLink('home').href || '/'} class="rt-text-color-white rt-footer-text-hover">{getLink('home').text || 'Home'}</a><a
							href={getLink('about').href || '/aboutus'}
							aria-current="page"
							class="rt-text-color-white rt-footer-text-hover w--current">{getLink('about').text || 'About Us'}</a
						><a href={getLink('service').href || '/jobQuest'} class="rt-text-color-white rt-footer-text-hover">{getLink('service').text || 'Service'}</a><a
							href={getLink('blog').href || '#'}
							class="rt-text-color-white rt-footer-text-hover">{getLink('blog').text || 'Blog'}</a
						><a href={getLink('contact').href || '/contact'} class="rt-text-color-white rt-footer-text-hover">{getLink('contact').text || 'Contact'}</a>
					</div>
				</div>
				<div
					id="w-node-_4f860c93-1d67-c871-603e-07e0bac3d15e-bac3d13a"
					class="w-layout-vflex rt-nav-link-box-one"
				>
					<div class="rt-text-style-h5 rt-text-color-white">Utility Pages</div>
					<div class="w-layout-vflex rt-contact-box-two">
						<a href="#" class="rt-utility-page-text-color rt-footer-text-hover">License</a><a
							href="#"
							class="rt-utility-page-text-color rt-footer-text-hover">Style Guide</a
						><a href="#" class="rt-utility-page-text-color rt-footer-text-hover"
							>Password Protected</a
						><a href="#" class="rt-utility-page-text-color rt-footer-text-hover">404</a>
					</div>
				</div>
			</div>
			<div class="w-layout-hflex rt-footer-social-link-block margin-off-39">
				<div class="w-layout-vflex rt-nav-link-box-one">
					<a href="/" class="w-inline-block"
						><img width="192" height="36" alt="Logo White" src="/mylogo.png" loading="lazy" /></a
					>
					<p class="rt-footer-para">
						Morbi sed libero consequat id suspendisse congue in tristique tincidunt.
					</p>
					<div
						data-w-id="b6d27bf5-43da-10bf-83c4-b9447ef6e291"
						class="rt-form-button-box rt-position-relative"
					>
						<div class="rt-border-button-border">
							<a href="/contact" class="rt-button w-inline-block"
								><div class="w-layout-hflex rt-button-text-image-wrapper">
									<div class="w-layout-hflex rt-button-text-wrap">
										<div class="rt-button-text rt-button-hover-in">Get In Touch</div>
										<div class="rt-button-text rt-button-hover-out">Get In Touch</div>
									</div>
									<img
										width="10"
										height="9"
										alt="Arrow"
										src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg"
										loading="lazy"
										class="rt-button-arrow-image"
									/>
								</div>
								<div class="rt-button-layer"></div></a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="w-layout-hflex rt-footer-link-wrapper-two">
			<a
				data-w-id="4f860c93-1d67-c871-603e-07e0bac3d173"
				href="/contact"
				class="rt-footer-link w-inline-block"
				><div class="rt-footer-social-text rt-text-style-h4">
					Begin Your SaaS Journey with Expert Guidance
				</div>
				<div class="w-layout-vflex rt-footer-big-arrow-wrapper rt-overflow-hidden">
					<img
						width="47"
						height="47"
						alt="Big Arrow"
						src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf628abf34dbb0271d7e4_Arrow%202.svg"
						loading="lazy"
						class="rt-nav-social-arow one"
					/><img
						width="47"
						height="47"
						alt=""
						src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67f8dc48f7fbdc29bb25183f_Vector.svg"
						loading="lazy"
						class="rt-nav-social-arow two"
					/>
				</div></a
			>
			<div class="w-layout-vflex rt-footer-social-link-block">
				<div class="rt-text-color-white">Follow-US</div>
				<div class="w-layout-hflex rt-footer-social-box">
					<a
						data-w-id="4f860c93-1d67-c871-603e-07e0bac3d17b"
						href="https://www.facebook.com"
						target="_blank"
						class="rt-social-icon-block rt-overflow-hidden rt-position-relative w-inline-block"
						><img
							width="9"
							height="14"
							alt="Facebook"
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf628abf34dbb0271d7e5_Fb.svg"
							loading="lazy"
							class="rt-autofit rt-social-icon"
						/>
						<div class="rt-icon-layer"></div></a
					><a
						data-w-id="4f860c93-1d67-c871-603e-07e0bac3d17d"
						href="https://x.com"
						target="_blank"
						class="rt-social-icon-block rt-overflow-hidden rt-position-relative w-inline-block"
						><img
							width="15"
							height="15"
							alt="Twitter"
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf628abf34dbb0271d7e7_Twitter.svg"
							loading="lazy"
							class="rt-autofit rt-social-icon"
						/>
						<div class="rt-icon-layer"></div></a
					><a
						data-w-id="4f860c93-1d67-c871-603e-07e0bac3d17f"
						href="https://in.linkedin.com"
						target="_blank"
						class="rt-social-icon-block rt-overflow-hidden rt-position-relative w-inline-block"
						><img
							width="15"
							height="15"
							alt="Linkedin"
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf628abf34dbb0271d7e6_Linkedin.svg"
							loading="lazy"
							class="rt-autofit rt-social-icon"
						/>
						<div class="rt-icon-layer"></div></a
					><a
						data-w-id="4f860c93-1d67-c871-603e-07e0bac3d181"
						href="https://www.instagram.com"
						target="_blank"
						class="rt-social-icon-block rt-overflow-hidden rt-position-relative w-inline-block"
						><img
							width="15"
							height="15"
							alt="Instagram"
							src="https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf628abf34dbb0271d7e8_Instagram.svg"
							loading="lazy"
							class="rt-autofit rt-social-icon"
						/>
						<div class="rt-icon-layer"></div></a
					>
				</div>
			</div>
		</div>
		<div class="rt-copyright-text-v1">
			Designed by <a
				href="https://www.radianttemplates.com/"
				target="_blank"
				class="rt-copyright-link margin-off-48">Radiant Templates</a
			>, Powered by
			<a href="https://webflow.com/" target="_blank" class="rt-copyright-link margin-off-48"
				>Webflow</a
			>
		</div>
	</div>
</section>
