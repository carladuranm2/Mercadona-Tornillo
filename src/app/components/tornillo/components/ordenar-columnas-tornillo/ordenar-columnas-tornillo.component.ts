import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  encapsulation:ViewEncapsulation.None,
  selector: 'app-ordenar-columnas-tornillo',
  templateUrl: './ordenar-columnas-tornillo.component.html',
  styleUrls: ['./ordenar-columnas-tornillo.component.scss']
})
export class OrdenarColumnasTornilloComponent implements OnInit  {
  public columns = [
    { name: 'Nombre', visible: true, locked: false },
    { name: 'Precio', visible: true, locked: false },
    { name: 'Formato', visible: true, locked: false },
    { name: 'Marca', visible: true, locked: false },
    { name: 'Acciones', visible: true, locked: false }
  ]
  constructor(public dialogRef: MatDialogRef<OrdenarColumnasTornilloComponent>,@Inject(MAT_DIALOG_DATA,) public data: any){
    this.columns = data.name
  }
  ngOnInit () {
    console.log(this.data.name,"data name");

  }
  closeConfiguration(){
    this.dialogRef.close();
  }
  drop(event: CdkDragDrop<string[]>) {
    console.log('this.column before', this.columns)
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    console.log('this.column after', this.columns)
  }
  result(){
    this.data.name = this.columns
    console.log(this.data.name);

    this.dialogRef.close(this.columns);

  }
  toggleLock(column) {
    console.log(column, " column");
    column.locked = !column.locked;
  }
}
