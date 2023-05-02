import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { profile } from './profile';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  fields: string[] = [];
  model = new profile();
  profileForm!: FormGroup;

  getFormControlsFields() {
    const formGroupFields: Record<string, any> = {};
    for (const field of Object.keys(this.model)) {
       if(field == 'firstName' || field == 'lastName') {
          formGroupFields[field] = new FormControl("", Validators.required);
        } else {
          formGroupFields[field] = new FormControl("");
        }
        this.fields.push(field);
    }
    return formGroupFields;
  }

  buildForm() {
    
    const formGroupFields = this.getFormControlsFields();
    this.profileForm = new FormGroup(formGroupFields);
  }

  ngOnInit() {
    this.buildForm();
  }

  onSubmit(){
    this.input = new JsonPipe().transform(this.profileForm.value);
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Max',
      lastName: 'Mustermann'
    });
  }

  clear(){
    for (const controlName of Object.keys(this.profileForm.controls)) {
      this.profileForm.controls[controlName].setValue('');
    }
  }

  input!:string;
}
