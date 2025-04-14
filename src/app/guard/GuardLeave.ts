import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export const guardLeave = (route: ActivatedRouteSnapshot, router: RouterStateSnapshot) => {
    return confirm("Вы точно хотите уйти? :(");
}
