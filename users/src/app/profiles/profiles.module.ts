import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfilesComponent } from './profiles.component';
import { ProfilesRoutes } from './profiles.routing';

@NgModule({
  imports: [CommonModule, ProfilesRoutes, FormsModule, ReactiveFormsModule],
  declarations: [ProfilesComponent],
})
export class ProfilesModule {}
