import { FormGroup } from '@angular/forms';

export abstract class DynamicForm {
    public abstract get formGroup(): FormGroup;
}
