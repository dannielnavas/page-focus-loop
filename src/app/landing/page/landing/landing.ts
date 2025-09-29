import { Component, inject } from '@angular/core';
import { GoogleAuth } from '@services/google-auth/google-auth';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  private readonly googleAuth = inject(GoogleAuth);

  registerWithGoogle() {
    this.googleAuth.googleLogin();
  }
}
