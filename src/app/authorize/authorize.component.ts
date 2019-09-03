import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css']
})
export class AuthorizeComponent implements OnInit {
  clientSettings;

  constructor() {
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
  }

}
