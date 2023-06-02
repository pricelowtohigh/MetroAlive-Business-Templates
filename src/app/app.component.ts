import { Component, OnInit } from '@angular/core';

import { RouterModule } from '@angular/router';
import { TemplateService } from './template.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'MetroAlive Business Sites';

  constructor(
    private templateService: TemplateService
  ) { }

    ngOnInit(): void {
      this.templateService.get().pipe().subscribe(templates => {
        console.log(templates)
      })
  }
}
