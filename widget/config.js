function defineMetabaseConfig(config) {
  window.metabaseConfig = config;
}

defineMetabaseConfig({
  "theme": {
    "preset": "light"
  },
  "isGuest": true,
  "instanceUrl": "https://insights.cargobase.com"
});
