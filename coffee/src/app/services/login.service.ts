import { Injectable } from '@angular/core';
import { User, UserPublic } from '../models/user.model';

const STORAGE_USERS = 'coffee_users';
const STORAGE_SESSION = 'coffee_session';

@Injectable({ providedIn: 'root' })
export class LoginService {
  register(user: User): { ok: true } | { ok: false; message: string } {
    const users = this.readUsers();
    if (users.some((u) => u.cedula === user.cedula)) {
      return { ok: false, message: 'Ya existe un usuario con esa cédula.' };
    }
    users.push(user);
    this.writeUsers(users);
    return { ok: true };
  }

  login(
    correo: string,
    contrasena: string
  ): { ok: true } | { ok: false; message: string } {
    const users = this.readUsers();
    const found = users.find(
      (u) => u.correo === correo && u.contrasena === contrasena
    );
    if (!found) {
      return { ok: false, message: 'Correo o contraseña incorrectos.' };
    }
    const session: UserPublic = {
      cedula: found.cedula,
      nombre: found.nombre,
      apellidos: found.apellidos,
      correo: found.correo,
      ciudad: found.ciudad,
    };
    sessionStorage.setItem(STORAGE_SESSION, JSON.stringify(session));
    return { ok: true };
  }

  logout(): void {
    sessionStorage.removeItem(STORAGE_SESSION);
  }

  getCurrentUser(): UserPublic | null {
    const raw = sessionStorage.getItem(STORAGE_SESSION);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as UserPublic;
    } catch {
      return null;
    }
  }

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }

  private readUsers(): User[] {
    const raw = localStorage.getItem(STORAGE_USERS);
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw) as unknown;
      return Array.isArray(parsed) ? (parsed as User[]) : [];
    } catch {
      return [];
    }
  }

  private writeUsers(users: User[]): void {
    localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
  }
}
