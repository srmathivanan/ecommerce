import { ComponentFixture, TestBed } from '@angular/core/testing';  
import { SoftwareSolutionsFooterComponent } from './software-solutions-footer.component';

describe('SoftwareSolutionsHeaderComponent', () => {
  let component: SoftwareSolutionsFooterComponent;
  let fixture: ComponentFixture<SoftwareSolutionsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoftwareSolutionsFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwareSolutionsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
