# smashwatcher

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

# Config File

At the root of the project, there should be a `config.json` file for the app to run. The file should take on this form:

```{
  "name": "Smash Watcher",
  "server": {
    "port": 3000,
    "sessionKey": ""
  },
  "databases": [
    {
      "name": "postgresql",
      "connector": "postgresql",
      "url": "postgres://postgres:ultimate@localhost/smashwatcher",
      "host": "localhost",
      "port": 5432,
      "user": "postgres",
      "password": "ultimate",
      "database": "smashwatcher"
    }
  ],
  "cache": {
    "host": "",
    "port": 0,
    "pass": ""
  }
}```
