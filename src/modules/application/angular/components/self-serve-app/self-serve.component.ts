import Component from '../../../../../decorators';

import "angular-material/angular-material.min.css";

@Component('app.application', 'selfServeComponent', {
    controllerAs: 'ctrl',
    template: require<string>('./self-serve.component.html')
})
export class SelfServeComponent {
    selectedStep:number;
    stepProgress:number;
    maxStep:number;
    showBusyText:boolean;
    stepData = [];

    static $inject = ["$q", "$timeout"];

    constructor(private $q, private $timeout) {
        this.selectedStep = 1;
        this.stepProgress = 1;
        this.maxStep = 3;
        this.showBusyText = false;
        this.stepData = [
            {step: 1, completed: false, optional: false, data: {validated: true}},
            {step: 2, completed: false, optional: false, data: {}}];
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
}
