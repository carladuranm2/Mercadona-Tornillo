import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CrearTornilloComponent } from './components/crear-tornillo/crear-tornillo.component'
import { OrdenarColumnasTornilloComponent } from './components/ordenar-columnas-tornillo/ordenar-columnas-tornillo.component';

const EXAMPLE_DATA = [
  {
    id: 1,
    nombre: 'Tornillo naranja',
    precio: '280',
    formato: '01/24/2023to01/11/2024',
    marca: 'Sun 01,Mon 02, Tue 03',
  },
  {
    id: 2,
    nombre: 'Tornillo amarillo',
    precio: '240',
    formato: '01/24/2023to01/11/2024',
    marca: 'Sun 01,Mon 02, Tue 03',
  },
  {
    id: 3,
    nombre: 'Tornillo nude',
    precio: '230',
    formato: '01/24/2023to01/11/2024',
    marca: 'Sun 01,Mon 02, Tue 03',
  },
  {
    id: 4,
    nombre: 'Tornillo magenta',
    precio: '220',
    formato: '01/24/2023to01/11/2024',
    marca: 'Sun 01,Mon 02, Tue 03',
  },
  {
    id: 5,
    nombre: 'Tornillo blanco',
    precio: '120',
    formato: '01/24/2023to01/11/2024',
    marca: 'Sun 01,Mon 02, Tue 03',
  },
  {
    id: 6,
    nombre: 'Tornillo lila',
    precio: '230',
    formato: '01/24/2023to01/11/2024',
    marca: 'Sun 01,Mon 02, Tue 03',
  },
  {
    id: 7,
    nombre: 'Tornillo azul',
    precio: '150',
    formato: '01/24/2023to01/11/2024',
    marca: 'Sun 01,Mon 02, Tue 03',
  },
  {
    id: 8,
    nombre: 'Tornillo morado',
    precio: '100',
    formato: '01/24/2023to01/11/2024',
    marca: 'Sun 01,Mon 02, Tue 03',
  },
  {
    id: 9,
    nombre: 'Tornillo gris',
    precio: '200',
    formato: '01/24/2023to01/11/2024',
    marca: 'Sun 01,Mon 02, Tue 03',
  },
  {
    id: 10,
    nombre: 'Tornillo negro',
    precio: '300',
    formato: '01/24/2023to01/11/2024',
    marca: 'Sun 01,Mon 02, Tue 03',
  },
  {
    id: 11,
    nombre: 'Tornillo Verde',
    precio: 'Ready',
    formato: '01/24/2023to01/11/2024',
    marca: 'Sun 01,Mon 02, Tue 03',
  }
]
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-tornillo',
  templateUrl: './tornillo.component.html',
  styleUrls: ['./tornillo.component.scss']
})
export class TornilloComponent implements OnInit {
  titles = [
    { name: 'Nombre', visible: true, locked: false },
    { name: 'Precio', visible: true, locked: false },
    { name: 'Formato', visible: true, locked: false },
    { name: 'Marca', visible: true, locked: false },
    { name: 'Acciones', visible: true, locked: false }
  ]
  columnStates = [];
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
  isLoading:boolean = true;
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
    this.titles.forEach(column => {
      this.columnStates.push({ name: column.name, visible: column.visible, locked: column.locked });
    });
  }

  getDataTableService () {
    this.isLoading = true;
    setTimeout(() => {
      this.tableItems = EXAMPLE_DATA
      this.tableItemsToFilter = EXAMPLE_DATA
      this.isLoading= false;
    }, 2000)
  }

  openCreateProduct () {
    this.dialog.open(CrearTornilloComponent,
      {
        width: '600px',
        data: { name: EXAMPLE_DATA }
      },
    );
  }
  openConfiguration () {
    const dialogRef = this.dialog.open(OrdenarColumnasTornilloComponent,
      {
        width: '600px',
        data: { name: this.titles }
      },
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.titles = result;
      }
    });
  }
}
