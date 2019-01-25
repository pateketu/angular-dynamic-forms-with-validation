import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import FieldsContainerComponent from './fields-container.component';
import { CommonModule } from '@angular/common';
import { DynamicFormModule } from '../dynamic-form.module';
import Field from '..//model/field';
import { FieldType } from '../model/fieldType';
import { DynamicForm } from '../model/dynamicForm';
import { FormGroup } from '@angular/forms';

describe('Fields Container', () => {
    let fixture: ComponentFixture<FieldsContainerComponent>;
    let sut: any;

    const mockDynamicForm = {
        formGroup: new FormGroup({})
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [
            CommonModule,
            DynamicFormModule
          ],
          providers: [
                        {
                            provide: DynamicForm,
                            useValue: mockDynamicForm
                        }
                    ],
        }).compileComponents();
        fixture = TestBed.createComponent(FieldsContainerComponent);
        sut = fixture.componentInstance;
      }));

    it('should create the container', () => {
        expect(sut).toBeTruthy();
    });

    it('should render a label', () => {
        sut.fields = [{...new Field(), type: FieldType.text, label: 'Test Field'}];

        fixture.detectChanges();

        const element = fixture.debugElement.nativeElement;
        expect(element.querySelector('label').innerText).toBe('Test Field');
    });

    it('should render a text box', () => {
        sut.fields = [{...new Field(), type: FieldType.text}];

        fixture.detectChanges();

        const element = fixture.debugElement.nativeElement;
        expect(element.querySelector('input').type).toBe('text');
    });
});
