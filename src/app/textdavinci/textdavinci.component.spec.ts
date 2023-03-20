import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TextdavinciComponent } from './textdavinci.component';

describe('TextdavinciComponent', () => {
  let component: TextdavinciComponent;
  let fixture: ComponentFixture<TextdavinciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextdavinciComponent],
      imports: [HttpClientTestingModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TextdavinciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it("should display an h1 tag", () => {
    const h1 = fixture.nativeElement.querySelector("h1");
    expect(h1.textContent).toContain("DaVinci");
  });
});
