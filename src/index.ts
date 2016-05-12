import "./modules/application/angular/index";
import "angular";
import "@angular/router/angular1/angular_1_router";

// load our default (non specific) css
import "font-awesome/css/font-awesome.css";
import "angular-material/angular-material.min.css";
import "./styles/screen.scss";

// load specific components
import "./modules/application/angular/components/self-serve-app/self-serve-component";

angular.module('app', ['ngComponentRouter', 'app.application'])
    .value('$routerRootComponent', 'app')
    .component('app', {
        template:
        '<h1>Self Serve Signup Process</h1>\n'+
        '<ng-outlet></ng-outlet>\n',
        $routeConfig: [
            {path: '/', name: 'SelfServeComponent', component: 'selfServeComponent', useAsDefault: true}
        ]
    });

angular.bootstrap(document, ['app'], {
    strictDi: true
});