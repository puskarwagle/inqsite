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

<section data-wf--rt-faq-v1--variant="base" class="rt-faq">
	<div class="w-layout-blockcontainer rt-container-small w-container">
		<div class="w-layout-vflex rt-faq-top-text">
			<h2 data-w-id="0f0a4370-4efc-1ee0-8032-a8000c383736" class="rt-gap-off rt-h2-gap">{getText('section_heading', 'We Always Ready To Answer Your Any Query')}</h2>
			<p data-w-id="0f0a4370-4efc-1ee0-8032-a8000c383738" class="rt-gap-off rt-h2-paragraph-gap">
				Etiam viverra purus sed aliquet tincidunt diam auctor nibhe eget elementum lobortis ante
				massa quis dui suspendisse.
			</p>
		</div>
		<div
			data-w-id="cc2ed87c-d54d-7724-7e0f-9d8a35d74cd5"
			data-current="Tab 1"
			data-easing="ease"
			data-duration-in="300"
			data-duration-out="100"
			class="rt-query-menu-wrapper w-tabs"
		>
			<div class="rt-query-menu w-tab-menu">
				<a data-w-tab="Tab 1" class="rt-query-menu-name w-inline-block w-tab-link w--current"
					><img
						width="20"
						height="21"
						alt={getText('query', 'Query')}
						src={getImage('image_1').url}
						loading="lazy"
					/>
					<div>General</div></a
				><a data-w-tab="Tab 2" class="rt-query-menu-name w-inline-block w-tab-link"
					><img
						width="20"
						height="21"
						alt={getText('query', 'Query')}
						src={getImage('image_2').url}
						loading="lazy"
					/>
					<div>Support</div></a
				><a data-w-tab="Tab 3" class="rt-query-menu-name w-inline-block w-tab-link"
					><img
						width="20"
						height="21"
						alt={getText('query', 'Query')}
						src={getImage('image_3').url}
						loading="lazy"
					/>
					<div>Others</div></a
				>
			</div>
			<div class="rt-query-content w-tab-content">
				<div data-w-tab="Tab 1" class="rt-query-question-tab w-tab-pane w--tab-active">
					<div
						data-w-id="ec60ee8e-7f8c-90f6-e686-d0cbfa355ed2"
						class="w-layout-vflex rt-faq-box active rt-margin"
					>
						<div class="w-layout-hflex rt-query-box active">
							<div class="rt-text-style-h6 active">{getText('how_secure_is', 'How secure is my data with your AI system?')}</div>
							<div class="w-layout-hflex rt-query-icon-block">
								<div class="rt-query-plus-icon active"></div>
								<div class="rt-query-plus-icon-two active"></div>
							</div>
						</div>
						<div class="rt-overflow-hidden active">
							<p class="rt-query-paragraph active">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Volutpat sed malesuada nam mattis. Felis sit blandit semper mattis. Adipiscing velit malesuada volutpat ultricies amet ac interdum mauris. Augue non nec ultrices in.')}</p>
						</div>
					</div>
					<div
						data-w-id="98a30030-a210-939e-6fcc-40aa4246702c"
						class="w-layout-vflex rt-faq-box rt-margin"
					>
						<div class="w-layout-hflex rt-query-box">
							<div class="rt-text-style-h6 active">{getText('what_kind_of', 'What kind of customer support do you offer?')}</div>
							<div class="w-layout-hflex rt-query-icon-block">
								<div class="rt-query-plus-icon"></div>
								<div class="rt-query-plus-icon-two"></div>
							</div>
						</div>
						<div class="rt-overflow-hidden">
							<p class="rt-query-paragraph">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Volutpat sed malesuada nam mattis. Felis sit blandit semper mattis. Adipiscing velit malesuada volutpat ultricies amet ac interdum mauris. Augue non nec ultrices in.')}</p>
						</div>
					</div>
					<div
						data-w-id="823a335a-871a-da36-4916-a0138d1b26a9"
						class="w-layout-vflex rt-faq-box rt-margin"
					>
						<div class="w-layout-hflex rt-query-box">
							<div class="rt-text-style-h6 active">{getText('can_ai_handle', 'Can AI handle sensitive data?')}</div>
							<div class="w-layout-hflex rt-query-icon-block">
								<div class="rt-query-plus-icon"></div>
								<div class="rt-query-plus-icon-two"></div>
							</div>
						</div>
						<div class="rt-overflow-hidden">
							<p class="rt-query-paragraph">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Volutpat sed malesuada nam mattis. Felis sit blandit semper mattis. Adipiscing velit malesuada volutpat ultricies amet ac interdum mauris. Augue non nec ultrices in.')}</p>
						</div>
					</div>
					<div data-w-id="68fa8c62-2e74-f639-0ac0-9a0a43e29cdc" class="w-layout-vflex rt-faq-box">
						<div class="w-layout-hflex rt-query-box">
							<div class="rt-text-style-h6 active">{getText('how_does_the', 'How does the AI platform work?')}</div>
							<div class="w-layout-hflex rt-query-icon-block">
								<div class="rt-query-plus-icon"></div>
								<div class="rt-query-plus-icon-two"></div>
							</div>
						</div>
						<div class="rt-overflow-hidden">
							<p class="rt-query-paragraph">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Volutpat sed malesuada nam mattis. Felis sit blandit semper mattis. Adipiscing velit malesuada volutpat ultricies amet ac interdum mauris. Augue non nec ultrices in.')}</p>
						</div>
					</div>
				</div>
				<div data-w-tab="Tab 2" class="w-tab-pane">
					<div
						data-w-id="d4629b6f-93da-c37b-fd39-c290e1a02bc3"
						class="w-layout-vflex rt-faq-box active rt-margin"
					>
						<div class="w-layout-hflex rt-query-box active">
							<div class="rt-text-style-h6 active">{getText('what_should_i', 'What should I do if AI responses seem inaccurate?')}</div>
							<div class="w-layout-hflex rt-query-icon-block">
								<div class="rt-query-plus-icon active"></div>
								<div class="rt-query-plus-icon-two active"></div>
							</div>
						</div>
						<div class="rt-overflow-hidden active">
							<p class="rt-query-paragraph active">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Volutpat sed malesuada nam mattis. Felis sit blandit semper mattis. Adipiscing velit malesuada volutpat ultricies amet ac interdum mauris. Augue non nec ultrices in.')}</p>
						</div>
					</div>
					<div
						data-w-id="d8b65357-60f9-c922-42e2-7bd5b88f3e76"
						class="w-layout-vflex rt-faq-box rt-margin"
					>
						<div class="w-layout-hflex rt-query-box">
							<div class="rt-text-style-h6 active">{getText('how_do_i', 'How do I reach technical support?')}</div>
							<div class="w-layout-hflex rt-query-icon-block">
								<div class="rt-query-plus-icon"></div>
								<div class="rt-query-plus-icon-two"></div>
							</div>
						</div>
						<div class="rt-overflow-hidden">
							<p class="rt-query-paragraph">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Volutpat sed malesuada nam mattis. Felis sit blandit semper mattis. Adipiscing velit malesuada volutpat ultricies amet ac interdum mauris. Augue non nec ultrices in.')}</p>
						</div>
					</div>
					<div
						data-w-id="dc387cf5-fa7a-ad67-2359-000e1704e856"
						class="w-layout-vflex rt-faq-box rt-margin"
					>
						<div class="w-layout-hflex rt-query-box">
							<div class="rt-text-style-h6 active">{getText('can_i_rollback', 'Can I rollback AI changes or actions?')}</div>
							<div class="w-layout-hflex rt-query-icon-block">
								<div class="rt-query-plus-icon"></div>
								<div class="rt-query-plus-icon-two"></div>
							</div>
						</div>
						<div class="rt-overflow-hidden">
							<p class="rt-query-paragraph">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Volutpat sed malesuada nam mattis. Felis sit blandit semper mattis. Adipiscing velit malesuada volutpat ultricies amet ac interdum mauris. Augue non nec ultrices in.')}</p>
						</div>
					</div>
					<div data-w-id="ac04a20a-1fd4-7516-acb2-5e03ea24413c" class="w-layout-vflex rt-faq-box">
						<div class="w-layout-hflex rt-query-box">
							<div class="rt-text-style-h6 active">{getText('do_you_offer', 'Do you offer live onboarding or demos?')}</div>
							<div class="w-layout-hflex rt-query-icon-block">
								<div class="rt-query-plus-icon"></div>
								<div class="rt-query-plus-icon-two"></div>
							</div>
						</div>
						<div class="rt-overflow-hidden">
							<p class="rt-query-paragraph">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Volutpat sed malesuada nam mattis. Felis sit blandit semper mattis. Adipiscing velit malesuada volutpat ultricies amet ac interdum mauris. Augue non nec ultrices in.')}</p>
						</div>
					</div>
				</div>
				<div data-w-tab="Tab 3" class="w-tab-pane">
					<div
						data-w-id="13f2fbdd-6f1a-e5fb-ac8a-5f26b8ff77e4"
						class="w-layout-vflex rt-faq-box active rt-margin"
					>
						<div class="w-layout-hflex rt-query-box active">
							<div class="rt-text-style-h6 active">Does the AI learn and improve over time?</div>
							<div class="w-layout-hflex rt-query-icon-block">
								<div class="rt-query-plus-icon active"></div>
								<div class="rt-query-plus-icon-two active"></div>
							</div>
						</div>
						<div class="rt-overflow-hidden active">
							<p class="rt-query-paragraph active">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Volutpat sed malesuada nam mattis. Felis sit blandit semper mattis. Adipiscing velit malesuada volutpat ultricies amet ac interdum mauris. Augue non nec ultrices in.')}</p>
						</div>
					</div>
					<div
						data-w-id="7eefeaf2-513d-9b2b-f2f9-3ca003d383a9"
						class="w-layout-vflex rt-faq-box rt-margin"
					>
						<div class="w-layout-hflex rt-query-box">
							<div class="rt-text-style-h6 active">{getText('can_i_integrate', 'Can I integrate this with other tools?')}</div>
							<div class="w-layout-hflex rt-query-icon-block">
								<div class="rt-query-plus-icon"></div>
								<div class="rt-query-plus-icon-two"></div>
							</div>
						</div>
						<div class="rt-overflow-hidden">
							<p class="rt-query-paragraph">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Volutpat sed malesuada nam mattis. Felis sit blandit semper mattis. Adipiscing velit malesuada volutpat ultricies amet ac interdum mauris. Augue non nec ultrices in.')}</p>
						</div>
					</div>
					<div
						data-w-id="84390930-41d8-a6f0-21e0-344ff313a2a4"
						class="w-layout-vflex rt-faq-box rt-margin"
					>
						<div class="w-layout-hflex rt-query-box">
							<div class="rt-text-style-h6 active">{getText('does_the_ai', 'Does the AI support multilingual use?')}</div>
							<div class="w-layout-hflex rt-query-icon-block">
								<div class="rt-query-plus-icon"></div>
								<div class="rt-query-plus-icon-two"></div>
							</div>
						</div>
						<div class="rt-overflow-hidden">
							<p class="rt-query-paragraph">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Volutpat sed malesuada nam mattis. Felis sit blandit semper mattis. Adipiscing velit malesuada volutpat ultricies amet ac interdum mauris. Augue non nec ultrices in.')}</p>
						</div>
					</div>
					<div data-w-id="6cdd1185-984d-f42a-dc89-ae2282f6231a" class="w-layout-vflex rt-faq-box">
						<div class="w-layout-hflex rt-query-box">
							<div class="rt-text-style-h6 active">{getText('what_are_the', 'What are the pricing plans?')}</div>
							<div class="w-layout-hflex rt-query-icon-block">
								<div class="rt-query-plus-icon"></div>
								<div class="rt-query-plus-icon-two"></div>
							</div>
						</div>
						<div class="rt-overflow-hidden">
							<p class="rt-query-paragraph">{getText('lorem_ipsum_dolor_sit', 'Lorem ipsum dolor sit amet consectetur. Volutpat sed malesuada nam mattis. Felis sit blandit semper mattis. Adipiscing velit malesuada volutpat ultricies amet ac interdum mauris. Augue non nec ultrices in.')}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
