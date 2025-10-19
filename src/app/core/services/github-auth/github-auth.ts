import { inject, Injectable } from '@angular/core';
import { Auth, GithubAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { User } from '@services/users/user';

@Injectable({
  providedIn: 'root',
})
export class GithubAuth {
  private readonly firebaseAuth = inject(Auth);
  private readonly user = inject(User);

  async githubLogin(): Promise<void> {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(this.firebaseAuth, provider);
      const user = result.user;
      console.log(user);
      if (!user) {
        throw new Error('Github-Login error');
      }
      console.log(user);
      this.user
        .createUser({
          email: user.email,
          full_name: user.displayName,
          profile_image: user.photoURL,
          password: user.uid,
          accept_terms: true,
        })
        .subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (error) => {
            console.error('Error creating user:', error);
          },
        });
    } catch (error) {
      console.error('Github-Login error:', error);
      throw error;
    }
  }
}
