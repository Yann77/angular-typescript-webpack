//TODO: use IComponentOptions for options type when component router definitions updated
export default function Component(moduleOrName: string | ng.IModule, selector: string, options: any) {
    return (controller: Function) => {
        var module = typeof moduleOrName === "string"
            ? angular.module(moduleOrName)
            : moduleOrName;
        module.component(selector, angular.extend(options, { controller: controller }));
    }
}