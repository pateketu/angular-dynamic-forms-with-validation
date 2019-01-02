import { Component, forwardRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicForm } from './model/dynamicForm';

@Component({
    selector: 'dynamic-form',
    template: `<form novalidate>
                    <ng-content></ng-content>
                </form>`,
    providers: [{
        provide: DynamicForm,
        useExisting: forwardRef(() => DynamicFormComponent)
    }]
})

export default class DynamicFormComponent extends DynamicForm   {
    private form: FormGroup = new FormGroup({});

    public get formGroup(): FormGroup { return this.form; }
}
