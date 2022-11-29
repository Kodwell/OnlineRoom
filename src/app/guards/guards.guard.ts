import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DbserviceService } from '../services/dbservice.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {
  constructor(
    public DbserviceService: DbserviceService 
    ){}

    //Guard que deriva filtro a service
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.DbserviceService.isAuthenticated();
  }
  
}
