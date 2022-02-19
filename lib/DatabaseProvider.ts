import { PostgreSQLDatabaseProvider } from './Provider/implementations/PostgreSQLDatabaseProvider'

import { RedisDatabaseProvider } from './Provider/implementations/RedisDatabaseProvider'

export class DatabaseProvider {
  public static prepare = () => {
    DatabaseProvider.Databases.PostgreSQL.MAIN.prepare()
  }

  public static Databases = class {
    public static PostgreSQL = class {
      public static MAIN: PostgreSQLDatabaseProvider
    }

    public static Redis = class {
      public static MAIN: RedisDatabaseProvider
    }
  }
}