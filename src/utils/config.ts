import * as fs from 'fs';

try {
  const configFile: string = fs.readFileSync(`${__dirname}/../../config.json`, `utf8`);

  const config: any = JSON.parse(configFile);

  module.exports = config;
} catch (err) {
  module.exports =
    {
      "name": "Smash Watcher",
      "server": {
        "port": 3000,
        "sessionKey": ""
      },
      "databases": [{
        "name": "postgresql",
        "host": "localhost",
        "port": 5432,
        "username": "postgres",
        "password": "postgres"

      }],
      "cache": {
        "host": "",
        "port": 0,
        "pass": ""
      }
    };
}
