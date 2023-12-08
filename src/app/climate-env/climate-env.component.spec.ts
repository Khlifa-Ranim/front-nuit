import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateEnvComponent } from './climate-env.component';

describe('ClimateEnvComponent', () => {
  let component: ClimateEnvComponent;
  let fixture: ComponentFixture<ClimateEnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimateEnvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimateEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
