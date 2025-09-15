# @ecodev/angular-natural-gallery

[![Build Status](https://github.com/Ecodev/angular-natural-gallery/workflows/main/badge.svg)](https://github.com/Ecodev/angular-natural-gallery/actions)

Thin wrapper for [@ecodev/natural-gallery-js](https://github.com/Ecodev/natural-gallery-js).

## Installation

To install this library, run:

```bash
yarn add @ecodev/angular-natural-gallery
```

## Consuming the library

In your standalone component, import `NaturalGalleryComponent`:

```typescript
@Component({
  selector: 'app-root',
  template: '<natural-gallery [options]="{rowHeight: 400}"></natural-gallery>',
  imports: [NaturalGalleryComponent],
})
export class AppComponent {}
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
