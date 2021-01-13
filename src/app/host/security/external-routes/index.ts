import { SubsystemExternalRouteConfig } from '@navaco/mcb-infra';
import { SubsystemRootComponent, SubsystemContextComponent } from '@navaco/mcb-security';

export default {
  usecasesRoutes: [
    {
      path: 'security',
      component: SubsystemContextComponent,
      children: [{
        path: '',
        component: SubsystemRootComponent,
        children: [
          {
            path: 'activities',
            loadChildren: () => import('./wrappers/activity-management-wrapper.module').then(x => x.ActivityManagementWrapperModule)
          },
          {
            path: 'profile',
            loadChildren: () => import('./wrappers/profile-wrapper.module').then(x => x.ProfileWrapperModule)
          },
          {
            path: 'service-management',
            loadChildren: () => import('./wrappers/service-management-wrapper.module').then(x => x.ServiceManagementWrapperModule)
          },
          {
            path: 'change-password',
            loadChildren: () => import('./wrappers/change-password-wrapper.module').then(x => x.ChangePasswordWrapperModule)
          },
          {
            path: 'user-management',
            loadChildren: () => import('./wrappers/user-management-wrapper.module').then(x => x.UserManagementWrapperModule)
          },
          {
            path: 'role-mng',
            loadChildren: () => import('./wrappers/role-management-wrapper.module').then(x => x.RoleManagementWrapperModule)
          },
          {
            path: 'role-mng',
            loadChildren: () => import('./wrappers/service-management-wrapper.module').then(x => x.ServiceManagementWrapperModule)
          }
        ]
      }]
    }
  ],
  stateProcessorsRoutes: [
  ]
} as SubsystemExternalRouteConfig;
