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
---
#### Reactive form ####
* More control over validation logic
* Good for complex forms
* Unit testable

#### Template-driven form ####
* Good for simple forms
* Simple validation
* Easier to create
* Less code

---
#### Optimization Techniques ####
* Minification
    * Remove unnecessary white space.
* Uglification
    * Shorten the variable name or method name.
* Bundling
* Dead code elimination
    * Remove unnecessary classes or packages.
* Ahead-of-time (AOT) compilation

#### Just in time (JIT) Compilation ####
* Inefficient for production.
* Happens for every user
* More components, slower
* We have to ship Angular compiler

#### Benefits of Ahead-of-time(AOT) Compilation ####
* Faster startup
* Doesn't need ship Angular compiler that make smaller bundle size.
* Catch template errors earlier. 
* Better security