import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficasComponent } from './graficas/graficas.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    NavbarComponent,
    GraficasComponent
  ],
  exports:[
    NavbarComponent,
    GraficasComponent
  ],
  imports: [
    // Directivas propias de angualr (ngif . ngfor...)
    CommonModule,
    RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ]
})
export class ComponentsModule { }
