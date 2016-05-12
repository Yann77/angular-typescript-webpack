import "./modules/application/angular/index";
import "angular";
import "@angular/router/angular1/angular_1_router";

// load our default (non specific) css
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/screen.scss";

import "./modules/application/angular/components/selfServeApplication/SelfServeComponent";

//angular.module("app", ["ngComponentRouter", "app.application", "app.tweets", "app.about"])
angular.module('app', ['ngComponentRouter', 'app.application'])
    .value('$routerRootComponent', 'app')
    .component('app', {
        template:
        '<h1>Self Serve Signup process</h1>\n'+
        '<ng-outlet></ng-outlet>\n',
        $routeConfig: [
            {path: '/', name: 'SelfServeComponent', component: 'selfServeComponent', useAsDefault: true}
        ]
    });

angular.bootstrap(document, ['app'], {
    strictDi: true
});