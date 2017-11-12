import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {GridComponent} from './grid/grid.component';
import {CreateMeetupComponent} from './create-meetup/create-meetup.component';
import {SettingsComponent} from './create-meetup-2/settings.component';
import { EditComponent } from './create-meetup-2/edit/edit.component';
// import {SettingsComponent} from './settings/settings.component';

const routes: Routes = [
    { path: '',  component: GridComponent },
    { path: 'home',  component: GridComponent },
    { path: 'create-meetup',  component: CreateMeetupComponent },
    { path: 'settings',  component: SettingsComponent },
    // {path:'Edit/:name/:display',component:EditComponent}
    { path: 'Edit/:display/:value',  component: EditComponent }
    // { path: 'settings',  component: SettingsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
