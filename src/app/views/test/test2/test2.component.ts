import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test2',
  standalone: true,
  imports: [],
  templateUrl: './test2.component.html',
  styleUrl: './test2.component.scss'
})
export class Test2Component {
  constructor(private router: Router) { }

  confirmLogout() {
    if (confirm("Are you sure you want to logout?")) {
    
      // Xác nhận logout, chuyển hướng về trang launcher
      this.logout();
    }
  }

  logout() {
    localStorage.removeItem('session_login');
    this.router.navigate(['/pages/launcher']);
  }

}
