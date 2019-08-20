import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  logo = 'assets/logo.svg';
  title = 'angular social';
  items = [{label: 'Posts', url: '/posts'}];
  constructor() { }

  ngOnInit() {
  }

}
