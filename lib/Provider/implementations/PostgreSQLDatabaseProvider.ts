import { IDatabaseProvider } from '..';

import knex, { Knex } from 'knex'

export class PostgreSQLDatabaseProvider implements IDatabaseProvider<Knex> {
  private provider!: Knex

  private host!: string
  private port!: number
  private username!: string
  private password!: string
  private database!: string
  private schema!: string

  constructor(
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
    schema: string
  ) {
    this.host = host
    this.port = port
    this.username = username
    this.password = password
    this.database = database
    this.schema = schema
  }

  public prepare = () => {
    this.provider = knex({
      client: 'pg',
      connection: {
        host: this.host,
        port: this.port,
        user: this.username,
        password: this.password,
        database: this.database
      },
      searchPath: [ this.schema ],
      pool: {
        min: 0,
        max: 10
      }
    })
  }

  public provide = () => this.provider
}