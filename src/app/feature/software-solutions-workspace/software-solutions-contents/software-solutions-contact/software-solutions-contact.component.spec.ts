import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareSolutionsContactComponent } from './software-solutions-contact.component';

describe('SoftwareSolutionsHomeComponent', () => {
  let component: SoftwareSolutionsContactComponent;
  let fixture: ComponentFixture<SoftwareSolutionsContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoftwareSolutionsContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwareSolutionsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
