import { NgModule } from '@angular/core';
import { SubsystemManager } from '@navaco/mcb-infra';
import { SubsystemModule, SUBSYSTEM } from '@navaco/mcb-cif';
import externalRoutes from './external-routes';

@NgModule({
  exports: [SubsystemModule]
})
export class SubsystemHostModule {
  constructor(subsystemManager: SubsystemManager) {
    // UNCOMMENT FOLLOWING LINE IF YOU ARE CREATING A BUSINESS SUBSYSTEM
    subsystemManager.register(SUBSYSTEM, externalRoutes);

    // UNCOMMENT FOLLOWING LINE IF YOU ARE CREATING A SHARED SUBSYSTEM
    // subsystemManager.register(SUBSYSTEM);
  }
}
