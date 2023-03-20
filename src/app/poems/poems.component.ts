import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { env } from '../../assets/env';

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.css']
})

export class PoemsComponent {
  input: string = "";
  constructor(private httpClient: HttpClient) { };
  apiKey = env.openai;
  endpoint = "https://api.openai.com/v1/completions"
  poemTopic: string = "";

  async runPrompt(prompt: string): Promise<string> {
    // Get input from the input form
    let modelResponse = "";

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.apiKey}`);
    let body = {
      prompt: prompt,
      model: "text-davinci-003",
      temperature: 0.7,
    }

    try {
      const data: any = await this.httpClient.post(this.endpoint, body, { headers: headers }).toPromise();
      if (data.choices) {
        console.log(data)
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


  async getCompletion(): Promise<string> {
    let prompt = this.getPrompt(this.input);
    let modelResponse = await this.runPrompt(prompt);

    return modelResponse;
  }

  async onClick() {
    if (this.input == "") {
      this.poemTopic = "";
      return;
    }

    let completion = await this.getCompletion();
    this.poemTopic = completion;
  }


  getPrompt(input: string): string {
    let prompt = `
    You are helping a human write a poem about any given topic that they wish.
    
    User: a poem about clouds
    AI: Behold the cloud, so white and pure, Drifting in the sky, so free and sure, A canvas of imagination, A dreamer's inspiration.

    User: write a poem about a dog
    AI: A loyal friend with a wagging tail, A dog's love never seems to fail, With eyes so full of devotion, And a heart full of pure emotion.

    User: ${input}
    AI: 
  `;
    return prompt;
  }


}

