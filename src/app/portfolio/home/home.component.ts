import { Component, OnInit, Renderer2  } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { MatCardModule} from '@angular/material/card';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, MatCardModule, CardComponent,CommonModule,MatIconModule,SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
