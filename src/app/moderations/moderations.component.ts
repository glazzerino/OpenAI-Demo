import { Component } from '@angular/core';
import { env } from '../../assets/env';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-moderations',
  templateUrl: './moderations.component.html',
  styleUrls: ['./moderations.component.css']
})



export class ModerationsComponent {
  moderation = false;
  user_input = "";
  result = "";

  async callOpenAIModerationsAPI(input: string, apiKey: string): Promise<Response> {
    const url = "https://api.openai.com/v1/moderations";
    const data = { input };
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    };

    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(data)
    });

    return response;
  }

  onClick() {
    this.callOpenAIModerationsAPI(this.user_input, env.openai).then(response => {
      response.json().then(json => {
        this.result = JSON.stringify(json.results[1].categories, null, 2);
      });
    });
  }
}
