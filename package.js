// Package metadata for Meteor.js.

Package.describe({
  name: "thompsonemerson:cardmove",
  summary: "It's a plugin developed with JavaScript, that allows to dynamically animate angle and perspective of card with mouseover.",
  version: "1.0.0",
  git: "https://github.com/thompsonemerson/cardmove"
});

Package.onUse(function(api) {
  api.addFiles("dist/cardmove.js", "client");
});
