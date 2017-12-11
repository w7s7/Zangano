import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user;
  editUser = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    seasonStarts: '',
    seasonEnds: ''
  };

  constructor(
    public auth: AuthService,
    private usrService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.auth.isLoggedIn().subscribe(user => {
      this.editUser = {
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        seasonStarts: user.seasonStarts,
        seasonEnds: user.seasonEnds
      };
    });
  }

  saveChanges() {
    this.usrService.editUser(this.user._id, this.editUser).subscribe(() => {
      this.router.navigate(['/user']);
    });
  }
}
