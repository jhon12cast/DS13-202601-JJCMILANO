export interface User {
  cedula: string;
  nombre: string;
  apellidos: string;
  correo: string;
  ciudad: string;
  contrasena: string;
}

export type UserPublic = Omit<User, 'contrasena'>;
