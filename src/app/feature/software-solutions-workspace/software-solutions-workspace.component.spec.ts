import { ComponentFixture, TestBed } from '@angular/core/testing'; 
import { SoftwareSolutionsWorkspaceComponent } from './software-solutions-workspace.component';
describe('SoftwareSolutionsManagementComponent', () => {
  let component: SoftwareSolutionsWorkspaceComponent;
  let fixture: ComponentFixture<SoftwareSolutionsWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoftwareSolutionsWorkspaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwareSolutionsWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
