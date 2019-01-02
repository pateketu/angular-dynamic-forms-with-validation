import Field from '../model/field';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { DynamicForm } from '../model/dynamicForm';

export default abstract class InputBaseComponent implements OnInit, OnChanges {
    private _form: FormGroup;

    constructor(parent: DynamicForm) {
        this._form = parent.formGroup;
    }

    ngOnInit(): void {
        if (!this._form.controls[this.field.id ]) {
            if (this.field.validation && this.field.validation.required) {
                this.formControl.setValidators(Validators.required);
            }
            this._form.addControl(this.field.id, this.formControl);

        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.field && changes.field.currentValue) {
            this.formControl.setValue(this.field.value);
        }
    }

    protected abstract get formControl(): FormControl;
    public abstract get field(): Field;
    public abstract set field(feild: Field);


}
