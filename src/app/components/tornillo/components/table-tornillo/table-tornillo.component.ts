import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { EliminarTornilloComponent } from '../eliminar-tornillo/eliminar-tornillo.component';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-table-tornillo',
  templateUrl: './table-tornillo.component.html',
  styleUrls: ['./table-tornillo.component.scss']
})
export class TableTornilloComponent implements OnInit {
  @Input() titles: any;
  @Input() itemTitle: any;
  page: any;
  itemsPerPageOptions: number[] = [5, 10, 20];
  itemsPerPage: any = 10;
  seleccionado: any = '';

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

