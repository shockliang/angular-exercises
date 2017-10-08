Install `auto import` pluging to auto import class.

Using angular cli to generate new component like below:
```sh
ng g c course
```
`g` for generate shortcut.

`c` for component shortcut.

---
#### Dependency Injection ####
Dependency Injection like **"A 25-dollar term for a 5-cent concept!"**

If use the DI by angular that meaing all registed DI instances will be `Singleton` instances.

Using angular cli to generate new service usage below:
```sh
ng g s email
```

`g` for generate shortcut.

`s` for service shortcut.

Create custom directive using angular cli.
```sh
ng g d input-format
```

`g` for generate shortcut.

`d` for directive shortcut.

---
#### Interpolation ####
```html
<img src="{{ imageUrl }}" />
```

---
#### Property bind ####
```html
<img [src]="imageUrl" />
```
