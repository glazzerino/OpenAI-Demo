import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-parent-menu',
  templateUrl: './parent-menu.component.html',
  styleUrls: ['./parent-menu.component.css']
})
export class ParentMenuComponent {
  constructor(private router: Router) { }

  onButtonClick(path: string) {
    // load textdavinci component
    this.router.navigate(['/' + path]);

  }
}


