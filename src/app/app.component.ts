import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AngularFire } from 'angularfire2';
import { Auth } from './auth/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private auth: Auth;

  constructor(private authService: AuthService, private af: AngularFire) {
    this.af.auth.subscribe((data: any)=> {
      this.auth = new Auth(data.uid, data.google.displayName, data.google.email, data.google.photoURL);
    });
  }

  login() {
    this.authService.login();
  }
}
