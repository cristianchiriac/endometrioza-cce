import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    imports: [
        CommonModule,
        MatMenuModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule
    ],
    exports: [
        CommonModule,
        MatMenuModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule
    ]
})
export class MaterialDesignModule {}
