import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
    imports: [
        MatMenuModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatSnackBarModule,
        MatDialogModule,
        MatBottomSheetModule
    ],
    exports: [
        MatMenuModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatSnackBarModule,
        MatDialogModule,
        MatBottomSheetModule
    ]
})
export class MaterialDesignModule {}
