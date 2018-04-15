# @ecodev/angular-natural-gallery

## Installation

To install this library, run with yarn:

```bash
$ yarn add @ecodev/angular-natural-gallery
```

## Consuming your library in your Angular `AppModule

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NaturalGalleryModule } from '@ecodev/angular-natural-gallery';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    NaturalGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```html
<natural-gallery></natural-gallery>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ yarn prod
```

To lint all `*.ts` files:

```bash
$ yarn lint
```

## License

MIT © [Samuel Baptista](mailto:samuel.baptista@ecodev.ch)
