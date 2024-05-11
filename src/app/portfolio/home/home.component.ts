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
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, MatCardModule, CardComponent,CommonModule,MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

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
    if (this.document.defaultView) { // Proveravamo da li postoji defaultView pre pristupa innerWidth
      this.isMobile = this.document.defaultView.innerWidth < 600; // Postavljamo prag širine ekrana za mobilne uređaje
    }
  }
  // prog langg
  cards = [
    { title: 'C', imageSrc: '../../../assets/c.png', description: ' ' },
    { title: 'C++', imageSrc: '../../../assets/c++.png', description: ' ' },
    { title: 'C#', imageSrc: '../../../assets/csh.png', description: ' ' },
    { title: 'JavaScript', imageSrc: '../../../assets/js.png', description: ' ' },
    { title: 'PHP', imageSrc: '../../../assets/php.png', description: ' ' },
    { title: 'Java', imageSrc: '../../../assets/java.png', description: ' ' },
    { title: 'Python', imageSrc: '../../../assets/python.png', description: ' ' },
    { title: 'Typescript', imageSrc: '../../../assets/ts.png', description: ' ' },
  ];
  // frontend langg
  cards1 = [
   { title: 'HTML', imageSrc: '../../../assets/html.png', description: ' ' },
    { title: 'CSS', imageSrc: '../../../assets/css.png', description: ' ' },
    { title: 'SCSS', imageSrc: '../../../assets/scss.png', description: ' ' },
    { title: 'Bootstrap', imageSrc: '../../../assets/bst.png', description: ' '},
    { title: 'Angular', imageSrc: '../../../assets/angular.png', description: ' ' },
    { title: 'React', imageSrc: '../../../assets/react.png', description: ' ' },
    { title: 'Redux', imageSrc: '../../../assets/redux.png', description: ' ' },
  ];
// backend langg
cards2 = [
  { title: 'NodeJs', imageSrc: '../../../assets/nodejs.png', description: ' ' },
   { title: '.NET', imageSrc: '../../../assets/net.png', description: ' ' },
   { title: 'SpringBoot', imageSrc: '../../../assets/springboot.png', description: ' ' },
   { title: 'Laravel', imageSrc: '../../../assets/laravel.png', description: ' '},
   { title: 'Django', imageSrc: '../../../assets/django.png', description: ' ' },
   { title: 'Firebase', imageSrc: '../../../assets/firebase.png', description: ' ' },
 ];
  
 // modbile app langg
cards3 = [
  { title: 'JavaAndroid', imageSrc: '../../../assets/android.png', description: ' ' },
   { title: 'ReactNative', imageSrc: '../../../assets/reactnative.png', description: ' ' },
   { title: 'SwiftUI', imageSrc: '../../../assets/swift.png', description: ' ' },
   { title: 'Kotlin', imageSrc: '../../../assets/kotlin.png', description: ' '},
 ];
 // database app langg
cards4 = [
  { title: 'MySQL', imageSrc: '../../../assets/mysql.png', description: ' ' },
  { title: 'PostgreSQL', imageSrc: '../../../assets/postgresql.png', description: ' ' },
  { title: 'MongoDB', imageSrc: '../../../assets/mongodb.png', description: ' ' },
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
