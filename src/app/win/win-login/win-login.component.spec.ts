import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinLoginComponent } from './win-login.component';

describe('WinLoginComponent', () => {
  let component: WinLoginComponent;
  let fixture: ComponentFixture<WinLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
