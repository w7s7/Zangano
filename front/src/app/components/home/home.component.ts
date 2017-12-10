import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../../routes';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

declare var $;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    $('.button-collapse').sideNav();
  }
  goToLogin() {
    this.router.navigate(['login']);
  }
}
