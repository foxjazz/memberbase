import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TodolistRoutes } from './todolist/index';
import {MemberlistRoutes} from "./Members/memberlist.routes";

const appRoutes: Routes = [
    ...HomeRoutes,
    ...TodolistRoutes,
    ...MemberlistRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
