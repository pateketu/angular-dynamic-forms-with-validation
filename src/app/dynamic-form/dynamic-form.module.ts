import { NgModule } from '@angular/core';
import FieldsContainerComponent from './container/fields-container.component';
import TextComponent from './inputs/text';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        FieldsContainerComponent,
        TextComponent,
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        FieldsContainerComponent,
        TextComponent
    ]
  })
  export class DynamicFormModule { }

