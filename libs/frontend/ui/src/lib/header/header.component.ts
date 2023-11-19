import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'avans-indiv-p2-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  imagePath?: string;
  ngOnInit(): void {
    this.imagePath = '/assets/logo.jpg';
  }
}
