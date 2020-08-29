import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-creator';

  formStructureData = {
    submitButtonText: 'save',
    resetButtonOptions: {
      enable: true,
    },
    formFields: [
      {
        controlType: 'text',
        value: 'text',
        name: 'text',
        label: 'label',
        validations: [
          {
            type: 'required',
            value: true
          },
          {
            type: 'pattern',
            value: /^[a-z]{1,2}$/
          }
        ]
      },
      {
        controlType: 'number',
        value: 0,
        name: 'number',
        label: 'number',
        validations: [
          {
            type: 'required',
            value: true,
          }, {
            type: 'min',
            value: 0,
          }, {
            type: 'max',
            value: 100,
          }, {
            type: 'pattern',
            value: /^[0-9]{1,2}$/
          }
        ]
      },
      {
        controlType: 'textarea',
        value: 'textarea',
        name: 'textarea',
        label: 'textarealabel',
        rows: 2,
        validations: [
          {
            type: 'required',
            value: true
          }
        ]
      },
      {
        controlType: 'dropdown',
        value: 'ddvalue1',
        name: 'dropdown',
        label: 'labelDropDown',
        validations: [
          {
            type: 'required',
            value: true
          }
        ],
        options: [{
          displayText: 'option1',
          value: 'ddvalue1'
        }, {
          value: 'ddvalue2'
        }
        ]
      }
    ]
  };

  saveForm(formValues): void {
    console.log(formValues);
  }
}
