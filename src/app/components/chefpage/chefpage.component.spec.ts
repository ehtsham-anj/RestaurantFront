import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefpageComponent } from './chefpage.component';

describe('ChefpageComponent', () => {
  let component: ChefpageComponent;
  let fixture: ComponentFixture<ChefpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
