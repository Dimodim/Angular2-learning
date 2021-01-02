import { Component } from '@angular/core';
import { DataStorageService } from 'src/app/services/data-storage.service';

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
