import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, AfterViewInit, OnDestroy } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-index-countdown',
  imports: [],
  templateUrl: './index-countdown.component.html',
  styleUrl: './index-countdown.component.css'
})
export class IndexCountdownComponent implements AfterViewInit, OnDestroy {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        mirror: false,
      });

      // Initialize video background
      this.initVideoBackground();
    }
  }

  ngOnDestroy(): void {
    // Clean up video when component is destroyed
    if (isPlatformBrowser(this.platformId)) {
      const video = document.getElementById('hero-video') as HTMLVideoElement;
      if (video) {
        video.pause();
        video.src = '';
        video.load();
      }
      
      // Remove scroll listener
      if ((this as any).scrollListener) {
        window.removeEventListener('scroll', (this as any).scrollListener);
      }
    }
  }

  private initVideoBackground(): void {
    setTimeout(() => {
      const video = document.getElementById('hero-video') as HTMLVideoElement;
      
      if (!video) {
        return;
      }


      // Set video properties for better autoplay support
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = 'auto';

      // Add event listeners for debugging
      video.addEventListener('loadstart', () => {
        // Video loading started
      });

      video.addEventListener('loadeddata', () => {
        // Video data loaded successfully
        this.attemptVideoPlay(video);
      });

      video.addEventListener('canplay', () => {
        // Video can start playing
        this.attemptVideoPlay(video);
      });

      video.addEventListener('playing', () => {
        // Video is playing
      });

      video.addEventListener('error', (e) => {
        // Video error occurred
      });

      video.addEventListener('stalled', () => {
        // Video stalled
      });

      // Ensure video is visible
      video.style.display = 'block';
      video.style.visibility = 'visible';
      
      // Try to play immediately
      this.attemptVideoPlay(video);
      
      // Add simple parallax effect
      this.addParallaxEffect();
      
    }, 100);
  }

  private attemptVideoPlay(video: HTMLVideoElement): void {
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
        // Countdown video started playing automatically
      }).catch((error) => {
        // Countdown video autoplay failed, set up user interaction play
        this.setupUserInteractionPlay(video);
      });
    }
  }

  private setupUserInteractionPlay(video: HTMLVideoElement): void {
    const playOnInteraction = () => {
      video.play().then(() => {
        // Countdown video started playing after user interaction
        document.removeEventListener('click', playOnInteraction);
        document.removeEventListener('touchstart', playOnInteraction);
        document.removeEventListener('keydown', playOnInteraction);
      }).catch((err) => {
        // Failed to play countdown video even after user interaction
      });
    };
    
    document.addEventListener('click', playOnInteraction);
    document.addEventListener('touchstart', playOnInteraction);
    document.addEventListener('keydown', playOnInteraction);
  }


  private addParallaxEffect(): void {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    const heroSection = document.getElementById('section-hero');
    
    if (!video || !heroSection) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      video.style.transform = `translateY(${rate}px) scale(1.1)`;
    };

    window.addEventListener('scroll', handleScroll);
    
    // Store the event listener for cleanup
    (this as any).scrollListener = handleScroll;
  }
}
