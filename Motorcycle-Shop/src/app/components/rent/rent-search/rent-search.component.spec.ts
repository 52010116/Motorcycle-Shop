/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RentSearchComponent } from './rent-search.component';

describe('RentSearchComponent', () => {
  let component: RentSearchComponent;
  let fixture: ComponentFixture<RentSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
