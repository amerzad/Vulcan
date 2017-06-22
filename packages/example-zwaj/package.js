Package.describe({
  name: 'example-zwaj',
});

Package.onUse(function (api) {

  api.use([

    // vulcan core
    'vulcan:core',

    // vulcan packages
    'vulcan:forms',
    'vulcan:accounts',
    'fourseven:scss',
    
  ]);

  api.addFiles('lib/stylesheets/bootstrap.min.css');
  api.addFiles('lib/stylesheets/styles.scss');
  api.addAssets([
    'lib/static/vulcanstagram.png'
  ], ['client']);
  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');

});
