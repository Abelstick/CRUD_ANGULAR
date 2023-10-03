import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // Importa FormsModule si aún no lo tienes

import { ToastrModule } from 'ngx-toastr'; // Importa ToastrModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // Importa BrowserAnimationsModule
    FormsModule, // Importa FormsModule si aún no lo tienes
    ToastrModule.forRoot(), // Configura ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
