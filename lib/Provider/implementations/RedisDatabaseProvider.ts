import { IDatabaseProvider } from '..'

import Redis, { Redis as IORedis } from 'ioredis'

import { Env } from '@vyrnn/zeraph-environment'

export class RedisDatabaseProvider implements IDatabaseProvider<IORedis> {
  private provider!: IORedis

  public prepare = () => {
    this.provider = new Redis({
      host: Env.getString('REDIS_HOST'),
      port: Env.getInt('REDIS_PORT'),
      username: Env.getString('REDIS_USERNAME'),
      password: Env.getString('REDIS_PASSWORD'),
      db: Env.getInt('REDIS_DATABASE')
    })
  }

  public provide = () => this.provider
}