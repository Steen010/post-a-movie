import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'avans-indiv-p2-about',
  templateUrl: './about.component.html',
  styles: [],
})
export class AboutComponent implements OnInit {
  imagePath?: string;
  ngOnInit(): void {
    this.imagePath = '/assets/erd.png';
  }
}
