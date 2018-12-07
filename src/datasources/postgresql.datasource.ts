import { inject } from '@loopback/core';
import { juggler } from '@loopback/repository';
import * as config from './../utils/config';

export class PostgresqlDataSource extends juggler.DataSource {
  static dataSourceName = 'postgresql';

  constructor(
    @inject('datasources.config.postgresql', { optional: true })
    dsConfig: object = config.databases.find(db => db.name === this.dataSourceName);
  ) {
    super(dsConfig);
  }
}
