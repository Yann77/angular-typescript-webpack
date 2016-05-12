import Component from '../../../../../decorators';

@Component('app.application','selfServeComponent', {
    template: '<h2>Steps</h2>'
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
