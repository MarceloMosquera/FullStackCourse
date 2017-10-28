import { Injectable } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Observable } from 'rxjs/Observable';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular,
    private processHTTPMsgService: ProcessHTTPMsgService) { }
  
    getLeaders(): Observable<Leader[]> {
      return this.restangular.all('leaders').getList();
    }
  
    getLeader(id: number): Observable<Leader> {
      return  this.restangular.one('leaders',id).get();
    }
  
    getFeaturedLeader(): Observable<Leader> {
      return this.restangular.all('leaders').getList({featured: true})
      .map(leaders => leaders[0]);
    }

}
