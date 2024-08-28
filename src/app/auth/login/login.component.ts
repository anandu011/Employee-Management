import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../../services/emp.service';
import { ClickTrackingService } from 'src/app/services/click-tracking.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginClicks: number = 0;
  clickData: { timestamp: string, count: number }[] = [];

  constructor(private empService: EmpService, private router: Router,private clickTrackingService: ClickTrackingService) {}
 ngOnInit(): void {
    this.loginClicks = this.clickTrackingService.getClickCount('loginClick');
    this.loginClicks = this.clickData.length;
  }
  login() {
    if (this.empService.login(this.username, this.password)) {
      this.router.navigate(['/home/profile']);
    } else {
      alert('Login failed');
    }
  }
}
