import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductspecsComponent } from './viewproductspecs.component';

describe('ViewproductspecsComponent', () => {
  let component: ViewproductspecsComponent;
  let fixture: ComponentFixture<ViewproductspecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewproductspecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproductspecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
