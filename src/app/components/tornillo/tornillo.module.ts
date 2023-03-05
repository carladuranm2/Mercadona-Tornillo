import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TornilloRoutingModule } from './tornillo-routing.module';
import { TornilloComponent } from './tornillo.component';
import { CrearTornilloComponent } from './components/crear-tornillo/crear-tornillo.component';
import { TableTornilloComponent } from './components/table-tornillo/table-tornillo.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from '@angular/material/dialog';
import {SharedModule}  from 'src/app/shared/shared.module'
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EliminarTornilloComponent } from './components/eliminar-tornillo/eliminar-tornillo.component';
import {MatSelectModule} from '@angular/material/select';
import { OrdenarColumnasTornilloComponent } from './components/ordenar-columnas-tornillo/ordenar-columnas-tornillo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';




@NgModule({
  declarations: [
    TornilloComponent,
    CrearTornilloComponent,
    TableTornilloComponent,
    EliminarTornilloComponent,
    OrdenarColumnasTornilloComponent
  ],
  imports: [
    TornilloRoutingModule,
    NgxPaginationModule,
    SharedModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    DragDropModule
  ],
  exports:[
    TornilloComponent,
    CrearTornilloComponent,
    TableTornilloComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TornilloModule { }
