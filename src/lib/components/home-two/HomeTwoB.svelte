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

<section class="rt-users-and-founders rt-overflow-hidden">
	<div class="w-layout-vflex rt-users-and-founders-block">
		<div class="rt-users-and-founders-text">
			<div class="rt-text-style-h5">{getText('trusted_by_15000', 'Trusted by 15,000+ founders &amp; business owners')}</div>
		</div>
		<div
			data-w-id="fe20c1ac-25b5-cccb-2709-cd906db1cdb9"
			class="w-layout-hflex rt-users-and-founders-marquee rt-position-relative"
		>
			<div class="rt-marquee-linear"></div>
			<div class="w-layout-hflex marquee-train">
				<img
					width="178"
					height="35"
					alt={getText('client', 'Client')}
					src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febf6_User.svg'}
					loading="lazy"
					class="company-logo"
				/><img
					width="149"
					height="35"
					alt={getText('client', 'Client')}
					src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febf7_User%202.svg'}
					loading="lazy"
					class="company-logo"
				/><img
					width="141"
					height="35"
					alt={getText('client', 'Client')}
					src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febf9_User%203.svg'}
					loading="lazy"
					class="company-logo"
				/><img
					width="144"
					height="35"
					alt={getText('client', 'Client')}
					src={getImage('image_4').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febf4_User%204.svg'}
					loading="lazy"
					class="company-logo"
				/><img
					width="183"
					height="35"
					alt={getText('client', 'Client')}
					src={getImage('image_5').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febf5_User%205.svg'}
					loading="lazy"
					class="company-logo"
				/><img
					width="216"
					height="35"
					alt={getText('client', 'Client')}
					src={getImage('image_6').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febfa_User%206.svg'}
					loading="lazy"
					class="company-logo"
				/>
			</div>
			<div class="w-layout-hflex marquee-train">
				<img
					width="178"
					height="35"
					alt={getText('client', 'Client')}
					src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febf6_User.svg'}
					loading="lazy"
					class="company-logo"
				/><img
					width="149"
					height="35"
					alt={getText('client', 'Client')}
					src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febf7_User%202.svg'}
					loading="lazy"
					class="company-logo"
				/><img
					width="141"
					height="35"
					alt={getText('client', 'Client')}
					src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febf9_User%203.svg'}
					loading="lazy"
					class="company-logo"
				/><img
					width="144"
					height="35"
					alt={getText('client', 'Client')}
					src={getImage('image_4').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febf4_User%204.svg'}
					loading="lazy"
					class="company-logo"
				/><img
					width="183"
					height="35"
					alt={getText('client', 'Client')}
					src={getImage('image_5').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febf5_User%205.svg'}
					loading="lazy"
					class="company-logo"
				/><img
					width="216"
					height="35"
					alt={getText('client', 'Client')}
					src={getImage('image_6').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febfa_User%206.svg'}
					loading="lazy"
					class="company-logo"
				/>
			</div>
			<div class="w-layout-hflex marquee-train">
				<img
					width="178"
					height="35"
					alt={getText('client', 'Client')}
					src={getImage('image_1').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febf6_User.svg'}
					loading="lazy"
					class="company-logo"
				/><img
					width="149"
					height="35"
					alt={getText('client', 'Client')}
					src={getImage('image_2').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febf7_User%202.svg'}
					loading="lazy"
					class="company-logo"
				/><img
					width="141"
					height="35"
					alt={getText('client', 'Client')}
					src={getImage('image_3').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febf9_User%203.svg'}
					loading="lazy"
					class="company-logo"
				/><img
					width="144"
					height="35"
					alt={getText('client', 'Client')}
					src={getImage('image_4').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febf4_User%204.svg'}
					loading="lazy"
					class="company-logo"
				/><img
					width="183"
					height="35"
					alt={getText('client', 'Client')}
					src={getImage('image_5').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febf5_User%205.svg'}
					loading="lazy"
					class="company-logo"
				/><img
					width="216"
					height="35"
					alt={getText('client', 'Client')}
					src={getImage('image_6').url || 'https://cdn.prod.website-files.com/67a1ea8462c51e3f81e40a7e/67dd3480ed5458fc5f7febfa_User%206.svg'}
					loading="lazy"
					class="company-logo"
				/>
			</div>
		</div>
	</div>
</section>
