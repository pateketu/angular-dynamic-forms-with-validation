import { NgModule } from '@angular/core';
import FieldsContainerComponent from './container/fields-container.component';
import TextComponent from './inputs/text';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import DynamicFormComponent from './dynamic-form.component';

@NgModule({
    declarations: [
        FieldsContainerComponent,
        TextComponent,
        DynamicFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        FieldsContainerComponent,
        TextComponent,
        DynamicFormComponent
    ]
  })
  export class DynamicFormModule { }

