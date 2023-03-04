import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageTornillosComponent } from './home-page-tornillos.component';

describe('HomePageTornillosComponent', () => {
  let component: HomePageTornillosComponent;
  let fixture: ComponentFixture<HomePageTornillosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageTornillosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageTornillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
