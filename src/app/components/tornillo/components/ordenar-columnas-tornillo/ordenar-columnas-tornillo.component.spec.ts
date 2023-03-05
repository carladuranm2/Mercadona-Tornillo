import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenarColumnasTornilloComponent } from './ordenar-columnas-tornillo.component';

describe('OrdenarColumnasTornilloComponent', () => {
  let component: OrdenarColumnasTornilloComponent;
  let fixture: ComponentFixture<OrdenarColumnasTornilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenarColumnasTornilloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenarColumnasTornilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
