import { Component, Input } from '@angular/core';
import { RBACINFO } from './pics-profile/@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./pics-profile/@core/permissions/permission.store";
import * as i2 from "./pics-profile/@core/service/data-store.service";
import * as i3 from "./pics-profile/profile/profile.component";
export class ProfileComponent {
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this.RBACORG = new RBACINFO();
    }
    ngOnInit() {
        this.profileEvent.subscribe((val) => {
            this.RBACORG = val.RBACORG;
            this.PERMISSION = val.PERMISSION;
            this._storeservice.setData('RBACORG', this.RBACORG);
            this.permissionStore.setStore(this.PERMISSION);
            this._storeservice.setData('HTTPSERVICE', val.httpService);
        });
    }
}
ProfileComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileComponent, deps: [{ token: i1.PermissionStore }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
ProfileComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ProfileComponent, selector: "profile", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", profileEvent: "profileEvent" }, ngImport: i0, template: `
    <core-profile></core-profile>
  `, isInline: true, components: [{ type: i3.ProfileComponent, selector: "core-profile" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'profile',
                    template: `
    <core-profile></core-profile>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.PermissionStore }, { type: i2.DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], profileEvent: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvcHJvZmlsZS9zcmMvbGliL3Byb2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7QUFhckUsTUFBTSxPQUFPLGdCQUFnQjtJQUszQixZQUNVLGVBQWdDLEVBQ2hDLGFBQStCO1FBRC9CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFOekIsWUFBTyxHQUFjLElBQUksUUFBUSxFQUFFLENBQUM7SUFRcEQsQ0FBQztJQUNELFFBQVE7UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7OzhHQWxCVSxnQkFBZ0I7a0dBQWhCLGdCQUFnQix1SUFOakI7O0dBRVQ7NEZBSVUsZ0JBQWdCO2tCQVI1QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUU7O0dBRVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQ1A7aUJBQ0Y7cUlBRWlCLE9BQU87c0JBQXRCLEtBQUs7Z0JBQ1UsVUFBVTtzQkFBekIsS0FBSztnQkFDVSxZQUFZO3NCQUEzQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJCQUNJTkZPIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvQGNvcmUvdXJscy9yYmFjLXVybC5jb25maWcnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25TdG9yZSB9IGZyb20gJy4vcGljcy1wcm9maWxlL0Bjb3JlL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwcm9maWxlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGNvcmUtcHJvZmlsZT48L2NvcmUtcHJvZmlsZT5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBSQkFDT1JHPzogUkJBQ0lORk8gPSBuZXcgUkJBQ0lORk8oKTtcclxuICBASW5wdXQoKSBwdWJsaWMgUEVSTUlTU0lPTj86IGFueTtcclxuICBASW5wdXQoKSBwdWJsaWMgcHJvZmlsZUV2ZW50ITogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcGVybWlzc2lvblN0b3JlOiBQZXJtaXNzaW9uU3RvcmUsXHJcbiAgICBwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2VcclxuICApIHtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAgdGhpcy5wcm9maWxlRXZlbnQuc3Vic2NyaWJlKCh2YWw6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLlJCQUNPUkcgPSB2YWwuUkJBQ09SRztcclxuICAgICAgdGhpcy5QRVJNSVNTSU9OID0gdmFsLlBFUk1JU1NJT047XHJcbiAgICAgIHRoaXMuX3N0b3Jlc2VydmljZS5zZXREYXRhKCdSQkFDT1JHJywgdGhpcy5SQkFDT1JHKTtcclxuICAgICAgdGhpcy5wZXJtaXNzaW9uU3RvcmUuc2V0U3RvcmUodGhpcy5QRVJNSVNTSU9OKTtcclxuICAgICAgdGhpcy5fc3RvcmVzZXJ2aWNlLnNldERhdGEoJ0hUVFBTRVJWSUNFJyx2YWwuaHR0cFNlcnZpY2UpO1xyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19