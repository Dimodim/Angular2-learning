import { NgModule } from '@angular/core';
import { ComponentPlaceholderDirective } from './component-placeholder.directive';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
    declarations: [DropdownDirective, ComponentPlaceholderDirective],
    exports: [DropdownDirective, ComponentPlaceholderDirective],
    imports: [
        // BrowserModule,
        // HttpClientModule,
        // ReactiveFormsModule,
        // AppRoutingModule,
        // FormsModule,
        // RecipeModule,
        // ShoppingListModule,
    ],
})
export class DirectivesModule {}
