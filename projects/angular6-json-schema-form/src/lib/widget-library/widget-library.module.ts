import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JsonSchemaFormService } from '../json-schema-form.service';

import { BASIC_WIDGETS } from './index';
import { OrderableDirective } from './orderable.directive';

@NgModule({
  imports:         [ CommonModule, FormsModule, ReactiveFormsModule ],
  declarations:    [ ...BASIC_WIDGETS, OrderableDirective ],
  exports:         [ ...BASIC_WIDGETS, OrderableDirective ],
  entryComponents: [ ...BASIC_WIDGETS ],
  providers:       [ JsonSchemaFormService ]
})
export class WidgetLibraryModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WidgetLibraryModule,
      providers: [ JsonSchemaFormService ]
    };
  }
}
