import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { fontRangeSetList, fontSetList, themeList } from './pics-profile/@core/constants/theme-constants';
import { UserConfig } from './pics-profile/@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./pics-profile/@core/service/data-store.service";
import * as i2 from "./pics-profile/@core/service/theme.service";
import * as i3 from "./pics-profile/@core/service/local.service";
export class ProfileService {
    constructor(_storeservice, themeService, localstorage) {
        this._storeservice = _storeservice;
        this.themeService = themeService;
        this.localstorage = localstorage;
        this.profileImage = new Subject();
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    setUserPreference() {
        const user_id = this.localstorage.getItem('id');
        if (user_id) {
            this.getUserPreference(user_id).subscribe((res) => {
                var _a;
                if (res.data && ((_a = res.data) === null || _a === void 0 ? void 0 : _a.config)) {
                    const configArray = JSON.parse(res.data.config);
                    this.setTheme(configArray.theme);
                    const font = configArray.font ? configArray.font.toString() : '13';
                    this.setRangeFont(font);
                }
            });
        }
    }
    setTheme(event) {
        this.localstorage.setItem('SELECTED_THEME', event);
        const selectedTheme = themeList.filter(theme => theme.key === event)[0];
        this.themeService.setActiveTheme(selectedTheme);
        console.log('Selected Theme:', selectedTheme.key);
    }
    setFont(event) {
        this.localstorage.setItem('SELECTED_FONT', event);
        const selectedFont = fontSetList.filter(fontSet => fontSet.key === event)[0];
        this.themeService.setActiveFont(selectedFont);
    }
    setRangeFont(event) {
        this.localstorage.setItem('SELECTED_FONT', event);
        const selectedFont = fontRangeSetList.filter(fontSet => fontSet.key === event)[0];
        this.themeService.setActiveFont(selectedFont);
    }
    getProfile(img) {
        this.profileImage.next(img);
    }
    getAllUserList(key) {
        return this.httpService.get(`${UserConfig.EndPoint.User.getAllUserList}/${key}`);
    }
    getAllUserOrgList(orgid) {
        return this.httpService.get(UserConfig.EndPoint.User.getAllUserOrgList + orgid);
    }
    getUserPreference(id) {
        return this.httpService.get(UserConfig.EndPoint.User.getUserConfig.replace('{id}', id));
    }
    updateUser(data, userid) {
        return this.httpService.patch(`${UserConfig.EndPoint.User.getAllUserList}/${userid}/updateUserDetails`, data);
    }
    saveUserPreference(data) {
        return this.httpService.post(UserConfig.EndPoint.User.saveUserConfig, data);
    }
}
ProfileService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileService, deps: [{ token: i1.DataStoreService }, { token: i2.ThemeService }, { token: i3.LocalService }], target: i0.ɵɵFactoryTarget.Injectable });
ProfileService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.DataStoreService }, { type: i2.ThemeService }, { type: i3.LocalService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3Byb2ZpbGUvc3JjL2xpYi9wcm9maWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDMUcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7OztBQU12RSxNQUFNLE9BQU8sY0FBYztJQUd6QixZQUFvQixhQUErQixFQUN6QyxZQUEwQixFQUMxQixZQUEwQjtRQUZoQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDekMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFKcEMsaUJBQVksR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUt6QyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNyRCxJQUFHLEdBQUcsRUFBQztnQkFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTthQUN0QztRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELGlCQUFpQjtRQUNmLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFOztnQkFDckQsSUFBSSxHQUFH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LENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxNQUFNLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hILENBQUM7SUFDRCxrQkFBa0IsQ0FBQyxJQUFTO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7OzRHQTlEVSxjQUFjO2dIQUFkLGNBQWMsY0FGYixNQUFNOzRGQUVQLGNBQWM7a0JBSDFCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRoZW1lU2VydmljZSB9IGZyb20gJy4vcGljcy1wcm9maWxlL0Bjb3JlL3NlcnZpY2UvdGhlbWUuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU2VydmljZSB9IGZyb20gJy4vcGljcy1wcm9maWxlL0Bjb3JlL3NlcnZpY2UvbG9jYWwuc2VydmljZSc7XHJcbmltcG9ydCB7IGZvbnRSYW5nZVNldExpc3QsIGZvbnRTZXRMaXN0LCB0aGVtZUxpc3QgfSBmcm9tICcuL3BpY3MtcHJvZmlsZS9AY29yZS9jb25zdGFudHMvdGhlbWUtY29uc3RhbnRzJztcclxuaW1wb3J0IHsgVXNlckNvbmZpZyB9IGZyb20gJy4vcGljcy1wcm9maWxlL0Bjb3JlL3VybHMvcmJhYy11cmwuY29uZmlnJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vcGljcy1wcm9maWxlL0Bjb3JlL3NlcnZpY2UvZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVTZXJ2aWNlIHtcclxuICBwcm9maWxlSW1hZ2U6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgaHR0cFNlcnZpY2U6YW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSxcclxuICAgIHByaXZhdGUgdGhlbWVTZXJ2aWNlOiBUaGVtZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvY2Fsc3RvcmFnZTogTG9jYWxTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlID0gcmVzWydIVFRQU0VSVklDRSddXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgc2V0VXNlclByZWZlcmVuY2UoKSB7XHJcbiAgICBjb25zdCB1c2VyX2lkID0gdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0SXRlbSgnaWQnKTtcclxuICAgIGlmICh1c2VyX2lkKSB7XHJcbiAgICAgIHRoaXMuZ2V0VXNlclByZWZlcmVuY2UodXNlcl9pZCkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YT8uY29uZmlnKSB7XHJcbiAgICAgICAgICBjb25zdCBjb25maWdBcnJheSA9IEpTT04ucGFyc2UocmVzLmRhdGEuY29uZmlnKTtcclxuICAgICAgICAgIHRoaXMuc2V0VGhlbWUoY29uZmlnQXJyYXkudGhlbWUpO1xyXG4gICAgICAgICAgY29uc3QgZm9udCA9IGNvbmZpZ0FycmF5LmZvbnQgPyBjb25maWdBcnJheS5mb250LnRvU3RyaW5nKCk6ICcxMyc7XHJcbiAgICAgICAgICB0aGlzLnNldFJhbmdlRm9udChmb250KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRUaGVtZShldmVudDogYW55KSB7XHJcbiAgICB0aGlzLmxvY2Fsc3RvcmFnZS5zZXRJdGVtKCdTRUxFQ1RFRF9USEVNRScsIGV2ZW50KTtcclxuICAgIGNvbnN0IHNlbGVjdGVkVGhlbWUgPSB0aGVtZUxpc3QuZmlsdGVyKHRoZW1lID0+IHRoZW1lLmtleSA9PT0gZXZlbnQpWzBdO1xyXG4gICAgdGhpcy50aGVtZVNlcnZpY2Uuc2V0QWN0aXZlVGhlbWUoc2VsZWN0ZWRUaGVtZSk7XHJcbiAgICBjb25zb2xlLmxvZygnU2VsZWN0ZWQgVGhlbWU6Jywgc2VsZWN0ZWRUaGVtZS5rZXkpO1xyXG4gIH1cclxuICBzZXRGb250KGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMubG9jYWxzdG9yYWdlLnNldEl0ZW0oJ1NFTEVDVEVEX0ZPTlQnLCBldmVudCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZEZvbnQgPSBmb250U2V0TGlzdC5maWx0ZXIoZm9udFNldCA9PiBmb250U2V0LmtleSA9PT0gZXZlbnQpWzBdO1xyXG4gICAgdGhpcy50aGVtZVNlcnZpY2Uuc2V0QWN0aXZlRm9udChzZWxlY3RlZEZvbnQpO1xyXG4gIH1cclxuICBzZXRSYW5nZUZvbnQoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5sb2NhbHN0b3JhZ2Uuc2V0SXRlbSgnU0VMRUNURURfRk9OVCcsIGV2ZW50KTtcclxuICAgIGNvbnN0IHNlbGVjdGVkRm9udCA9IGZvbnRSYW5nZVNldExpc3QuZmlsdGVyKGZvbnRTZXQgPT4gZm9udFNldC5rZXkgPT09IGV2ZW50KVswXTtcclxuICAgIHRoaXMudGhlbWVTZXJ2aWNlLnNldEFjdGl2ZUZvbnQoc2VsZWN0ZWRGb250KTtcclxuICB9XHJcblxyXG4gIGdldFByb2ZpbGUoaW1nOiBhbnkpIHtcclxuICAgIHRoaXMucHJvZmlsZUltYWdlLm5leHQoaW1nKTtcclxuICB9XHJcblxyXG4gIGdldEFsbFVzZXJMaXN0KGtleT86IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoYCR7VXNlckNvbmZpZy5FbmRQb2ludC5Vc2VyLmdldEFsbFVzZXJMaXN0fS8ke2tleX1gKTtcclxuICB9XHJcbiAgZ2V0QWxsVXNlck9yZ0xpc3Qob3JnaWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KFVzZXJDb25maWcuRW5kUG9pbnQuVXNlci5nZXRBbGxVc2VyT3JnTGlzdCArIG9yZ2lkKTtcclxuICB9XHJcbiAgZ2V0VXNlclByZWZlcmVuY2UoaWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KFVzZXJDb25maWcuRW5kUG9pbnQuVXNlci5nZXRVc2VyQ29uZmlnLnJlcGxhY2UoJ3tpZH0nLCBpZCkpO1xyXG4gIH1cclxuICB1cGRhdGVVc2VyKGRhdGE6IGFueSwgdXNlcmlkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBhdGNoKGAke1VzZXJDb25maWcuRW5kUG9pbnQuVXNlci5nZXRBbGxVc2VyTGlzdH0vJHt1c2VyaWR9L3VwZGF0ZVVzZXJEZXRhaWxzYCwgZGF0YSk7XHJcbiAgfVxyXG4gIHNhdmVVc2VyUHJlZmVyZW5jZShkYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoVXNlckNvbmZpZy5FbmRQb2ludC5Vc2VyLnNhdmVVc2VyQ29uZmlnLCBkYXRhKTtcclxuICB9XHJcbn1cclxuIl19