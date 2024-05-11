import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  linkinLink:string="https://www.linkedin.com/in/dinela-ganovi%C4%87-aaa975209";
  githubLink:string="https://github.com/dinelaganovic";
  emailAdress='dinelaganovic99@gmail.com';
  constructor(private route:Router){

  }
  onHome(){
    window.scrollTo({ top: 0, behavior: 'smooth' as ScrollBehavior });
  }   
  onAbout(){
    this.route.navigate(['./portfolio-website/about'])
  }
  onContact(){
    this.route.navigate(['./portfolio-website/contact'])
  }
}
