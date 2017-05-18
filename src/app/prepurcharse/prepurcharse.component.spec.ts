import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepurcharseComponent } from './prepurcharse.component';

describe('PrepurcharseComponent', () => {
  let component: PrepurcharseComponent;
  let fixture: ComponentFixture<PrepurcharseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepurcharseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepurcharseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
