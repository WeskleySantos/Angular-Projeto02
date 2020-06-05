import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitconBrlComponent } from './bitcon-brl.component';

describe('BitconBrlComponent', () => {
  let component: BitconBrlComponent;
  let fixture: ComponentFixture<BitconBrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitconBrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitconBrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
