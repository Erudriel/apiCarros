import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesCarroComponent } from './detalhes-carro.component';

describe('DetalhesCarroComponent', () => {
  let component: DetalhesCarroComponent;
  let fixture: ComponentFixture<DetalhesCarroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesCarroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
