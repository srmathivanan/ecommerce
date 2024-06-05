import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sm-software-solutions-header',
  templateUrl: './software-solutions-header.component.html',
  styleUrl: './software-solutions-header.component.scss'
})
export class SoftwareSolutionsHeaderComponent implements OnInit {
  @Output() setSelectedPage: EventEmitter<string> = new EventEmitter();

  showSubMenu: boolean = false;

  selectedPage: string = ''; 
  constructor() {

  }

  ngOnInit(): void {
    console.log('Header is loaded');
    this.selectedPage = 'home';
  }

  onPageChange(pageName: string): void {
    this.selectedPage = pageName;
    this.setSelectedPage.emit(pageName);
  }

  toggleSubMenu() {
    this.showSubMenu = !this.showSubMenu;
  }
}
