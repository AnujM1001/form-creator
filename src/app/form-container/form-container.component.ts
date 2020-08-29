import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {

  @Input() formOptionsData;
  fg: FormGroup;
  @Output() formSubmitEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.fg = new FormGroup({});
    this.formOptionsData.formFields.forEach(field => {
      const validators: AbstractControl = field.validations.map(validation => {
        if (validation.value || validation.value === 0) {
          return this.getValidation(validation);
        }
      });
      this.fg.addControl(
        field.name,
        new FormControl(field.value, validators)
      );
    });
    console.log(this.fg);
  }

  private getValidation(validation): Validators {
    switch (validation.type) {
      case 'required':
        return validation.value ? Validators.required : null;
      case 'min':
        return validation.value || validation.value === 0 ? Validators.min(validation.value) : null;
      case 'max':
        return validation.value || validation.value === 0 ? Validators.max(validation.value) : null;
      case 'pattern':
        return validation.value ? Validators.pattern(validation.value) : null;
      default:
        return null;
    }

  }

  saveForm(): void {
    this.formSubmitEvent.emit(this.fg.value);
  }

}
