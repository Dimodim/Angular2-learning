import { DataStorageService } from './../../shared/data-storage.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    constructor(private dataStorageService: DataStorageService) {}
    // ngOnInit(): void {
    //     this.onFetch();
    // }
    onSave(): void {
        this.dataStorageService.storeRecipes();
    }
    onFetch(): void {
        this.dataStorageService.getRecipes().subscribe();
    }
}
