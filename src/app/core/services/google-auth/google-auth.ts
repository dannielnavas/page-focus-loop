import { inject, Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { User } from '@services/users/user';

@Injectable({
  providedIn: 'root',
})
export class GoogleAuth {
  private readonly firebaseAuth = inject(Auth);
  private readonly user = inject(User);

  //   async onGoogleSignIn(): Promise<void> {
  //   try {
  //     await this.authService.googleLogin();
  //     this.router.navigateByUrl('/main');
  //   } catch (error) {
  //     console.error('Google Sign-In error:', error);
  //   }
  // }

  async googleLogin(): Promise<void> {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(this.firebaseAuth, provider);
      const user = result.user;
      if (!user) {
        throw new Error('Google-Login error');
      }
      console.log(user);
      this.user.createUser({
        email: user.email,
        full_name: user.displayName,
        profile_image: user.photoURL,
        password: user.uid,
      });
    } catch (error) {
      console.error('Google-Login error:', error);
      throw error;
    }
  }
}
