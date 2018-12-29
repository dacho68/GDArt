import { PaintingsService } from '../services/paintings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.less'],
  providers: [PaintingsService]
})
export class PaintingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
