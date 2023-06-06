import { Template } from './template';

// this represents what is returned from the database.  it's structure is defined by the api
export interface SimpleGetResult {
  returncode: number
  returnmsg: string
  data: Template[]
}
