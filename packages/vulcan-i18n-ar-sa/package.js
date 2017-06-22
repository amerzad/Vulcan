Package.describe({
  name: "vulcan:i18n-ar-sa",
  summary: "Telescope i18n package (ar_SA)",
  version: '1.5.0',
  git: "https://github.com/TelescopeJS/Telescope.git"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'vulcan:core@1.5.0'
  ]);

  api.addFiles([
    'lib/ar_SA.js'
  ], ["client", "server"]);
});
