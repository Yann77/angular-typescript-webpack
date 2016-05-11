import Component from '../../../../../decorators';

@Component('app.application','selfServeComponent', {
    template: '<h2>MyApp</h2><ng-outlet></ng-outlet>',
    $routeConfig: [
        //{path: '/', name: 'HeroList', component: 'heroList', useAsDefault: true},
        //{path: '/:id', name: 'HeroDetail', component: 'heroDetail'}
    ]
})
export class SelfServeComponent {
    constructor() {
        console.log('SelfServeComponent constructor...');
    }
}
