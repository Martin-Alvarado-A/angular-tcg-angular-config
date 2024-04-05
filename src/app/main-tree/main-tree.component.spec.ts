import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTreeComponent } from './main-tree.component';

describe('MainTreeComponent', () => {
  let component: MainTreeComponent;
  let fixture: ComponentFixture<MainTreeComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
