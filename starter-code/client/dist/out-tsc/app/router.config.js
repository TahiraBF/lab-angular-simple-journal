var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EntryListComponent } from './entry-list/entry-list.component';
import { JournalDetailsComponent } from './journal-details/journal-details.component';
var routes = [
    { path: 'api/journal-entries', component: EntryListComponent },
    { path: 'api/journal-entries/:id', component: JournalDetailsComponent }
];
var RouterConfiguration = (function () {
    function RouterConfiguration() {
    }
    return RouterConfiguration;
}());
RouterConfiguration = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], RouterConfiguration);
export { RouterConfiguration };
//# sourceMappingURL=../../../src/app/router.config.js.map