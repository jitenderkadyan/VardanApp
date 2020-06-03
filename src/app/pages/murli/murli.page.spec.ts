import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MurliPage } from './murli.page';

describe('MurliPage', () => {
  let component: MurliPage;
  let fixture: ComponentFixture<MurliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MurliPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MurliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
