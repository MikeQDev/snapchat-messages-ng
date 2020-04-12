import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapMessageComponent } from './snap-message.component';

describe('SnapMessageComponent', () => {
  let component: SnapMessageComponent;
  let fixture: ComponentFixture<SnapMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
