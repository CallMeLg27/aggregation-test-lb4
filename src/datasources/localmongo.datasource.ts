import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'localmongo',
  connector: 'mongodb',
  url: '',
  host: 'localhost',
  port: 27017,
  user: '',
  password: '',
  database: 'agg-test',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class LocalmongoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'localmongo';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.localmongo', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
