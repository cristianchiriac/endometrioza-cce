import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {
  MatCardModule,
  MatFormFieldModule,
  MatToolbarModule
} from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        MatMenuModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule
    ],
    exports: [
        CommonModule,
        MatMenuModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule
    ]
})
export class MaterialDesignModule {}
