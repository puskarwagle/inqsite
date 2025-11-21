/**
 * Robust Animation System
 * Replaces Webflow animations with IntersectionObserver + RAF
 *
 * To exclude elements from this system (let Webflow handle them):
 * 1. Add data-webflow-managed attribute to HTML element
 * 2. Add selector to "webflowManaged" array in config
 * 3. Add selector to "ignore" array in config
 */

class AnimationManager {
  constructor() {
    this.config = null;
    this.observers = new Map();
    this.floatingElements = new Map();
    this.rafId = null;
    this.isPaused = false;
    this.initialized = false;
  }

  async init() {
    if (this.initialized) return;

    try {
      const response = await fetch('/webtemplate/animations-config.json');
      this.config = await response.json();
      this.setupAnimations();
      this.startFloatAnimations();
      this.initialized = true;
      console.log('✓ Animation system initialized');
    } catch (error) {
      console.error('Animation config load failed:', error);
      this.fallbackInit();
    }
  }

  // Check if element should be managed by Webflow instead
  isWebflowManaged(el) {
    // Check for data attribute
    if (el.hasAttribute('data-webflow-managed')) return true;

    // Check if inside a webflow-managed parent
    if (el.closest('[data-webflow-managed]')) return true;

    // Check config webflowManaged selectors
    const managed = this.config?.webflowManaged || [];
    for (const selector of managed) {
      if (el.matches(selector) || el.closest(selector)) return true;
    }

    return false;
  }

  setupAnimations() {
    const { global, elements, ignore } = this.config;

    // Create IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      {
        threshold: global.threshold || 0.1,
        rootMargin: global.rootMargin || '0px'
      }
    );

    // Find and observe all animated elements
    Object.keys(elements).forEach(selector => {
      const config = elements[selector];

      // Skip continuous animations (handled by RAF)
      if (this.isFloatAnimation(config)) return;

      // Skip ignored elements
      if (ignore?.includes(selector)) return;

      try {
        const nodes = document.querySelectorAll(selector);
        nodes.forEach((el, index) => {
          // Skip if element is in ignore list
          if (ignore?.some(ign => el.matches(ign))) return;

          // Skip if managed by Webflow
          if (this.isWebflowManaged(el)) return;

          // Store config on element
          el.dataset.animConfig = JSON.stringify({
            ...config,
            staggerDelay: global.stagger ? index * global.stagger : 0
          });

          // Set initial state
          this.setInitialState(el, config);

          // Observe element
          observer.observe(el);
        });
      } catch (error) {
        console.warn(`Selector "${selector}" failed:`, error.message);
      }
    });

    this.observers.set('scroll', observer);
  }

  isFloatAnimation(config) {
    const preset = this.config.presets[config.preset];
    return preset?.type === 'continuous' || config.preset === 'float';
  }

  setInitialState(el, config) {
    const preset = this.config.presets[config.preset];
    if (!preset) return;

    if (preset.opacity) {
      el.style.opacity = preset.opacity[0];
    }

    const transforms = [];
    if (preset.translateY) transforms.push(`translateY(${preset.translateY[0]}px)`);
    if (preset.translateX) transforms.push(`translateX(${preset.translateX[0]}px)`);
    if (preset.scale) transforms.push(`scale(${preset.scale[0]})`);
    if (preset.rotateZ) transforms.push(`rotateZ(${preset.rotateZ[0]}deg)`);

    if (transforms.length) {
      el.style.transform = transforms.join(' ');
    }

    el.style.transition = 'none';
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !this.isPaused) {
        this.animateElement(entry.target);

        // Unobserve if once: true
        if (this.config.global.once) {
          this.observers.get('scroll').unobserve(entry.target);
        }
      }
    });
  }

  animateElement(el) {
    const config = JSON.parse(el.dataset.animConfig || '{}');
    const preset = this.config.presets[config.preset];

    if (!preset) {
      console.warn('No preset found for', config.preset);
      return;
    }

    const delay = (config.delay || 0) + (config.staggerDelay || 0);

    setTimeout(() => {
      // Apply transition
      el.style.transition = `all ${preset.duration}ms ${preset.easing}`;

      // Apply final state
      if (preset.opacity) el.style.opacity = preset.opacity[1];

      const transforms = [];
      if (preset.translateY) transforms.push(`translateY(${preset.translateY[1]}px)`);
      if (preset.translateX) transforms.push(`translateX(${preset.translateX[1]}px)`);
      if (preset.scale) transforms.push(`scale(${preset.scale[1]})`);
      if (preset.rotateZ) transforms.push(`rotateZ(${preset.rotateZ[1]}deg)`);

      if (transforms.length) {
        el.style.transform = transforms.join(' ');
      }

      el.classList.add('animated');
    }, delay);
  }

  startFloatAnimations() {
    const { elements } = this.config;

    Object.keys(elements).forEach(selector => {
      const config = elements[selector];

      if (!this.isFloatAnimation(config)) return;

      const preset = this.config.presets[config.preset];

      try {
        const nodes = document.querySelectorAll(selector);
        nodes.forEach((el) => {
          setTimeout(() => {
            this.floatingElements.set(el, {
              amplitude: config.amplitude || preset.amplitude,
              speed: config.speed || preset.speed,
              phase: Math.random() * Math.PI * 2,
              scaleSync: config.scaleSync || false,
              baseY: 0,
              baseScale: 1
            });
          }, config.initialDelay || 0);
        });
      } catch (error) {
        console.warn(`Float animation for "${selector}" failed:`, error.message);
      }
    });

    this.animate();
  }

  animate() {
    if (this.isPaused) {
      this.rafId = requestAnimationFrame(() => this.animate());
      return;
    }

    const time = performance.now() / 1000;

    this.floatingElements.forEach((config, el) => {
      const offset = Math.sin(time * config.speed + config.phase) * config.amplitude;

      let transform = `translateY(${offset}px)`;

      if (config.scaleSync) {
        const scale = 1 + (Math.abs(offset) / config.amplitude) * 0.05;
        transform += ` scale(${scale})`;
      }

      el.style.transform = transform;
      el.style.willChange = 'transform';
    });

    this.rafId = requestAnimationFrame(() => this.animate());
  }

  pause() {
    this.isPaused = true;
  }

  resume() {
    this.isPaused = false;
  }

  destroy() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }

    this.observers.forEach(observer => observer.disconnect());
    this.floatingElements.clear();
    this.observers.clear();
    this.initialized = false;
  }

  fallbackInit() {
    console.warn('Using fallback animation system');

    // Simple fallback
    const elements = document.querySelectorAll('[data-w-id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.transition = 'all 0.8s ease-out';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(50px)';
      observer.observe(el);
    });
  }
}

// Initialize on DOM ready
let animManager;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    animManager = new AnimationManager();
    animManager.init();
  });
} else {
  animManager = new AnimationManager();
  animManager.init();
}

// Expose for debugging
window.animationManager = animManager;
