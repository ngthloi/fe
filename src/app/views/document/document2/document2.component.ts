import { Component,} from '@angular/core';
import { NgForm, } from '@angular/forms';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-document2',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './document2.component.html',
  styleUrls: ['./document2.component.scss']
})
export class Document2Component {
  registerForm: FormGroup;
  successMessage: string = ''; 
  constructor(private as: AuthServiceService , private fb: FormBuilder, private router: Router) {
    this.registerForm = fb.group({
      // id: ['', Validators.required],
      name: ['', Validators.required],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
    
    });

  }

  submitRegisterForm() {
    console.log('Attempting to submit form');
    
    if (this.registerForm.valid) {
      this.as.registerUser(this.registerForm.value).subscribe((response)=>{
        if(response){
          this.successMessage = 'Add user thành công';
          this.router.navigate(['/login']);
        }
      })
    }
  } 

}
