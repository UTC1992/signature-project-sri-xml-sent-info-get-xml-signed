import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShell } from './home-shell';

describe('HomeShell', () => {
  let component: HomeShell;
  let fixture: ComponentFixture<HomeShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeShell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeShell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
