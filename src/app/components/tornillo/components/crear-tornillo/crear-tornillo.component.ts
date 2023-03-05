import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-tornillo',
  templateUrl: './crear-tornillo.component.html',
  styleUrls: ['./crear-tornillo.component.scss']
})
export class CrearTornilloComponent implements OnInit {
  newProduct: FormGroup;
  public cantidad: number = 0
  constructor(public dialogRef: MatDialogRef<CrearTornilloComponent>,@Inject(MAT_DIALOG_DATA,) public data: any, private fb: FormBuilder,){

  }
  ngOnInit() {
    this.newProduct = this.fb.group({
      nombre: new FormControl('', Validators.required),
      precio: new FormControl(0, Validators.required),
      formato: new FormControl('',Validators.required),
      marca:  new FormControl('',Validators.required)
    });
  }

  onSubmit(){
    if(this.newProduct.valid){
      console.log(this.data.name, "son los productos");
      this.data.name.push(this.newProduct.value);
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debe completar todos los campos!',
      })
    }
    this.dialogRef.close();
  }
  incrementarCantidad(){
    console.log(this.newProduct.value.precio);
    this.cantidad = this.cantidad + 1;
    this.newProduct.value.precio.setValue(this.cantidad);
  }
  decrementarCantidad(){

    if(this.cantidad===0){
      this.cantidad = this.cantidad - 0;
      this.newProduct.value.precio.setValue(this.cantidad);
    }else {
      this.cantidad = this.cantidad - 1;
      this.newProduct.value.precio.setValue(this.cantidad);
    }
  }
}
