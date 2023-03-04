import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-tornillo',
  templateUrl: './table-tornillo.component.html',
  styleUrls: ['./table-tornillo.component.scss']
})
export class TableTornilloComponent implements OnInit{
  @Input() titles: any;
  @Input() itemTitle:any;
  page: any;

  ngOnInit(){

  }
}
