import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeaturesModule } from '@avans-indiv-p2/frontend/features';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { UiModule } from '@avans-indiv-p2/ui';

@Component({
  standalone: true,
  imports: [RouterModule, FeaturesModule, UiModule],
  selector: 'avans-indiv-p2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'post-a-movie';

  ngOnInit(): void {
    initFlowbite();
  }
}
