import { Template } from './template';

// this represents what is returned from the database.  it's structure is defined by the api. data is defined as an any
// because it could be template records or it could be business records.  it's whatever is returned from the database.
export interface SimpleGetResult {
  returncode: number
  returnmsg: string
  data: any
}
