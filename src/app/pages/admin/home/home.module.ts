import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { NavBarModule } from '../navbar/navbar.module';
import { HomeComponent } from './home.component';
import { HomeContainerComponent } from './home.container';

@NgModule({
    declarations: [
        HomeComponent,
        HomeContainerComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        NavBarModule
    ],
    exports: [
        HomeComponent,
        HomeContainerComponent
    ]
})

export class HomeModule { }