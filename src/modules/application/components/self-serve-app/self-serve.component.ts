import Component from '../../../../decorators';

import "angular-material/angular-material.min.css";
import '../../../core/api.service';
import IRequestConfig = angular.IRequestConfig;

@Component('app.application', 'selfServeComponent', {
    controllerAs: 'ctrl',
    template: require('./self-serve.component.html')
})
export class SelfServeComponent {
    termsAccepted:boolean;
    selectedStep:number;
    stepProgress:number;
    maxStep:number;
    showBusyText:boolean;
    stepData = [];

    static $inject = ["$q", "$timeout", "apiService"];

    constructor(private $q, private $timeout, private apiService) {
        this.termsAccepted = false;
        this.selectedStep = 1;
        this.stepProgress = 1;
        this.maxStep = 3;
        this.showBusyText = false;
        this.stepData = [
            {step: 1, completed: false, optional: false, data: {validated: true}},
            {step: 2, completed: false, optional: false, data: {}},
            {step: 2, completed: false, optional: false, data: {email: 'bob@acme.com', agencyName: 'ACME inc.'}}];
    }

    $routerOnActivate = (next): void => {
        console.log('routerOnActivate, email = ' + next.params.email);
        let config: IRequestConfig = {
            method: 'POST',
            url: '/api/users/me',
            responseType: 'json',
            data: {
                email: next.params.email
            }
        };

        this.apiService.asObservable(config)
            .subscribe((results) => {
                if (results.data) {
                }
            });
    }

    public nextStep():void {
        //do not exceed into max step
        if (this.selectedStep >= this.maxStep) {
            return;
        }
        //do not increment stepProgress when submitting from previously completed step
        if (this.selectedStep === this.stepProgress - 1) {
            this.stepProgress = this.stepProgress + 1;
        }
        this.selectedStep = this.selectedStep + 1;
    }

    public moveToPreviousStep():void {
        if (this.selectedStep > 0) {
            this.selectedStep = this.selectedStep - 1;
        }
    }

    public submitCurrentStep(stepData, isSkip):void {
        var deferred = this.$q.defer();
        this.showBusyText = true;
        var self = this;
        if (!stepData.completed && !isSkip) {
            //simulate $http
            this.$timeout(function () {
                self.showBusyText = false;
                deferred.resolve({status: 200, statusText: 'success', data: {}});
                //move to next step when success
                stepData.completed = true;
                self.nextStep();
            }, 1000)
        } else {
            this.showBusyText = false;
            this.nextStep();
        }
    }

    public openOauthPlayground():void {
        let url:string = 'https://accounts.google.com/o/oauth2/auth?redirect_uri=https%3A%2F%2Fdevelopers.google.com%2Foauthplayground&response_type=code&client_id=407408718192.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&approval_prompt=force&access_type=offline';
        window.open(url, '', 'width=450,height=600');
    }
}
