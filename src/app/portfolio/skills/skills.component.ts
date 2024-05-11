import { Component, OnInit, Renderer2  } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { MatCardModule} from '@angular/material/card';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, MatCardModule, CardComponent,CommonModule,MatIconModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  currentIndex = 0;
  currentIndex1 = 0;
  currentIndex2 = 0;
  currentIndex3 = 0;  
  currentIndex4 = 0;  
  cardsPerPage = 4;

  isMobile: boolean = false;

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    // Provjeravamo veličinu ekrana pri inicijalizaciji komponente
    this.checkIsMobile();
    // Takođe možemo dodati osluškivanje promjena veličine ekrana ako je potrebno
    this.renderer.listen('window', 'resize', () => this.checkIsMobile());
  }
  // Funkcija koja provjerava da li je uređaj mobilni
  checkIsMobile() {
    if (this.document.defaultView) {
      const isMobile = this.document.defaultView.innerWidth < 600;
      console.log('Da li je uređaj mobilni:', isMobile);
      this.isMobile = isMobile;
    }
  }
  
  // prog langg
  cards = [
    { title: 'C', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/c.png', description: ' ' },
    { title: 'C++', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/c++.png', description: ' ' },
    { title: 'C#', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/csh.png', description: ' ' },
    { title: 'JavaScript', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/js.png', description: ' ' },
    { title: 'PHP', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/php.png', description: ' ' },
    { title: 'Java', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/java.png', description: ' ' },
    { title: 'Python', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/python.png', description: ' ' },
    { title: 'Typescript', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/ts.png', description: ' ' },
  ];
  // frontend langg
  cards1 = [
   { title: 'HTML', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/html.png', description: ' ' },
    { title: 'CSS', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/css.png', description: ' ' },
    { title: 'SCSS', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/scss.png', description: ' ' },
    { title: 'Bootstrap', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/bst.png', description: ' '},
    { title: 'Angular', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/angular.png', description: ' ' },
    { title: 'React', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/react.png', description: ' ' },
    { title: 'Redux', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/redux.png', description: ' ' },
  ];
// backend langg
cards2 = [
  { title: 'NodeJs', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/nodejs.png', description: ' ' },
   { title: '.NET', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/net.png', description: ' ' },
   { title: 'SpringBoot', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/springboot.png', description: ' ' },
   { title: 'Laravel', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/laravel.png', description: ' '},
   { title: 'Django', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/django.png', description: ' ' },
   { title: 'Firebase', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/firebase.png', description: ' ' },
 ];
  
 // modbile app langg
cards3 = [
  { title: 'JavaAndroid', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/android.png', description: ' ' },
   { title: 'ReactNative', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/reactnative.png', description: ' ' },
   { title: 'SwiftUI', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/swift.png', description: ' ' },
   { title: 'Kotlin', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/kotlin.png', description: ' '},
 ];
 // database app langg
cards4 = [
  { title: 'MySQL', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/mysql.png', description: ' ' },
  { title: 'PostgreSQL', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/postgresql.png', description: ' ' },
  { title: 'MongoDB', imageSrc: 'https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/mongodb.png', description: ' ' },
 ];

 previous() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
  }
}
next() {
  if (this.currentIndex + 1 < this.cards.length) {
    this.currentIndex++;
  }
}
previous1() {
  if (this.currentIndex1 > 0) {
    this.currentIndex1--;
  }
}
next1() {
  if (this.currentIndex1 + 1 < this.cards1.length) {
    this.currentIndex1++;
  }
}
previous2() {
  if (this.currentIndex2 > 0) {
    this.currentIndex2--;
  }
}
next2() {
  if (this.currentIndex2 + 1 < this.cards2.length) {
    this.currentIndex2++;
  }
}
previous3() {
  if (this.currentIndex3 > 0) {
    this.currentIndex3--;
  }
}
next3() {
  if (this.currentIndex3 + 1 < this.cards3.length) {
    this.currentIndex3++;
  }
}
previous4() {
  if (this.currentIndex4 > 0) {
    this.currentIndex4--;
  }
}
next4() {
  if (this.currentIndex4 + 1 < this.cards4.length) {
    this.currentIndex4++;
  }
}
}
