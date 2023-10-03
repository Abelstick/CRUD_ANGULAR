import { Component, ElementRef, ViewChild } from '@angular/core';
import { iusuario } from '../ilogin';
import { Router } from '@angular/router'; // Importa Router
import { SusuariosService } from '../susuario.service';

declare var bootstrap: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('bootstrapToast') bootstrapToast: ElementRef | undefined;

  constructor(private susuario: SusuariosService, private router: Router) {}

  usuario: string = '';
  contrasena: string = '';
  mensajeerror: string = '';
  usuariotmp: iusuario;

  mostrarToast() {
    if (this.bootstrapToast) {
      const toastElement = this.bootstrapToast.nativeElement;
      var bootstrapToastInstance = new bootstrap.Toast(toastElement);
      bootstrapToastInstance.show();
    }
  }

  ocultarToast() {
    if (this.bootstrapToast) {
      const toastElement = this.bootstrapToast.nativeElement;
      var bootstrapToastInstance = new bootstrap.Toast(toastElement);
      bootstrapToastInstance.hide();
    }
  }

  OnValidar(usuario: string, contrasena: string) {
    console.log('Intento de inicio de sesión con usuario:', usuario);

    let inicioDeSesionExitoso = false;

    const usuarioRegistrado = this.susuario.Usuarios.find(
      (usr) => usr.sUsuario === usuario && usr.sContrasena === contrasena
    );

    if (usuarioRegistrado) {
      console.log('Inicio de sesión exitoso para el usuario:', usuario);
      this.mensajeerror = '';
      inicioDeSesionExitoso = true;
    }

    if (!inicioDeSesionExitoso) {
      console.log('Inicio de sesión fallido para el usuario:', usuario);
      this.mensajeerror = 'Usuario no disponible o contraseña incorrecta';
      this.mostrarToast();
    } else {
      this.ocultarToast();
      this.router.navigate(['/Usuario']);
    }
  }
}
