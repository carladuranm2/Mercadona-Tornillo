import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTornilloComponent } from './table-tornillo.component';

describe('TableTornilloComponent', () => {
  let component: TableTornilloComponent;
  let fixture: ComponentFixture<TableTornilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTornilloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTornilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
