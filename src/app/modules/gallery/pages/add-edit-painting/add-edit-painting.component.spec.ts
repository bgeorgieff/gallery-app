import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPaintingComponent } from './add-edit-painting.component';

describe('AddEditPaintingComponent', () => {
  let component: AddEditPaintingComponent;
  let fixture: ComponentFixture<AddEditPaintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPaintingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
