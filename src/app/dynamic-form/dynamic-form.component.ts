import { Component, forwardRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicForm } from './model/dynamicForm';

@Component({
    selector: 'dynamic-form',
    template: `<form novalidate (ngSubmit)="onSubmit()">
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

    onSubmit() {
        Object.keys(this.formGroup.controls).forEach((key) => {
            this.formGroup.controls[key].markAsDirty({onlySelf: true});
            this.formGroup.controls[key].updateValueAndValidity();
        });
    }
}
