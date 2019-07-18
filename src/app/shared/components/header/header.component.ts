import { Component, OnInit } from '@angular/core';

import { MenuItems } from '../../helpers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems: { label: string, routerLink: string }[] = MenuItems;

  constructor() { }

  ngOnInit() {
  }

}
