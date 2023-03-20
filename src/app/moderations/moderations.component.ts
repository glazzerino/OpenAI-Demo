import { Component } from '@angular/core';
import { ModerationsService } from '../moderations.service';

@Component({
  selector: 'app-moderations',
  templateUrl: './moderations.component.html',
  styleUrls: ['./moderations.component.css']
})
export class ModerationsComponent {
  moderation = false;
  user_input = "";
  result = "";

  constructor(private moderationsService: ModerationsService) { }

  onClick() {
    this.moderationsService.callOpenAIModerationsAPI(this.user_input)
      .then(response => {
        response.json().then(data => {
          this.result = JSON.stringify(data.results[1].categories, null, 2);
        })
      });
  }
}
