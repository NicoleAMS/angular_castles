import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastlesDetailComponent } from './castles-detail.component';

describe('CastlesDetailComponent', () => {
  let component: CastlesDetailComponent;
  let fixture: ComponentFixture<CastlesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastlesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastlesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
