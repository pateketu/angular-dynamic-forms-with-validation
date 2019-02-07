import { ComponentFactoryResolver, ComponentRef, Directive, Input,
    OnInit, Type, ViewContainerRef, SimpleChange } from '@angular/core';
import InputBaseComponent from '../inputs/input-base';
import {TextComponent} from '../inputs/text';
import Field from '../model/field';

const components: {[type: string]: Type<InputBaseComponent>} = {
  text: TextComponent
};

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
    @Input() field: Field;

    component: ComponentRef<InputBaseComponent>;

    constructor(
      private resolver: ComponentFactoryResolver,
      private container: ViewContainerRef
    ) {}

  ngOnInit() {
    if (!components[this.field.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.field.type}).
        Supported types: ${supportedTypes}`
      );
    }
    const inputComponent = this.resolver.resolveComponentFactory<InputBaseComponent>(components[this.field.type]);
    this.component = this.container.createComponent(inputComponent);
    this.component.instance.field = this.field;
    this.component.instance.ngOnChanges({field: new SimpleChange(undefined, this.field, true)});
  }
}
