import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import Field from '../model/field';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'form-text',
    template: `<input type="text" [formControl]="formControl" />`
})

export default class TextComponent implements OnChanges  {
    @Input() field: Field;
    protected formControl: FormControl = new FormControl(null, { updateOn: 'blur'});

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.field && changes.field.currentValue) {

            this.formControl.setValue(this.field.value);
            if (this.field.validation && this.field.validation.required) {
                this.formControl.setValidators(Validators.required);
            }

        }
    }
}
