import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeusersComponent } from './listeusers.component';

describe('ListeusersComponent', () => {
  let component: ListeusersComponent;
  let fixture: ComponentFixture<ListeusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeusersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
