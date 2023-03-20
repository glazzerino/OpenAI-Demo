import { DavinciService } from "../davinci.service";
export class PoemsComponent {
  input: string = "";
  constructor(private openaiService: DavinciService) { };
  poemTopic: string = "";

  async getCompletion(): Promise<string> {
    let prompt = this.getPrompt(this.input);
    let modelResponse = await this.openaiService.getCompletion(prompt);
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
