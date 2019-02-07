import { Component, Input } from '@angular/core';
import Field from '../model/field';
import { FormControl } from '@angular/forms';
import InputBaseComponent from './input-base';
import { DynamicForm } from '../model/dynamicForm';

@Component({
    selector: 'form-text',
    template: `<input type="text" [formControl]="formControl" />`
})

export class TextComponent extends InputBaseComponent  {
    @Input() field: Field;
    protected formControl: FormControl = new FormControl(null, { updateOn: 'blur'});

    constructor(private parent: DynamicForm) {
        super(parent);
    }

}
