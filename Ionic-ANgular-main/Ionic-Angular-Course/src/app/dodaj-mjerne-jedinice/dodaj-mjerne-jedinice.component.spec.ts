import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DodajMjerneJediniceComponent } from './dodaj-mjerne-jedinice.component';

describe('DodajMjerneJediniceComponent', () => {
  let component: DodajMjerneJediniceComponent;
  let fixture: ComponentFixture<DodajMjerneJediniceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajMjerneJediniceComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DodajMjerneJediniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
