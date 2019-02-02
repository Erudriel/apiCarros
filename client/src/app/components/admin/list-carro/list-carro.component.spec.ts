import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarroComponent } from './list-carro.component';

describe('ListCarroComponent', () => {
  let component: ListCarroComponent;
  let fixture: ComponentFixture<ListCarroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCarroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
