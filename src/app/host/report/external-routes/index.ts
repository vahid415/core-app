import { SubsystemExternalRouteConfig } from '@navaco/mcb-infra';
import { SubsystemRootComponent, SubsystemContextComponent } from '@navaco/mcb-report';

export default {
  usecasesRoutes: [
    {
      path: 'report',
      component: SubsystemContextComponent,
      children: [{
        path: '',
        component: SubsystemRootComponent,
        children: [
          {
            path: 'block-and-unblock',
            loadChildren: () => import('./wrappers/bond/block-and-unblock-wrapper.module').then(x => x.BlockAndUnblockWrapperModule)
          },
          {
            path: 'customer',
            loadChildren: () => import('./wrappers/bond/customer-wrapper.module').then(x => x.customerWrapperModule)
          },
          {
            path: 'interest-payment',
            loadChildren: () => import('./wrappers/bond/interest-payment-wrapper.module').then(x => x.InterestPaymentWrapperModule)
          },
          {
            path: 'transaction-detail',
            loadChildren: () => import('./wrappers/bond/transaction-detail-wrapper.module').then(x => x.TransactionDetailWrapperModule)
          },
          {
            path: 'transaction-sell-redemption',
            loadChildren: () => import('./wrappers/bond/transaction-sell-redemption-wrapper.module').then(x => x.TransactionSellRedemptionWrapperModule)
          },
          {
            path: 'transaction-transfer',
            loadChildren: () => import('./wrappers/bond/transaction-transfer-wrapper.module').then(x => x.TransactionTransferWrapperModule)
          },
          {
            path: 'transfers',
            loadChildren: () => import('./wrappers/bond/transfers-wrapper.module').then(x => x.TransfersWrapperModule)
          },
        ]
      }]
    }
  ],
  stateProcessorsRoutes: [
  ]
} as SubsystemExternalRouteConfig;