import { Component, Input } from '@angular/core';
import Field from '../model/field';

@Component({
    selector: 'form-text',
    template: `<input type="text" [(ngModel)]="field.value"/>`
})
export default class TextComponent {
    @Input() field: Field;
}
