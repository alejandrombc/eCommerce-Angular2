import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedProdComponent } from './feed-prod.component';

describe('FeedProdComponent', () => {
  let component: FeedProdComponent;
  let fixture: ComponentFixture<FeedProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
