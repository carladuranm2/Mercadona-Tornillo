import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-eliminar-tornillo',
  templateUrl: './eliminar-tornillo.component.html',
  styleUrls: ['./eliminar-tornillo.component.scss']
})
export class EliminarTornilloComponent {
  constructor(public dialogRef: MatDialogRef<EliminarTornilloComponent>,@Inject(MAT_DIALOG_DATA,) public data: any){
  }

  delete(){
    if(this.data.itemTitle.splice(this.data.item, 1)){
      this.dialogRef.close();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se ha borrado correctamente el tornillo',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
}
