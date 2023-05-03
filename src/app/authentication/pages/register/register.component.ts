import { Component } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;
  onSubmit() {
    // Handle form submission logic here
  }
  
}
