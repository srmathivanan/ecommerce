import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftwareSolutionsServicesComponent } from './software-solutions-services.component';

describe('SoftwareSolutionServicesComponent', () => {
  let component: SoftwareSolutionsServicesComponent;
  let fixture: ComponentFixture<SoftwareSolutionsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoftwareSolutionsServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwareSolutionsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
