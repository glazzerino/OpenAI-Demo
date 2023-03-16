import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextdavinciComponent } from './textdavinci.component';

describe('TextdavinciComponent', () => {
  let component: TextdavinciComponent;
  let fixture: ComponentFixture<TextdavinciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextdavinciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextdavinciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
