import { Component, Input } from '@angular/core';
import { DavinciService } from '../davinci.service';
@Component({
  selector: 'app-textdavinci',
  templateUrl: './textdavinci.component.html',
  styleUrls: ['./textdavinci.component.css'],
  providers: [DavinciService],
})
export class TextdavinciComponent {
  @Input() input: string = '';
  petName: string = '';

  constructor(private davinci: DavinciService) { }

  async getCompletion(): Promise<string> {
    let prompt = this.getPrompt(this.input);
    let modelResponse = await this.davinci.getCompletion(prompt);

    return modelResponse;
  }

  async onClick() {
    if (this.input == '') {
      this.petName = 'Empty McEmptface';
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

      User: ${input}
    `;
    return prompt;
  }
}
