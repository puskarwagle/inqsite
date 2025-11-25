# Image CMS Status Report

## Introduction
This report details the current status of image management within the application's components, specifically focusing on whether images are managed via the Content Management System (CMS) through content JSON files or are hardcoded directly within the Svelte components. The goal is to provide a clear overview for a potential refactoring or improvement initiative by an AI coding agent.

The system utilizes a `content` prop passed to components, which is expected to contain `texts`, `images`, and `links` objects. A helper function `getImage(key)` is used within components to access image URLs and alt text from this `content.images` object.

## Summary of Findings
The investigation reveals a mixed approach to image handling:
*   Many components are set up to *potentially* utilize CMS-managed images through the `getImage()` helper function. However, even these components frequently include hardcoded fallback URLs.
*   A significant number of components *do not* use the `getImage()` helper at all, meaning all their images are hardcoded directly into the Svelte file and cannot be dynamically controlled by the CMS.

## Detailed Analysis

### Components with Partial CMS Image Support
These components include the boilerplate for accepting a `content` prop and utilize the `getImage(key).url` pattern for some of their images. This means that these images *can* be dynamically provided via the CMS (from corresponding JSON files). However, it's crucial to note that almost all instances of `getImage(key).url` are accompanied by a hardcoded fallback URL (`|| 'hardcoded_url'`). This implies that if a specific image key is not present in the CMS JSON, a default hardcoded image will be displayed. Furthermore, some of these components may also contain other images that are entirely hardcoded and do not use `getImage()` at all.

**List of Components:**

*   `about/AboutB.svelte`
*   `about/AboutC.svelte`
*   `about/AboutD.svelte`
*   `about/AboutE.svelte`
*   `about/AboutF.svelte`
*   `about/AboutG.svelte`
*   `about/AboutH.svelte`
*   `contact/ContactA.svelte`
*   `contact/ContactB.svelte`
*   `home/HomeA.svelte`
*   `home/HomeB.svelte`
*   `home/HomeC.svelte`
*   `home/HomeD.svelte`
*   `home/HomeE.svelte`
*   `home/HomeF.svelte`
*   `home/HomeG.svelte`
*   `home/HomeH.svelte`
*   `home/HomeI.svelte`
*   `home/HomeL.svelte`
*   `home-one/HomeOneA.svelte`
*   `home-one/HomeOneB.svelte`
*   `home-one/HomeOneC.svelte`
*   `home-one/HomeOneD.svelte`
*   `home-one/HomeOneE.svelte`
*   `home-one/HomeOneF.svelte`
*   `home-one/HomeOneG.svelte`
*   `home-one/HomeOneH.svelte`
*   `home-two/HomeTwoA.svelte`
*   `home-two/HomeTwoB.svelte`
*   `home-two/HomeTwoC.svelte`
*   `home-two/HomeTwoD.svelte`
*   `home-two/HomeTwoE.svelte`
*   `home-two/HomeTwoF.svelte`
*   `home-two/HomeTwoG.svelte`
*   `home-two/HomeTwoH.svelte`
*   `home-two/HomeTwoI.svelte`
*   `home-two/HomeTwoJ.svelte`
*   `service-one/ServiceOneF.svelte`
*   `shared/Footer.svelte`
*   `shared/Header.svelte`
*   `team/TeamA.svelte`
*   `team/TeamB.svelte`
*   `team/TeamC.svelte`
*   `team/TeamD.svelte`

### Components with NO CMS Image Support
These components, despite potentially accepting a `content` prop, do not use the `getImage()` helper function for any of their image `src` attributes. All images within these components are hardcoded directly. This means their images cannot be changed or managed through the CMS JSON files.

**List of Components:**

*   `about/AboutA.svelte` (Confirmed by direct inspection: `getImage()` is defined but not used for any `src` attribute)
*   `pricing/PricingA.svelte`
*   `pricing/PricingB.svelte`
*   `service-one/ServiceOneA.svelte`
*   `service-one/ServiceOneB.svelte`
*   `service-one/ServiceOneC.svelte`
*   `service-one/ServiceOneD.svelte`
*   `service-one/ServiceOneE.svelte`
*   `service-two/ServiceTwoA.svelte`
*   `service-two/ServiceTwoB.svelte`
*   `service-two/ServiceTwoC.svelte`
*   `service-two/ServiceTwoD.svelte`
*   `shared/Image.svelte` (This component is likely designed to display an image given a `src` prop, meaning another component would be responsible for providing that `src`. However, `shared/Image.svelte` itself does not directly interact with the CMS `content.images`.)

## Current Implementation Details
The project generally follows a pattern where:
1.  Svelte components import a `content` object via `export let content = { texts: {}, images: {}, links: {} };`.
2.  Helper functions like `getText`, `getImage`, and `getLink` are defined to safely access properties from this `content` object with fallbacks.
3.  For images, the pattern `src={getImage('image_key').url || 'hardcoded_fallback_url'}` is commonly used in components that support CMS images.

## Recommendations for AI Coding Agent
To fully centralize image management through the CMS and eliminate hardcoded image paths:

1.  **For components currently using `getImage()`:**
    *   Review each `getImage(key).url || 'hardcoded_fallback_url'` instance.
    *   Ensure that the `image_key` actually exists in the corresponding content JSON file (e.g., `static/content/HomeA.json` for `HomeA.svelte`).
    *   Where a fallback URL exists, but the image *should* be CMS-managed, create an entry in the relevant JSON file for `image_key` with a `url` and `alt` property.
    *   Consider removing the hardcoded fallback URLs (`|| 'hardcoded_url'`) if all images are intended to be CMS-managed, forcing explicit CMS definition.

2.  **For components with NO CMS Image Support:**
    *   Identify all `<img>` tags with hardcoded `src` attributes.
    *   For each such image, determine if it should be CMS-managed.
    *   If yes:
        *   Add a corresponding entry to the `images` object in the component's associated content JSON file (e.g., `static/content/AboutA.json` for `AboutA.svelte`).
        *   Modify the `<img>` tag in the Svelte component to use `src={getImage('new_image_key').url}` (and `alt={getImage('new_image_key').alt}`), removing the hardcoded `src`.
    *   If no (e.g., decorative icons that are part of the component's design and never change):
        *   Document this decision (e.g., with a comment in the Svelte file) to clarify why it's hardcoded.

3.  **For `shared/Image.svelte`:**
    *   This component likely acts as a presentational component. Its purpose is to display an image, not necessarily to fetch its source from the CMS directly. It should accept `src` and `alt` as props.
    *   Ensure that any component *using* `shared/Image` and intending to display a CMS-managed image passes the `getImage(key).url` and `getImage(key).alt` as props to `shared/Image`.

This comprehensive approach will ensure consistent and maintainable image management throughout the application.
