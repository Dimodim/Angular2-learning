import { DirectivesModule } from './directives/directives.module';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from './services/recipe.service';
import { ShoppingListService } from './services/shopping-list.service';
import { AuthComponent } from './authentication/auth/auth.component';
import { RecipeResolverService } from './resolvers/recipe-resolver.service';
import { RecipeModule } from './recepies/recipe.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { DataStorageService } from './services/data-storage.service';
import { AlertComponent } from './shared/alert/alert.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AuthComponent,
        AlertComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule,
        FormsModule,
        RecipeModule,
        ShoppingListModule,
        DirectivesModule,
    ],
    providers: [
        RecipeService,
        ShoppingListService,
        DataStorageService,
        RecipeResolverService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
