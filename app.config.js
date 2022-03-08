const semver = require("semver");
const { name, version } = require("./package.json");

const snapshotVersion = `${semver.inc(version, "patch")}-SNAPSHOT`;

module.exports = {
  name: "walmart-web",
  version: process.env.SNAPSHOT ? snapshotVersion : version,
  environment: {
    env: "development",
    debug: false,
    application: "walmart-web",
    appDist: "dev",
    appMainContent: "mainContent",
  },
  configuration: {
    API_URL: "http://localhost:3030/",

  },
};
