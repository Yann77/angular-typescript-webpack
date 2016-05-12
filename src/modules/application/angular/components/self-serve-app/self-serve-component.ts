import Component from '../../../../../decorators';
import "angular-material/angular-material.min.css";

@Component('app.application','selfServeComponent', {
    template: `<md-content flex="100">
    <div>
    <md-card>
    <md-toolbar>
    <div class="md-toolbar-tools">
        <h2>
            <md-icon md-svg-icon="md-menu"></md-icon><span>Steps</span>
        </h2>
    </div>
    </md-toolbar>
    <md-stepper-card-content class="md-no-padding">
        STEPPER CONTENT
    </md-stepper-card-content>
    </md-card>
    </div>
    </md-content>`
    //$routeConfig: [
    //    {path: '/signupConfirmation', name: 'SignupConfirmationStep', component: 'signupConfirmationComponent', useAsDefault: true},
    //    {path: '/provider', name: 'ProviderStep', component: 'providerComponent'},
    //    {path: '/provider', name: 'ProviderStep', component: 'providerComponent'},
    //]
})
export class SelfServeComponent {
    constructor() {
        console.log('SelfServeComponent constructor...');
    }
}
