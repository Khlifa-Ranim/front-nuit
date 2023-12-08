import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRessourcesComponent } from './liste-ressources.component';

describe('ListeRessourcesComponent', () => {
  let component: ListeRessourcesComponent;
  let fixture: ComponentFixture<ListeRessourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeRessourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
