export default function Component(moduleOrName: string | ng.IModule, selector: string, options: {
    controller?: any,
    controllerAs?: string,
    template?: string | Function,
    templateUrl?: string | Function,
    bindings?: any,
    transclude?: boolean,
    require?: Object,
    $canActivate?: () => boolean,
    $routeConfig?: any[]
}) {
    return (controller: Function) => {
        var module = typeof moduleOrName === "string"
            ? angular.module(moduleOrName)
            : moduleOrName;
        module.component(selector, angular.extend(options, { controller: controller }));
    }
}