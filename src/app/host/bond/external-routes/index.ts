import { SubsystemExternalRouteConfig } from '@navaco/mcb-infra';
import { SubsystemRootComponent, SubsystemContextComponent } from '@navaco/mcb-bond';

export default {
  usecasesRoutes: [
    {
      path: 'bond',
      component: SubsystemContextComponent,
      children: [{
        path: '',
        component: SubsystemRootComponent,
        children: [
          {
            path: 'definition',
            loadChildren: () => import('./wrappers/definition-wrapper.module').then(x => x.DefinitionWrapperModule)
          },
          {
            path: 'heading-allocation',
            loadChildren: () => import('./wrappers/heading-allocation-wrapper.module').then(module => module.HeadingAllocationWrapperModule),
          },
          {
            path: 'branch-allocation',
            loadChildren: () => import('./wrappers/branch-allocation-wrapper.module').then(module => module.BranchAllocationWrapperModule),
          },
          {
            path: 'sell',
            loadChildren: () => import('./wrappers/sell-wrapper.module').then(module => module.SellWrapperModule),
          },
          {
            path: 'redemption',
            loadChildren: () => import('./wrappers/redemption-wrapper.module').then(module => module.RedemptionWrapperModule),
          },
          {
            path: 'transfer',
            loadChildren: () => import('./wrappers/transfer-wrapper.module').then(module => module.TransferWrapperModule),
          },
          {
            path: 'block',
            loadChildren: () => import('./wrappers/block-wrapper.module').then(module => module.BlockWrapperModule),
          },
          {
            path: 'unblock',
            loadChildren: () => import('./wrappers/unblock-wrapper.module').then(module => module.UnblockWrapperModule),
          },
          {
            path: 'interest-payment',
            loadChildren: () => import('./wrappers/interest-payment-wrapper.module').then(module => module.InterestPaymentWrapperModule),
          },
          {
            path: 'interest-payment-log',
            loadChildren: () => import('./wrappers/interest-payment-log-wrapper.module').then(module => module.InterestPaymentLogWrapperModule),
          },
        ]
      }
      ]
    }],
  stateProcessorsRoutes: []
} as SubsystemExternalRouteConfig;
