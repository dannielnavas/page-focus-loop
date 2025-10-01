import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxHighlighterComponent } from '@omnedia/ngx-highlighter';
import { NgxNeonUnderlineComponent } from '@omnedia/ngx-neon-underline';
import { NgxVortexComponent } from '@omnedia/ngx-vortex';
import { GoogleAuth } from '@services/google-auth/google-auth';
import { AiPowered } from '../../ui/ai-powered/ai-powered';
import { Cta } from '../../ui/cta/cta';
import { Features } from '../../ui/features/features';
import { Footer } from '../../ui/footer/footer';
import { HowItWorks } from '../../ui/how-it-works/how-it-works';
import { Pricing } from '../../ui/pricing/pricing';
import { Stats } from '../../ui/stats/stats';
import { Testimonials } from '../../ui/testimonials/testimonials';

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
