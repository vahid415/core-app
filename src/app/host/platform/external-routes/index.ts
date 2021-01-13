import { SubsystemExternalRouteConfig } from '@navaco/mcb-infra';
import { SubsystemRootComponent, SubsystemContextComponent } from '@navaco/mcb-platform';

export default {
  usecasesRoutes: [
    {
      path: 'platform',
      component: SubsystemContextComponent,
      children: [{
        path: '',
        component: SubsystemRootComponent,
        children: [
          {
            path: 'bank-mng',
            loadChildren: () => import('./wrappers/bank-management-wrapper.module').then(x => x.BankMngWrapperModule)
          },
          {
            path: 'calendar-type-mng',
            loadChildren: () => import('./wrappers/calendar-mng-wrapper.module').then(x => x.CalendarTypeMngWrapperModule)
          },
          {
            path: 'event-mng',
            loadChildren: () => import('./wrappers/event-mng-wrapper.module').then(x => x.EventMngWrapperModule)
          },
          {
            path: 'daily-detail-mng',
            loadChildren: () => import('./wrappers/daily-detail-mng-wrapper.module').then(x => x.DailyDetailMngWrapperModule)
          },
          {
            path: 'channel-mng',
            loadChildren: () => import('./wrappers/channel-mng-wrapper.module').then(x => x.ChannelMngWrapperModule)
          },
          {
            path: 'currency',
            loadChildren: () => import('./wrappers/currency-wrapper.module').then(x => x.CurrencyWrapperModule)
          },
          {
            path: 'geo-division',
            loadChildren: () => import('./wrappers/geo-division-wrapper.module').then(x => x.GeoDivisionWrapperModule)
          },
          {
            path: 'geo-division-mehr',
            loadChildren: () => import('./wrappers/geo-division-mehr-wrapper.module').then(x => x.GeoDivisionMehrWrapperModule)
          },
          {
            path: 'organization-mng',
            loadChildren: () => import('./wrappers/organization-management-wrapper.module').then(x => x.OrganizationMngWrapperModule)
          },
          {
            path: 'organization-type-position',
            loadChildren: () => import('./wrappers/organization-type-position-management-wrapper.module')
              .then(x => x.OrgTypePositionMngWrapperModule)
          },
          {
            path: 'other-bank-branch-mng',
            loadChildren: () => import('./wrappers/other-bank-branch-wrapper.module').then(x => x.OtherBankBranchWrapperModule)
          },
          {
            path: 'parameter-group',
            loadChildren: () => import('./wrappers/parameter-mng-wrapper.module').then(x => x.ParameterMngWrapperModule)
          },
          {
            path: 'position-mng',
            loadChildren: () => import('./wrappers/position-wrapper.module').then(x => x.PositionWrapperModule)
          },
        ]
      }]
    }
  ],
  stateProcessorsRoutes: []
} as SubsystemExternalRouteConfig;
