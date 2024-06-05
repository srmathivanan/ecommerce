import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sm-software-solutions-contents',
  templateUrl: './software-solutions-contents.component.html',
  styleUrl: './software-solutions-contents.component.scss'
})
export class SoftwareSolutionsContentsComponent implements OnInit {
  @Input() selectedPage: string = '';
  constructor() {

  }

  ngOnInit(): void {
    console.log('Content page is loaded');
  } 
}
