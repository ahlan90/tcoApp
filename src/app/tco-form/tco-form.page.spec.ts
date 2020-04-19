import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TcoFormPage } from './tco-form.page';

describe('TcoFormPage', () => {
  let component: TcoFormPage;
  let fixture: ComponentFixture<TcoFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcoFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TcoFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
