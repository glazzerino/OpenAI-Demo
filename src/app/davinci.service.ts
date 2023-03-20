import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DavinciService {
  private apiKey = process.env["OPENAI_API_KEY"]
  private endpoint = 'https://api.openai.com/v1/completions';

  constructor(private httpClient: HttpClient) { }

  async getCompletion(prompt: string): Promise<string> {
    let modelResponse = '';

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.apiKey}`);

    let body = {
      prompt: prompt,
      model: 'text-davinci-003',
      temperature: 0.7,
    };

    try {
      const data: any = await this.httpClient
        .post(this.endpoint, body, { headers: headers })
        .toPromise();
      if (data.choices) {
        modelResponse = data.choices[0].text;
        console.log(modelResponse);
      } else {
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }

    return modelResponse;
  }
}
