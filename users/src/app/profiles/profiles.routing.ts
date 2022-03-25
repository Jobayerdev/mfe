import { RouterModule, Routes } from '@angular/router';

import { ProfilesComponent } from './profiles.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilesComponent,
  },
];

export const ProfilesRoutes = RouterModule.forChild(routes);
