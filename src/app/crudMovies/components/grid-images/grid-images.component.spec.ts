import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridImagesComponent } from './grid-images.component';

describe('GridImagesComponent', () => {
  let component: GridImagesComponent;
  let fixture: ComponentFixture<GridImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
