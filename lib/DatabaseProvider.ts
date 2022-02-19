import { Env } from '@vyrnn/zeraph-environment'

import {
  PostgreSQLDatabaseProvider
} from './Provider/implementations/PostgreSQLDatabaseProvider'

export class DatabaseProvider {
  public static prepare = () => {
    DatabaseProvider.Databases.PostgreSQL.MAIN.prepare()
  }

  public static Databases = class {
    public static PostgreSQL = class {
      public static MAIN: PostgreSQLDatabaseProvider
    }
  }
}