import { IProvider } from '@vyrnn/zeraph-provider'

import { IRepository } from '..'

export class RepositoryProvider<T extends IRepository> implements IProvider<T> {
  private provider!: T

  private Repository!: { new(): T }

  constructor(
    Repository: { new(): T }
  ) { this.Repository = Repository }

  public prepare = () => this.provider = new this.Repository()

  public provide = () => this.provider
}
