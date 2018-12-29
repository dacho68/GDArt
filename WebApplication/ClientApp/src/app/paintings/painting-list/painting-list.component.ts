import { PaintingsService } from '../../services/paintings.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Painting } from '../../models/painting.model';

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrls: ['./painting-list.component.less']
})

export class PaintingListComponent implements OnInit {
  @Output() paintingWasSelected = new EventEmitter<Painting>();
  paintings: Painting [];

  constructor(private paintingService: PaintingsService) {
  }

  ngOnInit() {
   // const wPaint =  new Painting('Guernica', 'Picasso', '12323', 'http://www.bhiec.com.au/aaart_esl/aaresponse/guernica.jpg', 'abc');
   // this.paintings.push(wPaint);
    this.paintings = this.paintingService.getPaintings();
  }

  onPaintingSelected(painting: Painting) {
    this.paintingWasSelected.emit(painting);
  }
}
