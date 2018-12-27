import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MadeOfComponent } from './components/made-of/made-of.component';
import { ContactComponent } from './components/contact/contact.component';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MadeOfComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'work', component: WorkComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
