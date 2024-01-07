import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthURL } from '../urls/rbac-url.config';
import { AlertService } from './alert.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./data-store.service";
export class AuthService {
    constructor(injector, _router, _storeservice) {
        this._router = _router;
        this._storeservice = _storeservice;
        this.orgInfo = new BehaviorSubject('');
        this.currentOrgInfo = this.orgInfo.asObservable();
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
        this.alertService = injector.get(AlertService);
    }
    feedOrgInfo(data) {
        this.orgInfo.next(data);
    }
    logout() {
        this._router.navigate(['/login']);
        sessionStorage.clear();
        localStorage.clear();
    }
    ResetPassword(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.user.resetPassword, data);
    }
}
AuthService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthService, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i2.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3Byb2ZpbGUvc3JjL2xpYi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFRL0MsTUFBTSxPQUFPLFdBQVc7SUFJdEIsWUFDRSxRQUFrQixFQUNWLE9BQWUsRUFDZixhQUErQjtRQUQvQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2Ysa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBVWxDLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBTSxFQUFFLENBQUMsQ0FBQztRQUM5QyxtQkFBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFUM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDckQsSUFBRyxHQUFHLEVBQUM7Z0JBQ0wsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7YUFDdEM7UUFDSCxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBZSxZQUFZLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBS0QsV0FBVyxDQUFDLElBQVM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNNLE1BQU07UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbEMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBR0QsYUFBYSxDQUFDLElBQVM7UUFDckIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hGLENBQUM7O3lHQWhDVSxXQUFXOzZHQUFYLFdBQVcsY0FIVixNQUFNOzRGQUdQLFdBQVc7a0JBTHZCLFVBQVU7bUJBQ1g7b0JBQ0UsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEF1dGhVUkwgfSBmcm9tICcuLi91cmxzL3JiYWMtdXJsLmNvbmZpZyc7XHJcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4vYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZShcclxue1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59XHJcbilcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICBzaGFyZWRJbmZvOiBhbnk7XHJcbiAgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2U7XHJcbiAgaHR0cFNlcnZpY2U6YW55O1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMuX3N0b3Jlc2VydmljZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UgPSByZXNbJ0hUVFBTRVJWSUNFJ11cclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHRoaXMuYWxlcnRTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PEFsZXJ0U2VydmljZT4oQWxlcnRTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcmdJbmZvID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KCcnKTtcclxuICBjdXJyZW50T3JnSW5mbyA9IHRoaXMub3JnSW5mby5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgZmVlZE9yZ0luZm8oZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLm9yZ0luZm8ubmV4dChkYXRhKTtcclxuICB9XHJcbiAgcHVibGljIGxvZ291dCgpIHtcclxuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICB9XHJcblxyXG5cclxuICBSZXNldFBhc3N3b3JkKGRhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIucmVzZXRQYXNzd29yZCwgZGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==