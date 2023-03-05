import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTornilloComponent } from './eliminar-tornillo.component';

describe('EliminarTornilloComponent', () => {
  let component: EliminarTornilloComponent;
  let fixture: ComponentFixture<EliminarTornilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarTornilloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarTornilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
