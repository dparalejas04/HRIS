import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  visible: boolean = true;
  changetype: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  loginValidate() {
    this.router.navigateByUrl('/sidebar');
  }

  viewpass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
}
