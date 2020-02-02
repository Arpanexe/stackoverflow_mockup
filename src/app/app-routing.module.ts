import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const applicationroutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '*', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(applicationroutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
