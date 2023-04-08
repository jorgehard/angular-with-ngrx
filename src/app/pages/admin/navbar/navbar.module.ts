import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { NavbarComponent } from './navbar.component';
import { NavBarContainerComponent } from './navbar.container';


@NgModule({
    declarations: [
        NavbarComponent,
        NavBarContainerComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule
    ],
    exports: [
        NavbarComponent,
        NavBarContainerComponent
    ]
})

export class NavBarModule { }