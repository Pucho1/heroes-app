import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interfaces';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public sidebarItems = [
    {label: "Listado", icon: "label", url:"./list"},
    {label: "Añadir", icon: "add", url:"./new-heroe"},
    {label: "Buscar", icon: "search", url:"./search"},
  ];

  constructor(
    private authService: AuthService,
  ) { }

  get user (): User | undefined {
    return this.authService.user;
  };

  logout(): void {
    this.authService.logout();
  };
}
