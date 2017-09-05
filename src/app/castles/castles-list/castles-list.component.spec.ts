import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastlesListComponent } from './castles-list.component';

describe('CastlesListComponent', () => {
  let component: CastlesListComponent;
  let fixture: ComponentFixture<CastlesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastlesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
