import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTornilloComponent } from './crear-tornillo.component';

describe('CrearTornilloComponent', () => {
  let component: CrearTornilloComponent;
  let fixture: ComponentFixture<CrearTornilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTornilloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTornilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
