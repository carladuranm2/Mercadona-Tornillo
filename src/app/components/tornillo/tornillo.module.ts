import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TornilloRoutingModule } from './tornillo-routing.module';
import { TornilloComponent } from './tornillo.component';
import { CrearTornilloComponent } from './components/crear-tornillo/crear-tornillo.component';
import { TableTornilloComponent } from './components/table-tornillo/table-tornillo.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import {SharedModule}  from 'src/app/shared/shared.module'



@NgModule({
  declarations: [
    TornilloComponent,
    CrearTornilloComponent,
    TableTornilloComponent
  ],
  imports: [
    CommonModule,
    TornilloRoutingModule,
    NgxPaginationModule,
    SharedModule,
    MatDialogModule,
    FormControl,
    MatDialog
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TornilloModule { }
