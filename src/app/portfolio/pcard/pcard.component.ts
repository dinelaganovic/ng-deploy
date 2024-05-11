import { Component, Input } from '@angular/core';
import {  OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-pcard',
  standalone: true,
  imports: [],
  templateUrl: './pcard.component.html',
  styleUrl: './pcard.component.css'
})
export class PcardComponent {
  @Input() projectTitle!: string;
  @Input() projectDescription!: string;
  @Input() image2Src!: string;
  @Input() image3Src!: string;
  @Input() secretLink!: string;
  @Input() codeLink!: string;

  safeDescription!: SafeHtml;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.safeDescription = this.sanitizer.bypassSecurityTrustHtml(this.projectDescription
      .replace("[Sjenica Website]", `<a href="${this.secretLink}" target="_blank">Sjenica Website</a>`)
      .replace("[here]", `<a href="${this.codeLink}" target="_blank">here</a>`)
      .replace("[FS github link]", `<a href="${this.codeLink}" target="_blank">FS github link</a>` )
      .replace("[ISZZJZ github link]", `<a href="${this.codeLink}" target="_blank">ISZZJZ github link</a>` )
      .replace("[Code access link]", `<a href="${this.codeLink}" target="_blank">Code access link</a>` )
      .replace("[EBGithub link]", `<a href="${this.codeLink}" target="_blank">EBGithub link</a>` )
      .replace("[installation link and code is available here]",`<a href="${this.codeLink}" target="_blank">installation link and code is available here</a>`)
      .replace("[code link]",`<a href="${this.codeLink}" target="_blank">code link</a>` )
      .replace("[github repository]",`<a href="${this.codeLink}" target="_blank">github repository</a>` )
      .replace("[The entire paper is available at the link]",`<a href="${this.codeLink}" target="_blank">The entire paper is available at the link</a>` )

    );
  }
}
