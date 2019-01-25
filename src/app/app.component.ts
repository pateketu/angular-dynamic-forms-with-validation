import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import Field from './dynamic-form/model/field';
import { FieldType } from './dynamic-form/model/fieldType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) {}

  title = 'dynamic-forms';
  fields: Field[]; // = [{id: 'title', label: 'Title', value: 'test', type: FieldType.text, validation: {required: true}}];

  ngOnInit(): void {

      setTimeout(() => {
        this.fields = [{id: 'title', label: 'Title', type: FieldType.text, validation: {required: true}}];
        // setTimeout(() => {
        //   this.fields[0] = Object.assign({}, this.fields[0], {value: 'fubar111'});
        // }, 5000);
    }, 1000);
  }

}
