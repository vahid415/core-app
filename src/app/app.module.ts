import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InfrastructureModule, Environment } from '@navaco/mcb-infra';
import { PortalHostModule } from './host/infra/portal-host.module';
// import { SubsystemHostModule as PlatformSubsystemHostModule } from './host/platform/subsystem-host.module';
// import { SubsystemHostModule as CifSubsystemHostModule } from './host/cif/subsystem-host.module';
// import { SubsystemHostModule as BondSubsystemHostModule } from './host/bond/subsystem-host.module';
// import { SubsystemHostModule as ReportSubsystemHostModule } from './host/report/subsystem-host.module';
import { SubsystemHostModule as SecuritySubsystemHostModule } from './host/security/subsystem-host.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InfrastructureModule,
    PortalHostModule,

    // Add Subsystem Host Modules Here
    // PlatformSubsystemHostModule,
    // CifSubsystemHostModule,
    // BondSubsystemHostModule,
    // ReportSubsystemHostModule,
    SecuritySubsystemHostModule,

  ],
  providers: [
    { provide: Environment, useValue: environment },
    // { provide: ServiceHostToken, useValue: 'http://10.12.47.105:8090/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
