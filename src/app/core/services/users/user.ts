import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { IUser } from '@models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User {
  private readonly _http = inject(HttpClient);

  createUser(user: IUser): Observable<any> {
    return this._http.post<User>(`${environment.apiUrl}/users`, user);
  }
}
