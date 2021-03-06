var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { JournalEntriesService } from '../journal-entries.service';
import { ActivatedRoute } from '@angular/router';
var JournalDetailsComponent = (function () {
    function JournalDetailsComponent(journalEntry, route) {
        this.journalEntry = journalEntry;
        this.route = route;
        this.jEntry = {};
    }
    JournalDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.entryId = params['id'];
            _this.getEntryById(_this.entryId);
        });
    };
    JournalDetailsComponent.prototype.getEntryById = function (id) {
        var _this = this;
        this.journalEntry.getById(id)
            .subscribe(function (jEntry) {
            _this.jEntry = jEntry;
            console.log(jEntry);
        });
    };
    return JournalDetailsComponent;
}());
JournalDetailsComponent = __decorate([
    Component({
        selector: 'app-journal-details',
        templateUrl: './journal-details.component.html',
        styleUrls: ['./journal-details.component.css']
    }),
    __metadata("design:paramtypes", [JournalEntriesService,
        ActivatedRoute])
], JournalDetailsComponent);
export { JournalDetailsComponent };
//# sourceMappingURL=../../../../src/app/journal-details/journal-details.component.js.map