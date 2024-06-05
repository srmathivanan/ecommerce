import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareSolutionsContentsComponent } from './software-solutions-contents.component';

describe('SoftwareSolutionsHomeComponent', () => {
  let component: SoftwareSolutionsContentsComponent;
  let fixture: ComponentFixture<SoftwareSolutionsContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoftwareSolutionsContentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwareSolutionsContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
