import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastlesListItemComponent } from './castles-list-item.component';

describe('CastlesListItemComponent', () => {
  let component: CastlesListItemComponent;
  let fixture: ComponentFixture<CastlesListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastlesListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastlesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
