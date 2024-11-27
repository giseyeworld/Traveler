
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';






@Component({
  selector: 'app-registration',
 templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone : true,
  imports : [CommonModule ,ReactiveFormsModule]
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {}


  get f() { 
    return this.registrationForm.controls; 
  }

  onSubmit() {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }

    console.log('Form submitted successfully!', this.registrationForm.value);
    
  }
}
