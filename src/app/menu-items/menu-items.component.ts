import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../MenuItem';
import { menuItems } from '../menu-items';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
  menuItems: MenuItem[] = menuItems;

  constructor() { }

  ngOnInit(): void {
  }

}
