import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelLogoComponent } from './sel-logo.component';

describe('SelLogoComponent', () => {
  let component: SelLogoComponent;
  let fixture: ComponentFixture<SelLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
