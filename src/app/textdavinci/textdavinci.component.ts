import { Component } from '@angular/core';
import { env } from '../../assets/env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-textdavinci',
  templateUrl: './textdavinci.component.html',
  styleUrls: ['./textdavinci.component.css']
})

export class TextdavinciComponent {
  input: string = "";
  constructor(private httpClient: HttpClient) { };
  apiKey = env.openai;
  endpoint = "https://api.openai.com/v1/completions"
  petName: string = "";

  ngOnInit() {
    console.log(env.openai);
  }

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
      this.petName = "Empty McEmptface";
      return;
    }

    let completion = await this.getCompletion();
    this.petName = completion;
  }


  getPrompt(input: string): string {
    let prompt = `
    You are helping a user come up with a new name for their pet. The pet type is provided by the user, and you must 
    provide the name for the pet. The name must be cute and easy to remember, and be related to the pet type.

    User: Dog
    Fluffy McFluff

    User: Cat
    Kitty Paws the Third

    User: Fish
    Nemo

    User: Bird
    Feathery McFeather

    User: Snake
    Metal Gear Reptile

    User: Spider
    Arachnus the Great

    User: ${input}
  `;
    return prompt;
  }


}

