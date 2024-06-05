import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareSolutionsAboutComponent } from './software-solutions-about.component';

describe('SoftwareSolutionsAboutComponent', () => {
  let component: SoftwareSolutionsAboutComponent;
  let fixture: ComponentFixture<SoftwareSolutionsAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoftwareSolutionsAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwareSolutionsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
