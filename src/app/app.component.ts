import { Component } from '@angular/core';
import Field from './dynamic-form/model/field';
import { FieldType } from './dynamic-form/model/fieldType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-forms';
  fields: Field[] = [{id: 'title', label: 'Title', value: 'test', type: FieldType.text, validation: {required: true}}];
}
