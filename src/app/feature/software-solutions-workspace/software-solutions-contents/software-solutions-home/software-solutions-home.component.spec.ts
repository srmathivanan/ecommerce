import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareSolutionsHomeComponent } from './software-solutions-home.component';

describe('SoftwareSolutionsHomeComponent', () => {
  let component: SoftwareSolutionsHomeComponent;
  let fixture: ComponentFixture<SoftwareSolutionsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoftwareSolutionsHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwareSolutionsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
