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
        template: `<div layout="row" layout-align="center center">
        <md-content layout="column" flex="75">
        <h1>Self Serve Signup Process</h1>
        <ng-outlet></ng-outlet>
        </md-content>
        </div>`,
        $routeConfig: [
            {path: '/', name: 'SelfServeComponent', component: 'selfServeComponent', useAsDefault: true}
        ]
    });

angular.bootstrap(document, ['app'], {
    strictDi: true
});