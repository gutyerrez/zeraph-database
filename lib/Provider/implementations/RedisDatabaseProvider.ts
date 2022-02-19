import { IDatabaseProvider } from '..'

import Redis, { Redis as IORedis } from 'ioredis'

export class RedisDatabaseProvider implements IDatabaseProvider<IORedis> {
  private provider!: IORedis

  private host!: string
  private port!: number
  private username!: string
  private password!: string
  private database!: number

  constructor(
    host: string,
    port: number,
    username: string,
    password: string,
    database: number
  ) {
    this.host = host
    this.port = port
    this.username = username
    this.password = password
    this.database = database
  }

  public prepare = () => {
    this.provider = new Redis({
      host: this.host,
      port: this.port,
      username: this.username,
      password: this.password,
      db: this.database
    })
  }

  public provide = () => this.provider
}
