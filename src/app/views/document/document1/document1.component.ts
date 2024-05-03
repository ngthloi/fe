import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document1',
  standalone: true,
  imports: [NgFor],
  templateUrl: './document1.component.html',
  styleUrl: './document1.component.scss'
})
export class Document1Component implements OnInit {
  userList : any;
  isCreateMode : boolean;
  user:  any;
  constructor(private httpClient: HttpClient) {
    this.userList=[];
    this.isCreateMode = false;

   }

  ngOnInit(): void {
    this.getUserList()
    
  }
  getUserList(){
    this.httpClient.get('http://localhost:3000/signupUsersList').subscribe((result: any )=>
      {
        this.userList=result;
      });
  }
  addUser(){
    this.isCreateMode = true ;

  }

}
