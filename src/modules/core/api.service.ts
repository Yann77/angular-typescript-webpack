import 'angular';

import Observable = Rx.Observable;
import IRequestConfig = angular.IRequestConfig;
import IHttpService = angular.IHttpService;
import IModule = angular.IModule;

export class ApiService {
    static $inject = ['$http', 'rx'];

    constructor(private $http : IHttpService, private rx : IModule) {
    }

    asObservable = (config:IRequestConfig):Observable<{any}> => {
        return Observable
            .fromPromise(this.$http(config))
            .map((response) => {
                console.log('Return data');
                console.log(response.data[0]);
                return response.data[0];
            })
            .catch(function(e) {
                return Observable.return(e)
            });
    }

}

angular.module('app.core').service('apiService', ApiService);