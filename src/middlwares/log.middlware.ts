import { Middlware } from 'alosaur/decorator/Middlware.ts';

import { MiddlwareTarget } from 'alosaur/models/middlware-target.ts';

@Middlware(new RegExp('/'))
export class Log implements MiddlwareTarget {
  private date: Date = new Date();
  onPreRequest(request: any, responce: any) {
    return new Promise((res, rej) => {
      this.date = new Date();
      res();
    });
  }
  onPostRequest(request: any, responce: any) {
    return new Promise((resolve, rej) => {
      console.log(new Date().getTime() - this.date.getTime());
      resolve();
    });
  }
}
