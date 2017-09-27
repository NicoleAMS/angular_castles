import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastlesSearchComponent } from './castles-search.component';

describe('CastlesSearchComponent', () => {
  let component: CastlesSearchComponent;
  let fixture: ComponentFixture<CastlesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastlesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastlesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
