import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'ta-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signup(form) {
    if (form.valid) {
      console.log(form);
      this.auth.signup(form.value)
        .subscribe((result) => {
          this.router.navigate(['/login']);
          console.log(result);
        }, (err) => {
          alert('something went wrong' + JSON.stringify(err));
        });
    } else {
      alert('Please enter the required fields');
    }
  }



}
