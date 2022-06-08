import { Container, Service } from "typedi";

@Service()
export class DbService<T> {
  private db: any;

  constructor() {
    this.db = Container.get("db");
  }

  public async get(collection: string, query: any): Promise<any> {
    return this.db.collection(collection).find(query).toArray();
  }

  public async insert(collection: string, data: T): Promise<T> {
    return this.db.collection(collection).insertOne(data);
  }

  public async update(collection: string, query: any, data: any): Promise<any> {
    return this.db.collection(collection).updateOne(query, data);
  }

  public async delete(collection: string, query: any): Promise<any> {
    return this.db.collection(collection).deleteOne(query);
  }
}
