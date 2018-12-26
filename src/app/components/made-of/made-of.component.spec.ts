import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadeOfComponent } from './made-of.component';

describe('MadeOfComponent', () => {
  let component: MadeOfComponent;
  let fixture: ComponentFixture<MadeOfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadeOfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadeOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
