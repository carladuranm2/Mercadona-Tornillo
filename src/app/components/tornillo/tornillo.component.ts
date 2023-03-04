import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CrearTornilloComponent } from './components/crear-tornillo/crear-tornillo.component'

const EXAMPLE_DATA = [
  {
    id: 1,
    nombre: 'Gegorges.com',
    precio: 'Working',
    formato: '01/24/2023to01/11/2024',
    marca: 'Sun 01,Mon 02, Tue 03',
    acciones: 'Delete'
  },
  {
    id: 2,
    nombre: 'Camila.com',
    precio: 'sent',
    formato: '01/24/2023to01/11/2024',
    marca: 'Sun 01,Mon 02, Tue 03',
    acciones: 'Delete'
  },
  {
    id: 3,
    nombre: 'Estefani.com',
    precio: 'Invoice',
    formato: '01/24/2023to01/11/2024',
    marca: 'Sun 01,Mon 02, Tue 03',
    acciones: 'Delete'
  },
  {
    id: 4,
    nombre: 'Maria.com',
    precio: 'Cancel',
    formato: '01/24/2023to01/11/2024',
    marca: 'Sun 01,Mon 02, Tue 03',
    acciones: 'Delete'
  },
  {
    id: 5,
    nombre: 'Andrea.com',
    precio: 'sent',
    formato: '01/24/2023to01/11/2024',
    marca: 'Sun 01,Mon 02, Tue 03',
    acciones: 'Delete'
  },
  {
    id: 6,
    nombre: 'Alejandra.com',
    precio: 'Paid',
    formato: '01/24/2023to01/11/2024',
    marca: 'Sun 01,Mon 02, Tue 03',
    acciones: 'Delete'
  },
  {
    id: 7,
    nombre: 'Jose.com',
    precio: 'sent',
    formato: '01/24/2023to01/11/2024',
    marca: 'Sun 01,Mon 02, Tue 03',
    acciones: 'Delete'
  },
  {
    id: 8,
    nombre: 'Fernando.com',
    precio: 'Invoice',
    formato: '01/24/2023to01/11/2024',
    marca: 'Sun 01,Mon 02, Tue 03',
    acciones: 'Delete'
  },
  {
    id: 9,
    nombre: 'Adrian.com',
    precio: 'Working',
    formato: '01/24/2023to01/11/2024',
    marca: 'Sun 01,Mon 02, Tue 03',
    acciones: 'Delete'
  },
  {
    id: 10,
    nombre: 'Andres.com',
    precio: 'Updated',
    formato: '01/24/2023to01/11/2024',
    marca: 'Sun 01,Mon 02, Tue 03',
    acciones: 'Delete'
  },
  {
    id: 11,
    nombre: 'Carla.com',
    precio: 'Ready',
    formato: '01/24/2023to01/11/2024',
    marca: 'Sun 01,Mon 02, Tue 03',
    acciones: 'Delete'
  }
]
@Component({
  encapsulation:ViewEncapsulation.None,
  selector: 'app-tornillo',
  templateUrl: './tornillo.component.html',
  styleUrls: ['./tornillo.component.scss']
})
export class TornilloComponent implements OnInit {
  // searchTerm$ = new Subject<string>();
  titles = [
    { id: 1, name: 'Nombre' },
    { id: 2, name: 'Precio' },
    { id: 3, name: 'formato' },
    { id: 4, name: 'Marca' },
    { id: 6, name: 'Acciones' },
  ]
  tableItems: any = []
  tableItemsToFilter: any = []
  datosFilters = [
    { id: 1, name: 'Sent', value: 'sent', status: false },
    { id: 2, name: 'Working', value: 'working', status: false },
    { id: 3, name: 'Updated', value: 'updated', status: false },
    { id: 4, name: 'Ready', value: 'ready', status: false },
    { id: 5, name: 'Invoice', value: 'invoice', status: false },
    { id: 6, name: 'Paid', value: 'paid', status: false },
    { id: 7, name: 'Cancel', value: 'cancel', status: false },
  ];
  totalItems: number = 0;
  pageSize: number = 0;
  previousPage: number = 0;
  showPagination: boolean = false;
  page: any;
  order: any;
  currentPage: number = 0;
  active: boolean = false;
  filter = {
    'filter': ''
  }
  constructor(private router: Router, public dialog: MatDialog) {

  }
  ngOnInit () {
    this.getDataTableService();
  }

  getDataTableService () {
    setTimeout(() => {
      this.tableItems = EXAMPLE_DATA
      this.tableItemsToFilter = EXAMPLE_DATA
    }, 2000)
  }

  openCreateProduct () {
    this.dialog.open(CrearTornilloComponent);
  }
}
