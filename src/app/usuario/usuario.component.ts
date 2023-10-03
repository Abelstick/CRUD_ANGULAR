import { Component, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from '../Usuario';
import { SusuariosService } from '../susuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent {
  @ViewChild('nuevoUsuarioModal') nuevoUsuarioModal: any;

  lUsuarios: Usuario[] = [];
  visible: boolean = false;
  sNombres: string = '';
  sApellidos: string = '';
  sDireccion: string = '';
  sNroDocumento: string = '';
  sUsuario: string = '';
  sContrasena: string = '';
  mensajeerrorservicio: string = '';
  nid: number = -1;

  constructor(public susuario: SusuariosService) {
    this.lUsuarios = susuario.Usuarios;
  }
  OnNuevo() {
    this.visible = true;
  }
  OnGrabar(
    psNombres: string,
    psApellidos: string,
    psDireccion: string,
    psNroDocumento: string,
    psUsuario: string,
    psContrasena: string
  ) {
    if (this.nid === -1) {
      const nuevoUsuario: Usuario = {
        iid: this.susuario.Usuarios.length + 1,
        sNombres: psNombres,
        sApellidos: psApellidos,
        sDireccion: psDireccion,
        sNroDocumento: psNroDocumento,
        sUsuario: psUsuario,
        sContrasena: psContrasena,
      };

      this.susuario.Usuarios.push(nuevoUsuario);
    } else {
      const usuarioExistente = this.susuario.Usuarios.find(
        (u) => u.iid === this.nid
      );
      if (usuarioExistente) {
        usuarioExistente.sNombres = psNombres;
        usuarioExistente.sApellidos = psApellidos;
        usuarioExistente.sDireccion = psDireccion;
        usuarioExistente.sNroDocumento = psNroDocumento;
        usuarioExistente.sUsuario = psUsuario;
        usuarioExistente.sContrasena = psContrasena;
      }
    }
    this.sNombres = '';
    this.sApellidos = '';
    this.sDireccion = '';
    this.sNroDocumento = '';
    this.sUsuario = '';
    this.sContrasena = '';
    this.nid = -1;
    this.visible = false;
  }
  OnEliminar(pniid: number) {
    this.susuario.OnEliminar(pniid);
    this.mensajeerrorservicio = this.susuario.mensajeerror;
  }
  OnActualizar(
    psNombres: string,
    psApellidos: string,
    psDireccion: string,
    psNroDocumento: string,
    pnid: number
  ) {
    this.susuario.OnActualizar(
      psNombres,
      psApellidos,
      psDireccion,
      psNroDocumento,
      pnid
    );
  }
  OnEditar(
    psNombres: string,
    psApellidos: string,
    psDireccion: string,
    psNroDocumento: string,
    pnid: number
  ) {
    this.sNombres = psNombres;
    this.sApellidos = psApellidos;
    this.sDireccion = psDireccion;
    this.sNroDocumento = psNroDocumento;
    this.nid = pnid;
    this.nuevoUsuarioModal.show();
  }
}
