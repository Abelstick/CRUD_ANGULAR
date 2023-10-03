import { Injectable } from '@angular/core';
import { Usuario } from './Usuario';
@Injectable({
  providedIn: 'root',
})
export class SusuariosService {
  Usuarios: Usuario[] = [
    {
      iid: 1,
      sNombres: 'Abel',
      sApellidos: 'Panta',
      sNroDocumento: '123456',
      sDireccion: 'Av Chorrillos',
      sUsuario: 'abel', 
      sContrasena: '123456' 
    }
  ];
  

  Usuarios2: Usuario[] = [];
  mensajeerror: string = '';
  tmpUsuario: Usuario = new Usuario();
  constructor() {}
  onGrabar(
    psNombres: string,
    psApellidos: string,
    psDireccion: string,
    psNroDocumento: string
  ) {
    this.tmpUsuario.iid = this.Usuarios.length + 1;
    this.tmpUsuario.sNombres = psNombres;
    this.tmpUsuario.sApellidos = psApellidos;
    this.tmpUsuario.sDireccion = psDireccion;
    this.tmpUsuario.sNroDocumento = psNroDocumento;
    this.Usuarios.push(this.tmpUsuario);
    this.tmpUsuario = new Usuario();
  }
  OnEliminar(pnid: number) {
    this.mensajeerror = 'Ingreso';
    var ubicacion = this.Usuarios.findIndex((item) => item.iid == pnid);
    this.Usuarios.splice(ubicacion, 1);

    this.mensajeerror =
      'ejecuto ok' + this.Usuarios2.toString() + '--' + pnid.toString();
  }
  OnActualizar(
    psNombres: string,
    psApellidos: string,
    psDireccion: string,
    psNroDocumento: string,
    pnid: number
  ) {
    var ubicacion = this.Usuarios.findIndex((item) => item.iid == pnid);
    this.Usuarios[ubicacion].sNombres = psNombres;
    this.Usuarios[ubicacion].sApellidos = psApellidos;
    this.Usuarios[ubicacion].sDireccion = psDireccion;
    this.Usuarios[ubicacion].sNroDocumento = psNroDocumento;
  }
}
