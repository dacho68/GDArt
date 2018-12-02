import { Component, OnInit } from '@angular/core';
import { Painting } from '../painting.model';

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrls: ['./painting-list.component.less']
})
export class PaintingListComponent implements OnInit {

  paintings: Painting [
   
  ];
  constructor() { }

  ngOnInit() {
  }

}
