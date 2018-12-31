import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import FieldsContainerComponent from './fields-container.component';
import { CommonModule } from '@angular/common';
import { DynamicFormModule } from '../dynamic-form.module';
import Field from '..//model/field';
import { FieldType } from '../model/fieldType';

describe('Fields Container', () => {
    let fixture: ComponentFixture<FieldsContainerComponent>;
    let sut: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [
            CommonModule,
            DynamicFormModule
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(FieldsContainerComponent);
        sut = fixture.componentInstance;
      }));

    it('should create the container', () => {
        expect(sut).toBeTruthy();
    });

    it('should render a text box', () => {
        sut.fields = [{...new Field(), type: FieldType.text}];

        fixture.detectChanges();

        const element = fixture.debugElement.nativeElement;
        expect(element.querySelector('input').type).toBe('text');
    });
});
