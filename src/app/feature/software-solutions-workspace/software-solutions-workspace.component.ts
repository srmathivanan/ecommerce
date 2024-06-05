import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sm-software-solutions-workspace',
  templateUrl: './software-solutions-workspace.component.html',
  styleUrl: './software-solutions-workspace.component.scss'
})
export class SoftwareSolutionsWorkspaceComponent implements OnInit {
//@Input() test: string = '';

  selectedPageName: string = '';
  constructor(){
    
  }

  ngOnInit(): void {
    console.log('Workspace is loaded');
    this.selectedPageName = 'home';
  }

  onSetSelectedPage(pageName: string): void {
    this.selectedPageName = pageName;
  }

}
