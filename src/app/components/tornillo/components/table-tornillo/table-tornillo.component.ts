import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { EliminarTornilloComponent } from '../eliminar-tornillo/eliminar-tornillo.component';

@Component({
  selector: 'app-table-tornillo',
  templateUrl: './table-tornillo.component.html',
  styleUrls: ['./table-tornillo.component.scss']
})
export class TableTornilloComponent implements OnInit {
  @Input() titles: any;
  @Input() itemTitle: any;
  page: any;

  constructor(public dialog: MatDialog) {
  }
  ngOnInit () {

  }
  delete (i: number) {
    this.dialog.open(EliminarTornilloComponent,
      {width:'600px',
      data: { item: i, itemTitle: this.itemTitle }},
      );
  }

}

