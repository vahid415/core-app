import { SubsystemExternalRouteConfig } from '@navaco/mcb-infra';
import { SubsystemRootComponent, SubsystemContextComponent } from '@navaco/mcb-cif';

export default {
  usecasesRoutes: [
    {
      path: 'cif',
      component: SubsystemContextComponent,
      children: [{
        path: '',
        component: SubsystemRootComponent,
        children: [
          {
            path: 'real-customer',
            loadChildren: () => import('./wrappers/real-customer-wrapper.module').then(x => x.RealCustomerWrapperModule)
          },
          {
            path: 'legal-customer',
            loadChildren: () => import('./wrappers/legal-customer-wrapper.module').then(x => x.LegalCustomerWrapperModule)
          },
          {
            path: 'real-passing-customer',
            loadChildren: () => import('./wrappers/real-passing-customer-wrapper.module').then(x => x.RealPassingCustomerWrapperModule)
          },
          {
            path: 'legal-passing-customer',
            loadChildren: () => import('./wrappers/legal-passing-customer-wrapper.module').then(x => x.LegalPassingCustomerWrapperModule)
          },
          {
            path: 'real-customer-batch',
            loadChildren: () => import('./wrappers/customer-batch-wrapper.module').then(x => x.CustomerBatchWrapperModule)
          },
          {
            path: 'customer-search',
            loadChildren: () => import('./wrappers/customer-search-wrapper.module').then(x => x.CustomerSearchWrapperModule)
          },
          {
            path: 'customer-group-mng',
            loadChildren: () => import('./wrappers/customer-group-mng-wrapper.module').then(x => x.CustomerGroupMngWrapperModule)
          },
          {
            path: 'customer-letter',
            loadChildren: () => import('./wrappers/letter-wrapper.module').then(x => x.LetterWrapperModule)
          },
          {
            path: 'customer-signature-mng',
            loadChildren: () => import('./wrappers/customer-signature-mng-wrapper.module').then(x => x.CustomerSignatureMngWrapperModule)
          },
          {
            path: 'change-customer-status',
            loadChildren: () => import('./wrappers/change-customer-status-wrapper.module').then(x => x.ChangeCustomerStatusWrapperModule)
          },

          {
            path: 'person-inquiry',
            loadChildren: () => import('./wrappers/person-inquiry-wrapper.module').then(x => x.PersonInquiryWrapperModule)
          },
          {
            path: 'customer-relation-mng',
            loadChildren: () => import('./wrappers/customer-relation-mng-wrapper.module').then(x => x.CustomerRelationMngWrapperModule)
          },
          {
            path: 'customer-address',
            loadChildren: () => import('./wrappers/customer-address-wrapper.module').then(x => x.CustomerAddressWrapperModule)
          },
          {
            path: 'mcb-group-customer-assign-to-list',
            loadChildren: () => import('./wrappers/group-customer-assign-to-list-wrapper.module')
              .then(x => x.GroupCustomerAssignToListWrapperModule)
          },
          {
            path: 'person-list',
            loadChildren: () => import('./wrappers/person-list-wrapper.module').then(x => x.PersonListWrapperModule)
          },
          {
            path: 'person-item',
            loadChildren: () => import('./wrappers/person-list-item-wrapper.module').then(x => x.PersonListItemWrapperModule)
          },
        ]
      }]
    }],
  stateProcessorsRoutes: []

} as SubsystemExternalRouteConfig;
