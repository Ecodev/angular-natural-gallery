# @ecodev/angular-natural-gallery

Thin wrapper for [@ecodev/natural-gallery-js](https://github.com/Ecodev/natural-gallery-js).

## Installation

To install this library, run:

```bash
$ yarn add @ecodev/angular-natural-gallery
```

## Consuming your library in your Angular `AppModule`

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { NaturalGalleryModule } from '@ecodev/angular-natural-gallery';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify the library as an import
    NaturalGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use its components, directives and pipes in your Angular application:

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
