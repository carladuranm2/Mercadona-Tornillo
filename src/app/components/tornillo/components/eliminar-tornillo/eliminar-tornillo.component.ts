import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar-tornillo',
  templateUrl: './eliminar-tornillo.component.html',
  styleUrls: ['./eliminar-tornillo.component.scss']
})
export class EliminarTornilloComponent {
  constructor(public dialogRef: MatDialogRef<EliminarTornilloComponent>,@Inject(MAT_DIALOG_DATA,) public data: any){
  }

  delete(){
    console.log(this.data.itemTitle[this.data.item].nombre, " elemento");
    this.data.itemTitle.splice(this.data.item, 1);
    this.dialogRef.close();
  }
}
