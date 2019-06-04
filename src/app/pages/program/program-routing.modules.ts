import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { ProgramComponent } from './program.component';
import { ChapterOneComponent } from './chapter-one/chapter-one.component';

const routes: Routes = [
    {
        path: 'program',
        component: ProgramComponent
    },
    {
        path: 'program/chapter-one',
        component: ChapterOneComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProgramRouthingModule { }