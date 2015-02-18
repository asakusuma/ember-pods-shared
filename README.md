# ember-pods-shared

This addon exposes a resolver that enabled access to a root-level `shared` directory when using pods.

For instance, if you have a model at `app/shared/models/my-model`, you can reference it like so

```javascript
import MyModel from 'shared/models/my-model';
```

To use, simply set the resolver as your app resolver *and* test resolver like so

```javascript
// ...
// app.js
import Resolver from 'ember-pods-shared';

var App = Ember.Application.extend({
  // ...
  Resolver: Resolver
});

// tests/helpers/resolver.js
import Resolver from 'ember-pods-shared';
import config from '../../config/environment';

var resolver = Resolver.create();

resolver.namespace = {
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix
};

export default resolver;
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
