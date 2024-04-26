import { Component, } from '@angular/core';
import { NgForm } from '@angular/forms';
import{AuthService} from'../../../auth.service'
@Component({
  selector: 'app-document2',
  standalone: true,
  imports: [],
  templateUrl: './document2.component.html',
  styleUrl: './document2.component.scss'
})
export class Document2Component {
  Loading = false;
  constructor(public authService: AuthService){}  
  onSignup(form: NgForm){  
    if(form.invalid){  
      return;  
    }  
    this.authService.CreateUser(form.value.email, form.value.password);  
  }  

}
