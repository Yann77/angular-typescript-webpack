export default function Component(moduleOrName: string | ng.IModule, selector: string, options: ng.IComponentOptions) {
    return (controller: Function) => {
        var module = typeof moduleOrName === "string"
            ? angular.module(moduleOrName)
            : moduleOrName;
        module.component(selector, angular.extend(options, { controller: controller }));
    }
}