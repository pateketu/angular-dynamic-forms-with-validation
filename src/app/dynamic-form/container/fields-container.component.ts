import { Input, Component } from '@angular/core';
import Field from '../model/field';
import { template } from '@angular/core/src/render3';

@Component({
    selector: 'form-fields-container',
    templateUrl: './fields-container.html'
})
export default class FieldsContainerComponent {
    @Input() fields: Field[];

}
