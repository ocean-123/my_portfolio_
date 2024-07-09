import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface Tab {
  label: string;
  content: string;
}@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  constructor(private router: Router) {}
  navigateTo(path: string) {
    this.router.navigate([path]);
  }

 
}
