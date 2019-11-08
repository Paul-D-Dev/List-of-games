import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePsPageComponent } from './game-ps-page.component';

describe('GamePsPageComponent', () => {
  let component: GamePsPageComponent;
  let fixture: ComponentFixture<GamePsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
