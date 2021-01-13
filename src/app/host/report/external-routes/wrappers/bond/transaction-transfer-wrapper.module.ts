import { NgModule } from '@angular/core';
import {TransactionTransferModule} from "@navaco/mcb-report";

@NgModule({
  exports: [TransactionTransferModule]
})

export class TransactionTransferWrapperModule { }
