import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Goal Achievement';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_su1A912bTHtERCrdjTg0o5Hh4QSM4xsAxQ&usqp=CAU';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS56zGsTj5S0dHdPFQNg4yf84KuBVtak1Soow&usqp=CAU';

  constructor() { }

  ngOnInit() {
  }

}