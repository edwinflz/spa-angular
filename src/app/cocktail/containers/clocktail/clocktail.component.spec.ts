import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClocktailComponent } from './clocktail.component';

describe('ClocktailComponent', () => {
  let component: ClocktailComponent;
  let fixture: ComponentFixture<ClocktailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClocktailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
