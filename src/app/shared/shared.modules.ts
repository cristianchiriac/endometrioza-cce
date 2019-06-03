import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from './../material-design.module';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';


@NgModule({
    imports: [
        CommonModule, 
        MaterialDesignModule
    ],
    declarations: [
        BottomSheetComponent,
        SnackBarComponent
    ],
    exports: [
        CommonModule, 
        MaterialDesignModule,
        BottomSheetComponent,
        SnackBarComponent
    ],
    entryComponents: [
        BottomSheetComponent,
        SnackBarComponent
    ]
})
export class SharedModule { }
