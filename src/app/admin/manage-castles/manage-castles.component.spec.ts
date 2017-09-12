import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCastlesComponent } from './manage-castles.component';

describe('ManageCastlesComponent', () => {
  let component: ManageCastlesComponent;
  let fixture: ComponentFixture<ManageCastlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCastlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCastlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
