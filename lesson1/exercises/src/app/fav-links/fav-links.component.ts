import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
//favLinks = ['https://www.w3schools.com/' , 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'];
favLinks: string [] = [];
  constructor() { }

  ngOnInit() {
  }

}
