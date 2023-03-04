import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-tornillo',
  templateUrl: './crear-tornillo.component.html',
  styleUrls: ['./crear-tornillo.component.scss']
})
export class CrearTornilloComponent implements OnInit {
  // newProduct: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){

  }
  ngOnInit() {
    // this.newProduct = new FormGroup({
    //   name: new FormControl('', Validators.required),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    // });
  }

  onSubmit(){

  }
}
