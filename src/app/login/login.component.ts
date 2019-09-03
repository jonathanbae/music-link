import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  clientSettings;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.formBuilder = new FormBuilder();
    this.clientSettings = {};
    // this.clientSettings.clientId = null;
    this.clientSettings.clientId = '04c76a60c57d4ba7ab6c801ede7ad24d';
    // this.clientSettings.redirectUri = null;
    this.clientSettings.redirectUri = 'localhost:4200/login';
    // this.clientSettings.scope = null;
    this.clientSettings.scope = '04c76a60c57d4ba7ab6c801ede7ad24d';
    // this.clientSettings.authToken = null;
    this.clientSettings.authToken = '';
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
  }


  connectSpotify() {
    let urlString = 'https://accounts.spotify.com/authorize?';
    urlString += 'client_id=04c76a60c57d4ba7ab6c801ede7ad24d';
    urlString += '&response_type=code';
    urlString += '&redirect_uri=localhost:4200/authorize';
    window.open(urlString);
  }
}
