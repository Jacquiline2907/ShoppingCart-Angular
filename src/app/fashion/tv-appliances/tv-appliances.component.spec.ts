import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvAppliancesComponent } from './tv-appliances.component';

describe('TvAppliancesComponent', () => {
  let component: TvAppliancesComponent;
  let fixture: ComponentFixture<TvAppliancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvAppliancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvAppliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
