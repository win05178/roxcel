import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinRegisterComponent } from './win-register.component';

describe('WinRegisterComponent', () => {
  let component: WinRegisterComponent;
  let fixture: ComponentFixture<WinRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
