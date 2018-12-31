import { FieldType } from './fieldType';
import FieldValidation from './fieldValidation';

export default class Field {
    id: string;
    label: string;
    type: FieldType;
    validation: FieldValidation;
    value: any;
}
