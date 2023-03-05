import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-crear-tornillo',
  templateUrl: './crear-tornillo.component.html',
  styleUrls: ['./crear-tornillo.component.scss']
})
export class CrearTornilloComponent implements OnInit {
  newProduct: FormGroup;
  public cantidad: number = 0;
  constructor(public dialogRef: MatDialogRef<CrearTornilloComponent>, @Inject(MAT_DIALOG_DATA,) public data: any, private fb: FormBuilder,) {

  }
  ngOnInit () {
    this.newProduct = this.fb.group({
      nombre: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      formato: new FormControl('', Validators.required),
      marca: new FormControl('', Validators.required)
    });
  }

  onSubmit () {
    if (this.newProduct.valid) {
      this.data.name.push(this.newProduct.value);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Ha sido guardado exitosamente ${this.newProduct.value.nombre}`,
        showConfirmButton: false,
        timer: 2000
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debe completar todos los campos!',
      })
    }
    this.dialogRef.close();
  }

  incrementarCantidad () {
    this.cantidad = this.cantidad + 1;
    this.newProduct.get('precio').setValue(this.cantidad);
    console.log(this.cantidad, "k e paza");

  }
  decrementarCantidad () {
    if (this.cantidad === 0) {
      this.cantidad = this.cantidad - 0;
      this.newProduct.get('precio').setValue(this.cantidad);
    } else {
      this.cantidad = this.cantidad - 1;
      this.newProduct.get('precio').setValue(this.cantidad);
    }
  }
}
