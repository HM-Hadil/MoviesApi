import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCrudContentComponent } from './main-crud-content.component';

describe('MainCrudContentComponent', () => {
  let component: MainCrudContentComponent;
  let fixture: ComponentFixture<MainCrudContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCrudContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainCrudContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
