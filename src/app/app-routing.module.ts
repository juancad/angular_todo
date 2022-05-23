import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorComponent } from './autor/autor.component';
import { EditComponent } from './edit/edit.component';
import { InfoComponent } from './info/info.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'edit', component: EditComponent },
  { path: 'info', component: InfoComponent },
  { path: 'addautor', component: AutorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }