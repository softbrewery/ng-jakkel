[![Build Status](https://travis-ci.org/softbrewery/ng-jakkel.svg)](https://travis-ci.org/softbrewery/ng-jakkel)
[![Bower Version](http://img.shields.io/bower/v/ng-jakkel.svg)](https://github.com/softbrewery/ng-jakkel)

NG-Jakkel - Angular Jakkel Implementation
======================================

NG-Jakkel is a Angular Jakkel (ACL) Implementation

### Installation
---
```sh
$ bower install --save ng-jakkel
```

### Api
---

#### Including the Jakkel module
Make sure you load the angular and js-jakkel scripts before loading the ng-jakkel script
```html
<script src="angular.js"></script>
<script src="js-jakkel.js"></script>
<script src="ng-jakkel.js"></script>
```

#### Loading the Jakkel module
```javascript
angular.module('MyApp', ['jakkel']);
```

#### JakkelProvider
Provider to configure Jakkel
```javascript
var app = angular.module('myApp', ['jakkel']);

app.config(function($jakkelProvider) {
  $jakkelProvider.setOptions( {strict: true} );
  
  $jakkelProvider.addRole('anonymous');
  $jakkelProvider.addRole('user', 'anonymous');
  $jakkelProvider.addRole('admin', 'user');
  
  $jakkelProvider.addResource('products', ['list', 'detail', 'add', 'update', 'delete']);
  
  $jakkelProvider.allow('anonymous', 'products', ['list']);
  $jakkelProvider.allow('user', 'products', ['detail']);
  $jakkelProvider.allow('admin', 'products', ['add', 'update', 'delete']);
});
```

#### JakkelService
Service to use Jakkel
```javascript
var app = angular.module('myApp', ['jakkel']);

app.controller('myCtrl', function($jakkel) {
  ...
});
```

#### Jakkel Direcives

##### acl-if
Render element if resource is allowed. If not, the element will be removed from the DOM
```html
<button acl-if="'products'" acl-actions="'delete'" ng-click="remove()">Remove Product</button>
```
```html
<a acl-if="'products'" acl-actions="['update','delete']">Modify Product</a>
```

##### acl-show
Show element if resource is allowed
```html
<div acl-show="'products'" acl-actions="'list'"> ... </div>
```
```html
<div acl-show="'products'" acl-actions="['new','update']"> ... </div>
```

##### acl-hide
Hide element if resource is allowed
```html
<div acl-hide="'products'" acl-actions="'list'"> ... </div>
```
```html
<div acl-hide="'products'" acl-actions="['new','update']"> ... </div>
```


### License
---
MIT
