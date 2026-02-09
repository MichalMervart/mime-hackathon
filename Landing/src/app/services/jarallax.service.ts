import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { jarallax } from 'jarallax';

@Injectable({
  providedIn: 'root'
})
export class JarallaxService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  /**
   * Initialize jarallax for elements with video backgrounds
   * @param selector CSS selector for jarallax elements
   * @param options Jarallax options
   */
  initJarallax(selector: string = '.jarallax', options: any = {}): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) {
      return;
    }

    // Default options for video backgrounds
    const defaultOptions = {
      speed: 0.5,
      type: 'scroll',
      imgSrc: null,
      imgElement: null,
      elementInViewport: null,
      zIndex: -100,
      disableParallax: /iPad|iPhone|iPod|Android/,
      ...options
    };

    // Initialize jarallax for each element
    elements.forEach((element: Element) => {
      const htmlElement = element as HTMLElement;
      
      // Check if element has video source
      const videoSrc = htmlElement.getAttribute('data-video-src');
      
      if (videoSrc) {
        // Handle video background
        this.initVideoBackground(htmlElement, videoSrc, defaultOptions);
      } else {
        // Handle regular jarallax
        jarallax(htmlElement, defaultOptions);
      }
    });
  }

  /**
   * Initialize video background for jarallax element
   * @param element HTML element
   * @param videoSrc Video source path
   * @param options Jarallax options
   */
  private initVideoBackground(element: HTMLElement, videoSrc: string, options: any): void {
    // Create video element
    const video = document.createElement('video');
    
    // Handle different video source formats
    let finalVideoSrc = videoSrc;
    if (videoSrc.startsWith('mp4:')) {
      finalVideoSrc = videoSrc.replace('mp4:', '');
    }
    
    // Ensure proper path for Angular assets
    if (!finalVideoSrc.startsWith('http') && !finalVideoSrc.startsWith('assets/')) {
      finalVideoSrc = 'assets/' + finalVideoSrc;
    }
    
    video.src = finalVideoSrc;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.style.position = 'absolute';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    video.style.zIndex = '-1';

    // Add error handling for video loading
    video.addEventListener('error', (e) => {
      console.error('Video failed to load:', finalVideoSrc, e);
    });

    video.addEventListener('loadeddata', () => {
      console.log('Video loaded successfully:', finalVideoSrc);
    });

    // Add video to element
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(video);

    // Initialize jarallax with video
    jarallax(element, {
      ...options,
      imgElement: video
    });

    // Ensure video plays
    video.play().catch(error => {
      console.warn('Video autoplay failed:', error);
    });
  }

  /**
   * Destroy jarallax instances
   * @param selector CSS selector for jarallax elements
   */
  destroyJarallax(selector: string = '.jarallax'): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const elements = document.querySelectorAll(selector);
    elements.forEach((element: Element) => {
      jarallax(element, 'destroy');
    });
  }

  /**
   * Refresh jarallax instances
   * @param selector CSS selector for jarallax elements
   */
  refreshJarallax(selector: string = '.jarallax'): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const elements = document.querySelectorAll(selector);
    elements.forEach((element: Element) => {
      jarallax(element, 'onResize');
    });
  }
}
