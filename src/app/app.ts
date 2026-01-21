// src/app/app.ts
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [RouterModule, RouterOutlet, NavbarComponent, Footer],
})
export class App implements AfterViewInit {
  menuActive = false;

  @ViewChild('navList') navList!: ElementRef;
  @ViewChild('menuBtn') menuBtn!: ElementRef;
  @ViewChild('navOverlay') navOverlay!: ElementRef;
  @ViewChild('contactForm') contactForm!: ElementRef<HTMLFormElement>;

toggleMenu() {
  const navListEl = this.navList.nativeElement as HTMLElement;
  const menuBtnEl = this.menuBtn.nativeElement as HTMLElement;
  const navOverlayEl = this.navOverlay?.nativeElement as HTMLElement;

  navListEl.classList.toggle('active');
  menuBtnEl.textContent = navListEl.classList.contains('active') ? '✕' : '☰';

  if (navOverlayEl) {
    navOverlayEl.style.display = navListEl.classList.contains('active') ? 'block' : 'none';
  }
}


  closeMenu() {
    this.menuActive = false;
  }

  ngAfterViewInit(): void {
    // Sticky header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
      if (!header) return;
      if (window.scrollY > 60) {
        (header as HTMLElement).style.background = 'rgba(10,1,24,0.85)';
        (header as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.3)';
      } else {
        (header as HTMLElement).style.background = 'rgba(10,1,24,0.7)';
        (header as HTMLElement).style.boxShadow = 'none';
      }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e: Event) => {
        const target = document.querySelector((a as HTMLAnchorElement).getAttribute('href')!);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && reveals.length) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      reveals.forEach(el => io.observe(el));
    }

    // Contact form
    if (this.contactForm) {
      this.contactForm.nativeElement.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        const formEl = this.contactForm.nativeElement;
        const name = (formEl.querySelector('[name="name"]') as HTMLInputElement).value.trim();
        const email = (formEl.querySelector('[name="email"]') as HTMLInputElement).value.trim();
        const message = (formEl.querySelector('[name="message"]') as HTMLTextAreaElement).value.trim();

        if (!name || !email || !message) {
          alert('Please fill in all fields before sending.');
          return;
        }

        console.log('Contact form submission', { name, email, message });
        alert('Thanks! Your message has been received.');
        formEl.reset();
      });
    }
  }
}
