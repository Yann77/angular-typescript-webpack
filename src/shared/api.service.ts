import Observable = Rx.Observable;
import IRequestShortcutConfig = angular.IRequestShortcutConfig;
import IRequestConfig = angular.IRequestConfig;

export class apiService {
    static $inject = ['$http', 'rx'];

    constructor(private $http : ng.IHttpService, private rx : ng.IModule) {
    }

    public get = (config: IRequestConfig): Observable<{any}> => {
        return Observable
            .fromPromise(this.$http(config))
            .map(function(response){
                console.log(response.data);
                return response.data[1];
            });
    }
}