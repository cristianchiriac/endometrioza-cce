import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BottomSheetComponent {

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA)
    public data: any,
    public bottomSheetRef: MatBottomSheetRef) { }

}
