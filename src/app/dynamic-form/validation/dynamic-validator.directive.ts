import { Directive, Input, ElementRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import Field from '../model/field';
@Directive({
    selector: '[dynamicFieldValidator]',
    providers: [{provide: NG_VALIDATORS, useExisting: DynamicFieldValidatorDirective, multi: true}]
  })
export class DynamicFieldValidatorDirective implements Validator {
    @Input('dynamicFieldValidator') @Required field: Field;



    validate(control: AbstractControl): {[key: string]: any} | null {
    //   let isValid = true;
    //   let fieldError = null;

      if (control.pristine) {
          return null;
      }

    //   Object.keys(validators).forEach((key) => {
    //      const validationType = validators[key];
    //      if (!this.gsForm.validationEngine.validate(this.field, validationType)) {
    //         isValid = false;
    //         fieldError = this.gsForm.validationEngine.getErrorMsg(this.field, validationType);
    //      }
    //   });

    //   return isValid
    //     ? null : {fieldError};

    }
  }
