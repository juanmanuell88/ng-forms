import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { FormPosterService } from '../services/form-poster.service';

@Component({
  selector: 'afc-tmpl-form',
  styleUrls: ['./employee-form.component.css'],
  templateUrl: './employee-form.component.html'
})
export class EmployeeFormComponent {
  hasPrimaryLanguageError = false;
  languages = ['English', 'Norsk'];

  model = new Employee('Andreas', 'Lindjo', true, 'w2', 'default', new Date());

  constructor(private formPoster: FormPosterService) {
    this.formPoster
      .getLanguages()
      .subscribe(
        data => (this.languages = data.languages),
        err => console.error('Error getting lang: ', err)
      );
  }

  submitForm() {
    // validate form
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if (this.hasPrimaryLanguageError) return;

    this.formPoster
      .postEmployeeForm(this.model)
      .subscribe(
        data => console.log('success: ', data),
        err => console.error('failed: ', err)
      );
  }

  validatePrimaryLanguage(value) {
    if (value === 'default') this.hasPrimaryLanguageError = true;
    else this.hasPrimaryLanguageError = false;
  }
}
