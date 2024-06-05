import { ComponentFixture, TestBed } from '@angular/core/testing'; 
import { SoftwareSolutionsHeaderComponent } from './software-solutions-header.component';

describe('SoftwareSolutionsHeaderComponent', () => {
  let component: SoftwareSolutionsHeaderComponent;
  let fixture: ComponentFixture<SoftwareSolutionsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoftwareSolutionsHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwareSolutionsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
