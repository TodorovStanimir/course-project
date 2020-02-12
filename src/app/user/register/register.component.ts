import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('registerForm', { static: true }) htmlForm: NgForm;

  constructor(private router: Router, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  hadleLogin(userInfo: IUser) {

    userInfo[`password`] = userInfo[`passwords`][`password`];
    delete userInfo[`passwords`];

    this.userService.register(userInfo).subscribe(res => {
      this.toastr.success('You have registered successfully', 'Success!');
      this.router.navigate(['/profile/login']);
    });
  }



}