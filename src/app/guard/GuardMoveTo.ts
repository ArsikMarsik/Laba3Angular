import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export const guardMoveTo = (route: ActivatedRouteSnapshot, router: RouterStateSnapshot) => {
    return confirm("Вы точно хотите уйти на другую страницу? :(");
}
