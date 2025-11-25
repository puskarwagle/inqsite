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

<section class="rt-contact-hero-v3">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-vflex rt-contact-top-header-v2 rt-desktop-text-center">
			<h1 data-w-id="cbacd7a6-1db3-3668-2b7a-cd57bb206da3" class="rt-gap-off rt-h1-gap">{getText('hero_heading', 'Have Any questions? Don&#x27;t hesitate to contact us')}</h1>
			<p
				data-w-id="cbacd7a6-1db3-3668-2b7a-cd57bb206da5"
				class="rt-paragraph-gap rt-contact-top-paragraph-v2"
			>{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id magna malesuada tempor mi eget auctor dolor.')}</p>
		</div>
		<div class="w-layout-hflex rt-contact-details-v3">
			<div
				data-w-id="cbacd7a6-1db3-3668-2b7a-cd57bb206da8"
				class="w-layout-vflex rt-details-text-wrapper-v3 rt-shadow"
			>
				<div class="rt-contact-form-v2">
					<div class="w-layout-vflex rt-connect-v3 rt-desktop-text-center">
						<div data-w-id="cbacd7a6-1db3-3668-2b7a-cd57bb206dab" class="rt-text-style-h3">{getText('send_a_message', 'Send a message')}</div>
						<p data-w-id="cbacd7a6-1db3-3668-2b7a-cd57bb206dad">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur adipiscing elit Proin sem eros ornare sed lacinia')}</p>
					</div>
					<div data-w-id="cbacd7a6-1db3-3668-2b7a-cd57bb206daf" class="w-form">
						<form
							id="email-form-3"
							name="email-form-3"
							data-name="Email Form 3"
							method="get"
							class="contact-three-form"
							data-wf-page-id="67de7a61686d11872101087a"
							data-wf-element-id="cbacd7a6-1db3-3668-2b7a-cd57bb206db0"
							data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e"
						>
							<div class="rt-input-box">
								<input
									class="rt-contact-form-input-v2 rt-change-v2 w-input"
									maxlength="256"
									name="Name-3"
									data-name="Name 3"
									placeholder={getText('your_name', 'Your Name*')}
									type="text"
									id="Name-3"
									required=""
								/>
							</div>
							<div class="rt-input-box">
								<input
									class="rt-contact-form-input-v2 rt-change-v2 w-input"
									maxlength="256"
									name="Email-3"
									data-name="Email 3"
									placeholder={getText('email', 'Email*')}
									type="email"
									id="Email-3"
									required=""
								/>
							</div>
							<div class="rt-input-box">
								<input
									class="rt-contact-form-input-v2 rt-change-v2 w-input"
									maxlength="256"
									name="Phone-3"
									data-name="Phone 3"
									placeholder={getText('phone', 'Phone*')}
									type="tel"
									id="Phone-3"
									required=""
								/>
							</div>
							<div class="rt-input-box">
								<input
									class="rt-contact-form-input-v2 rt-change-v2 w-input"
									maxlength="256"
									name="Subject-3"
									data-name="Subject 3"
									placeholder={getText('subject', 'Subject*')}
									type="text"
									id="Subject-3"
									required=""
								/>
							</div>
							<div class="rt-input-box">
								<textarea
									id="Message"
									name="Message"
									maxlength="5000"
									data-name="Message"
									placeholder={getText('message', 'Message*')}
									required=""
									class="rt-textarea-v2 rt-change-v2 w-input"
								></textarea>
							</div>
							<div class="rt-form-check-box-wrapper-two">
								<label class="w-checkbox rt-form-check-box-v3"
									><div
										class="w-checkbox-input w-checkbox-input--inputType-custom rt-checkbox"
									></div>
									<input
										type="checkbox"
										name="Checkbox-3"
										id="Checkbox-3"
										data-name="Checkbox 3"
										style="opacity:0;position:absolute;z-index:-1"
									/><span class="rt-text-style-h6 w-form-label" for="Checkbox-3"
										><span class="rt-text-color-dark">{getText('agree_the', 'I agree to the')}</span>{getText('terms_and_conditions', ' terms and conditions')}</span
									></label
								>
							</div>
							<div class="w-layout-hflex rt-form-button-wrapper">
								<div class="w-layout-hflex rt-form-button-wrapper-v2">
									<div
										data-w-id="33d06521-347c-3013-6bca-5aea68a751e8"
										class="rt-form-button-box rt-position-relative"
									>
										<input
											type="submit"
											data-wait={getText('please_wait', 'Please wait...')}
											class="rt-form-button w-button"
											value={getText('submit_now', 'Submit Now')}
										/>
										<div class="w-layout-hflex rt-button rt-event-none">
											<div class="w-layout-hflex rt-button-text-image-wrapper">
												<div class="w-layout-hflex rt-button-text-wrap">
													<div
														data-w-id="7f8fa9db-bfb6-5fda-dcb1-6cc9bda10c3d"
														class="rt-button-text rt-button-hover-in"
													>{getText('inquire_now', 'Inquire Now')}</div>
													<div
														data-w-id="7f8fa9db-bfb6-5fda-dcb1-6cc9bda10c3f"
														class="rt-button-text rt-button-hover-out"
													>{getText('inquire_now', 'Inquire Now')}</div>
												</div>
												<img
													width="10"
													height="9"
													alt={getText('arrow', 'Arrow')}
													src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d792_arrow.svg'}
													loading="lazy"
													class="rt-button-arrow-image"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
						<div class="rt-success-message w-form-done">
							<div>{getText('thank_you_your_submission', 'Thank you! Your submission has been received!')}</div>
						</div>
						<div class="w-form-fail">
							<div>{getText('oops_something_went_wrong', 'Oops! Something went wrong while submitting the form.')}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="w-layout-vflex rt-office-details">
				<div class="rt-get-in-touch-box-v2">
					<div class="w-layout-vflex rt-contact-top-text-wrapper">
						<div data-w-id="cbacd7a6-1db3-3668-2b7a-cd57bb206dd1" class="rt-text-style-h3">{getText('button_contact', 'Contact us')}</div>
						<p data-w-id="cbacd7a6-1db3-3668-2b7a-cd57bb206dd3" class="rt-gap-off">{getText('lorem_sed_feugiat', 'Lorem sed feugiat risus neque magna cursus ornare vulputate It is a long established.')}</p>
					</div>
					<div class="w-layout-vflex rt-details-point-v2">
						<div
							data-w-id="cbacd7a6-1db3-3668-2b7a-cd57bb206dd6"
							class="w-layout-hflex rt-get-in-question-v2"
						>
							<div class="w-layout-hflex rt-get-in-icon-block-v2">
								<img
									width="17"
									height="23"
									alt={getText('location', 'Location')}
									src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805e6c9903345d767d80297_Group%201000001678%20(1).svg'}
									loading="lazy"
								/>
							</div>
							<div class="w-layout-vflex rt-get-in-text-wrapper-v2 rt-chnage-width">
								<div class="rt-text-style-h5">{getText('main_office', 'Main Office')}</div>
								<div>{getText('410_sandtown_california_94001', '410 Sandtown, California 94001, USA')}</div>
							</div>
						</div>
						<div
							data-w-id="cbacd7a6-1db3-3668-2b7a-cd57bb206dde"
							class="w-layout-hflex rt-get-in-question-v2"
						>
							<div class="w-layout-hflex rt-get-in-icon-block-v2">
								<img
									width="20"
									height="20"
									alt={getText('call', 'Call')}
									src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/6805e78b1bcb2dff07421493_Vector%20(7).svg'}
									loading="lazy"
								/>
							</div>
							<div class="w-layout-vflex rt-get-in-text-wrapper-v2">
								<div class="rt-text-style-h5">{getText('phone_no', 'Phone No')}</div>
								<div class="w-layout-vflex rt-contact-call-numbar-box">
									<div>
										<a href="tel:8884567890" class="rt-call-link">{getText('888_456_7890', '(888) 456 7890 ')}</a>
										<a href={getLink('phone_link').href || 'tel:8882345680'} class="rt-call-link">{getLink('phone_link').text || '(888) 234 5680'}</a>
										<a href="contact-two.html#" class="rt-call-hide-slash">/</a>
									</div>
									<div><a href="tel:8884567890" class="rt-call-link">{getText('888_456_7890', '(888) 456 7890')}</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div>
		<div class="rt-green-dot"></div>
		<div class="rt-dark-yellow-dot"></div>
		<div class="rt-dark-yellow-dot-two"></div>
		<div class="rt-violet-dot"></div>
		<div class="rt-violet-dot-two"></div>
	</div>
</section>
