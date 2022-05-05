import { NgModule } from '@angular/core';
import { NgxArkaniaComponent } from './ngx-arkania.component';
import { PruebaDirective } from './prueba.directive';



@NgModule({
  declarations: [NgxArkaniaComponent, PruebaDirective],
  imports: [
  ],
  exports: [NgxArkaniaComponent, PruebaDirective]
})
export class NgxArkaniaModule { }
