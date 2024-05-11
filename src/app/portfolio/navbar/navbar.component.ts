import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private route:Router){

  }
  onHome(){
    this.route.navigate(['./portfolio-website/'])
  }
  onSkills() {
    /*this.route.navigate(['/portfolio-website/home'], { fragment: 'skills-section' }).then(success => {
      if (success) {
        const skillSection = document.getElementById('skills-section');
        if (skillSection) {
          skillSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        console.error('Navigation failed');
      }
    });*/  //navigacija preko sekcije
    this.route.navigate(['./portfolio-website/skills'])
  }
  
  onAbout(){
    this.route.navigate(['./portfolio-website/about'])
  }
  onContact(){
    this.route.navigate(['./portfolio-website/contact'])
  }
}
