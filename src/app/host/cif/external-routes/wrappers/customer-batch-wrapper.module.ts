import { NgModule } from '@angular/core';
import {CustomerBatchModule} from '@navaco/mcb-cif';



@NgModule({
  exports: [CustomerBatchModule],
})
export class CustomerBatchWrapperModule { }
