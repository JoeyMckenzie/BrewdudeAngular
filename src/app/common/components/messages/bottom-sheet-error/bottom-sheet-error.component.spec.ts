import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetErrorComponent } from './bottom-sheet-error.component';

describe('BottomSheetErrorComponent', () => {
  let component: BottomSheetErrorComponent;
  let fixture: ComponentFixture<BottomSheetErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSheetErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
