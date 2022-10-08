import Redis from 'ioredis'

import { DatabaseProvider } from '@zeraph/database/provider/DatabaseProvider'

export class RedisDatabaseProvider extends DatabaseProvider<Redis> {
  private host!: string
  private port!: number
  private password!: string
  private username!: string
  private database!: number

  constructor(
    host: string,
    port: number,
    username: string,
    password: string,
    database: number = 0
  ) {
    super()

    this.host = host
    this.port = port
    this.username = username
    this.password = password
    this.database = database
  }

  public override prepare() {
    this.provider = new Redis({
      host: this.host,
      port: this.port,
      username: this.username,
      password: this.password,
      db: this.database
    })
  }
}