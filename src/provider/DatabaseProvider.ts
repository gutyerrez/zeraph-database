import { IProvider } from '@zeraph/provider'

export abstract class DatabaseProvider<T> implements IProvider {
  protected provider: T

  public abstract prepare(): void

  public provide(): T {
    return this.provider
  }
}