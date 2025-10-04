import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AiPowered } from '@landing/ui/ai-powered/ai-powered';
import { Cta } from '@landing/ui/cta/cta';
import { Features } from '@landing/ui/features/features';
import { Footer } from '@landing/ui/footer/footer';
import { HowItWorks } from '@landing/ui/how-it-works/how-it-works';
import { Pricing } from '@landing/ui/pricing/pricing';
import { Stats } from '@landing/ui/stats/stats';
import { Testimonials } from '@landing/ui/testimonials/testimonials';
import { NgxHighlighterComponent } from '@omnedia/ngx-highlighter';
import { NgxNeonUnderlineComponent } from '@omnedia/ngx-neon-underline';
import { NgxVortexComponent } from '@omnedia/ngx-vortex';
import { GoogleAuth } from '@services/google-auth/google-auth';

@Component({
  selector: 'app-landing',
  imports: [
    RouterLink,
    NgxHighlighterComponent,
    NgxVortexComponent,
    NgxNeonUnderlineComponent,
    Footer,
    Cta,
    Pricing,
    Testimonials,
    Stats,
    HowItWorks,
    AiPowered,
    Features,
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  private readonly googleAuth = inject(GoogleAuth);

  registerWithGoogle() {
    this.googleAuth.googleLogin();
  }
}
