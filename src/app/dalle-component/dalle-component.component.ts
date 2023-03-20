import { Component } from '@angular/core';
import { DalleService } from '../dalle.service';
import { env } from '../../assets/env';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dalle-component',
  templateUrl: './dalle-component.component.html',
  styleUrls: ['./dalle-component.component.css']
})
export class DalleComponentComponent {
  constructor(private dalleService: DalleService, public sanitizer: DomSanitizer) { };
  imageURL = "";
  imagePrompt = "";

  onClick() {
    this.dalleService.generateImages(this.imagePrompt, 1, "256x256").subscribe(
      (response: any) => {
        let url = (response.data[0].url);
        this.imageURL = url.toString();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
