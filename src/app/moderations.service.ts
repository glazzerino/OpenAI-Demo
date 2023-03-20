import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModerationsService {

  constructor(private http: HttpClient) { }
  apiKey = process.env["OPENAI_API_KEY"];

  async callOpenAIModerationsAPI(input: string): Promise<Response> {
    const url = "https://api.openai.com/v1/moderations";
    const data = { input };
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.apiKey}`
    };

    return await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data)
    });
  }
}
