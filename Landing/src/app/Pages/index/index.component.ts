import { Component, Inject, PLATFORM_ID, AfterViewInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-index',
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements AfterViewInit, OnDestroy {
  countdown = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  private countdownInterval: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize AOS animations
      AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        mirror: false,
      });

      // Initialize video background
      this.initVideoBackground();

      // Start countdown
      this.startCountdown();
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

      // Clear countdown interval
      if (this.countdownInterval) {
        clearInterval(this.countdownInterval);
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

      video.addEventListener('loadeddata', () => {
        // Try to play immediately when data is loaded
        this.attemptVideoPlay(video);
      });

      video.addEventListener('canplay', () => {
        this.attemptVideoPlay(video);
      });

      // Ensure video is visible
      video.style.display = 'block';
      video.style.visibility = 'visible';
      
      // Try to play immediately
      this.attemptVideoPlay(video);

    }, 100);
  }

  private attemptVideoPlay(video: HTMLVideoElement): void {
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
        // Video started playing successfully
      }).catch((error) => {
        // Autoplay failed, set up user interaction play
        this.setupUserInteractionPlay(video);
      });
    }
  }

  private setupUserInteractionPlay(video: HTMLVideoElement): void {
    const playOnInteraction = () => {
      video.play().then(() => {
        // Video started playing after user interaction
        document.removeEventListener('click', playOnInteraction);
        document.removeEventListener('touchstart', playOnInteraction);
        document.removeEventListener('keydown', playOnInteraction);
      }).catch((err) => {
        // Failed to play video even after user interaction
      });
    };
    
    document.addEventListener('click', playOnInteraction);
    document.addEventListener('touchstart', playOnInteraction);
    document.addEventListener('keydown', playOnInteraction);
  }



  private startCountdown(): void {
    // Event date: February 27, 2026, 16:00
    const eventDate = new Date('2026-02-27T16:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        // Event has started
        this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        if (this.countdownInterval) {
          clearInterval(this.countdownInterval);
        }
        return;
      }

      this.countdown = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    };

    // Update immediately
    updateCountdown();

    // Update every second
    this.countdownInterval = setInterval(updateCountdown, 1000);
  }
}
