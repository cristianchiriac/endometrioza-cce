import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.modules';
import { ProgramComponent } from './program.component';
import { ChapterOneComponent } from './chapter-one/chapter-one.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { ProgramRouthingModule } from './program-routing.modules';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        NgxYoutubePlayerModule.forRoot(),
        ProgramRouthingModule
    ],
    declarations: [ProgramComponent, ChapterOneComponent],
    exports: [ProgramComponent, ChapterOneComponent],
})
export class ProgramModule { }