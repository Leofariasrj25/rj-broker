import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListaPropiedadesComponent } from './item-lista-propiedades.component';

describe('ItemListaPropiedadesComponent', () => {
  let component: ItemListaPropiedadesComponent;
  let fixture: ComponentFixture<ItemListaPropiedadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListaPropiedadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListaPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
