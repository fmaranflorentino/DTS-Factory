import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems: { label: string, routerLink: string }[] = [
    {
      label: 'Dashboard',
      routerLink: '/'
    },
    {
      label: 'Enviar Nova Mensagem',
      routerLink: '/dashboard/new-message'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
