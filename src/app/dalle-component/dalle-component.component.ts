import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../assets/env';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-dalle-component',
  templateUrl: './dalle-component.component.html',
  styleUrls: ['./dalle-component.component.css']
})
export class DalleComponentComponent {
  constructor(private http: HttpClient, public sanitizer: DomSanitizer) { };
  imageURL = "";
  imagePrompt = "";


  async generateImages(prompt: string, n: number, size: string, apiKey: string): Promise<Response> {
    const url = 'https://api.openai.com/v1/images/generations';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    };
    const data = {
      prompt,
      n,
      size,
    };
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(data)
    });

    return response;

  }

  onClick() {
    this.generateImages(this.imagePrompt, 1, "256x256", env.openai).then(response => {
      response.json().then(json => {
        let url = (json.data[0].url);
        this.imageURL = url.toString();
      });
    });
  }
}
