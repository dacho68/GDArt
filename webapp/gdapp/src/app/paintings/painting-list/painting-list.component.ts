import { Component, OnInit } from '@angular/core';
import { Painting } from '../painting.model';

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrls: ['./painting-list.component.less']
})
export class PaintingListComponent implements OnInit {
<<<<<<< HEAD

  paintings: Painting [
   
  ];
=======
 /*   new Painting('Guernica', 'Picasso', '12323', 'http://www.bhiec.com.au/aaart_esl/aaresponse/guernica.jpg', 'aa')*/
  paintings: Painting [];
>>>>>>> Signup
  constructor() { }

  ngOnInit() {
  }

}
