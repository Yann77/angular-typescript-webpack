import "./modules/application/angular/index";
import "angular";
import "@angular/router/angular1/angular_1_router";
import "angular-material";

// load our default (non specific) css
import "font-awesome/css/font-awesome.css";
import "./styles/screen.scss";

// load specific components
import "./modules/application/angular/components/self-serve-app/self-serve-component";

angular.module('app', ['ngComponentRouter', 'ngMaterial', 'app.application'])
    .value('$routerRootComponent', 'app')
    .component('app', {
        template:
        '<div layout="row" layout-align="center center">\n'+
        '<md-content layout="column" flex="75">\n'+
        '<h1>Self Serve Signup Process</h1>\n'+
        '<ng-outlet></ng-outlet>\n'+
        '</md-content>\n'+
        '</div>\n',
        $routeConfig: [
            {path: '/', name: 'SelfServeComponent', component: 'selfServeComponent', useAsDefault: true}
        ]
    });

angular.bootstrap(document, ['app'], {
    strictDi: true
});