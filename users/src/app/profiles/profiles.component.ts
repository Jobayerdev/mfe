import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
})
export class ProfilesComponent implements OnInit {
  username: string = '';
  constructor() {}

  ngOnInit() {}
  onSubmit() {
    if (!this.username.length) return;
    console.log(this.username);
    this.username = '';
  }
}
