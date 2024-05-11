import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { PcardComponent } from '../pcard/pcard.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule,PcardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  showESection:boolean=true;
  showPSection:boolean=true;
  showExSection:boolean=true;

  projects=[
    //title:"",description:"", image2Src:"",image3Src:""
    {
    title: "Website about the city of Sjenica",
    description: "The website about the city of Sjenica is made in pure HTML and CSS and JavaScript. Offers information about the city. It offers the possibility of information in Serbian and English. You can view the website at the [Sjenica Website]. And the code is available [here].",
    image2Src: "https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/sj1.png",
    image3Src: "https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/sj2.png",
    secretLink: "https://sjenica.netlify.app/",
    codeLink: "https://github.com/dinelaganovic/SJ-WD"
  },
  {//flightsscanner
    title:"Web application for searching flights, hotels and top places to visit",
    description:"FlightsScanner application is an application for user search of information related to a specific destination (available flight, ticket price, hotels, top places) as well as personal use of the application for the purpose of creating reminders for a specific destination or trip. The application was made in React, NodeJs, MongoDB. You can view the entire code at the [FS github link].", 
    image2Src: "https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/img3.png",
    image3Src:"https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/img4.png",
    secretLink: "",
    codeLink: "https://github.com/dinelaganovic/flighttsscanner"
  },  {//iszjz
    title:"Website of the information system of the Institute for Public Health",
    description:"The functions performed by the information system of the Institute for Public Health are the issuing of health cards, certification of health cards, regulation of travel expenses for treatment and certification of instructions for treatment. The information system of the Public Health Institute keeps records of health centers and employees (doctors), users and their treatment at the city level. Techniques for development are Angular, .NET, MySql. Access to the code is at the [ISZZJZ github link].", 
    image2Src: "https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/img7.png",
    image3Src:"https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/img8.png",
    secretLink: "https://github.com/dinelaganovic/IS_ZZJZ_Backend",
    codeLink: "https://github.com/dinelaganovic/IS_ZZJZ_Frontend"
  }, {//ebookstore
    title:"Online bookstore information system website",
    description:"Online bookstore information system website. On the site, customers can view books and order them online. The bookstore has its own warehouse of books and for each book it has information on the number of copies of the book in the warehouse. The bookstore periodically informs its customers about new books, discounts, and the like. This information and system is made in Angular and .NET, MySql. [Code access link].", 
    image2Src: "https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/img10.png",
    image3Src:"https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/img11.png",
    secretLink: "https://github.com/dinelaganovic/EBookStore_B",
    codeLink: "https://github.com/dinelaganovic/EBookStore_F"
  },{//laravel php school
    title:"Website for learning biology",
    description:"The website is built in Laravel, pure Html and Css. The website offers the possibility to create new courses, in which new users can be enrolled. The possibility of setting up materials and testing users. The possibility of creating news and user notifications about the new course. There are three types of users: administrator, professor and student. The link to the code is available [EBGithub link].", 
    image2Src: "https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/img6.jpeg",
    image3Src:"https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/img5.jpeg",
    secretLink: "",
    codeLink: "https://github.com/dinelaganovic/ELearningBiology_Site23"
  },
   {//dailymuslimapp 
    title:"DAILYMUSLIMAPP",
    description:"Muslim App, built in SwiftUI and Java SpringBoot, an application for apple mobile devices. It contains the entire Qur'an in Arabic and Bosnian transcription, Qibla compass from the current location, zikrs, prayers, 99 names of Allah. The [installation link and code is available here].", 
    image2Src: "https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/img13.png",
    image3Src:"https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/img14.png",
    secretLink: "https://github.com/dinelaganovic/DAILYMUSLIMAPP",
    codeLink: "https://github.com/dinelaganovic/DAILYMUSLIMAPP"
  }, {//signalclone
    title:"SignalC chat app for public chats",
    description:"Signal clone is a public chat app. It was made in ReactNative, [code link].", 
    image2Src: "https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/img17.png",
    image3Src:"https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/img18.png",
    secretLink: "https://github.com/dinelaganovic/SignalC",
    codeLink: "https://github.com/dinelaganovic/SignalC"
  }, {//klasifikacija slika u Pythonu
    title:"Identification and classification of animal images using machine learning methods",
    description:"Evaluation and development of convolutional neural networks ResNet50, AlexNet, InceptionV3 and EfficientNetB4 and classic machine learning methods Random Forest, SVM and Naive Bayes in Python for animal image classification. [The entire paper is available at the link].", 
    image2Src: "https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/img21.png",
    image3Src:"https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/img20.png",
    secretLink: "https://github.com/dinelaganovic/Identification-and-classification-of-animal-images-using-machine-learning-methods-",
    codeLink: "https://github.com/dinelaganovic/Identification-and-classification-of-animal-images-using-machine-learning-methods-"
  },{//eschool za ucenje matematike
    title:"Desktop application for learning Mathematics",
    description:"This project was developed using C# along with WPF and MySql. It provides a complete school management solution, including creating school and classroom profiles. Allows administration of all aspects of the application, including student, teacher and administrator profiles. It also offers the ability to create tests and conduct student testing. The code is available on the [github repository].", 
    image2Src: "https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/img22.png",
    image3Src:"https://raw.githubusercontent.com/dinelaganovic/ng-deploy/master/src/assets/img23.png",
    secretLink: "",
    codeLink: "https://github.com/dinelaganovic/CTAMathematics_WPF"
  },
  
  ];
  safeDescriptions!: SafeHtml[];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.safeDescriptions = this.projects.map(project => {
      return this.sanitizer.bypassSecurityTrustHtml(project.description
        .replace("[Sjenica Website]", `<a href="${project.secretLink}" target="_blank">Sjenica Website</a>`)
        .replace("[here]", `<a href="${project.codeLink}" target="_blank">here</a>`)
        .replace("[FS github link]", `<a href="${project.codeLink}" target="_blank">FS github link</a>` )
        .replace("[ISZZJZ github link]", `<a href="${project.codeLink}" target="_blank">ISZZJZ github link</a>` )
        .replace("[Code access link]", `<a href="${project.codeLink}" target="_blank">Code access link</a>` )
        .replace("[EBGithub link]", `<a href="${project.codeLink}" target="_blank">EBGithub link</a>` )
        .replace("[installation link and code is available here]",`<a href="${project.codeLink}" target="_blank">installation link and code is available here</a>`)
        .replace("[code link]",`<a href="${project.codeLink}" target="_blank">code link</a>` )
        .replace("[github repository]",`<a href="${project.codeLink}" target="_blank">github repository</a>` )
        .replace("[The entire paper is available at the link]",`<a href="${project.codeLink}" target="_blank">The entire paper is available at the link</a>` )
      );
    });
  }
}
