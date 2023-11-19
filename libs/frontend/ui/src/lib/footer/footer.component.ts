import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'avans-indiv-p2-footer',
  templateUrl: './footer.component.html',
  styles: [],
})
export class FooterComponent implements OnInit {
  imagePath?: string;
  ngOnInit(): void {
    this.imagePath = '/assets/logo.jpg';
  }
}
