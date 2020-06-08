import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSocialNetworkComponent } from './link-social-network.component';

describe('LinkSocialNetworkComponent', () => {
  let component: LinkSocialNetworkComponent;
  let fixture: ComponentFixture<LinkSocialNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkSocialNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkSocialNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
