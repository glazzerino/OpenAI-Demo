import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalleComponentComponent } from './dalle-component.component';

describe('DalleComponentComponent', () => {
  let component: DalleComponentComponent;
  let fixture: ComponentFixture<DalleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DalleComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DalleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
