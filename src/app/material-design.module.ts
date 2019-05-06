import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        MatMenuModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule
    ],
    exports: [
        CommonModule,
        MatMenuModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule
    ]
})
export class MaterialDesignModule {}
