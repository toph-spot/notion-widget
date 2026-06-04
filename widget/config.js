function defineMetabaseConfig(config) {
  window.metabaseConfig = config;
}

defineMetabaseConfig({
  "theme": {
    "preset": "light"
  },
  "isGuest": true,
  "instanceUrl": "https://insights.cargobase.com",
  "nonce": "z4nrVMyvtY" // Tells React it's safe to inject styles
});
