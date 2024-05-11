import { Component , Input} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string= '';
  @Input() imageSrc: string= '';
  @Input() description: string= '';

  /**
   *
   */
  constructor( private route: Router) {
  }
  onAbout() {
    this.route.navigate(['/portfolio-website/about'], { fragment: 'project-section' }).then(success => {
      if (success) {
        const skillSection = document.getElementById('project-section');
        if (skillSection) {
          skillSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        console.error('Navigation failed');
      }
    });
  }
}
