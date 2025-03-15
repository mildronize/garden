_**Inversion of Control (IoC)**_

**Book**

[Dependency Injection in .NET](https://learning.oreilly.com/library/view/dependency-injection-in/9781935182504/)

**DEFINITION** **Within the context of [ASP.Net](http://asp.net/) Core, service refers to any class that provides functionality to an application**. These could be classes exposed by a library or code you’ve written for your application.

**For example**, in an e-commerce app, you might have a `TaxCalculator` that calculates the tax due on a particular product, taking into account the user’s location in the world. Or you might have a `ShippingCostService` that calculates the cost of shipping to a user’s location. A third service, `OrderTotalCalculatorService`, might use both of these services to work out the total price the user must pay for an order. Each service provides a small piece of independent functionality, but you can combine them to create a complete application. This is known as the _single responsibility principle_.

**DEFINITION** The _single responsibility principle_ (SRP) states that every class should be responsible for only a single piece of functionality—it should only need to change if that required functionality changes. It’s one of the five main design principles promoted by Robert C. Martin in _Agile Software Development, Principles, Patterns, and Practices_ (Pearson, 2013).

`OrderTotalCalculatorService` needs access to an instance of `ShippingCostService` and `TaxCalculator`. A naive approach to this problem is to use the `new` keyword and create an instance of a service whenever you need it. Unfortunately, this tightly couples your code to the specific implementation you’re using and can completely undo all the good work achieved by modularizing the features in the first place. In some cases, it may break the SRP by making you perform initialization code in addition to using the service you created.

One solution to this problem is to make it somebody else’s problem. When writing a service, you can declare your dependencies and let another class fill those dependencies for you. Your service can then focus on the functionality for which it was designed, instead of trying to work out how to build its dependencies.

This technique is called dependency injection or the Inversion of Control (IoC) principle, and it is a well-recognized _design pattern_ that is used extensively.

**DEFINITION** _Design patterns_ are solutions to common software design problems.

Typically, you’ll register the dependencies of your application into a “container,” which can then be used to create any service. This is true for both your own custom application services and the framework services used by [ASP.NET](http://ASP.NET) Core. You must register each service with the container before it can be used in your application.

**Injectable = Service** — for register the service

**Injector = Container** — for getting the instance of the service

[https://docs.microsoft.com/en-us/dotnet/core/extensions/dependency-injection](https://docs.microsoft.com/en-us/dotnet/core/extensions/dependency-injection)

[https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles#dependency-inversion](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles#dependency-inversion)

- **Angular Style**
    
    [https://github.com/mildjs/di](https://github.com/mildjs/di)
    
    - Injectable
    - injector
- **Container / Service Style**
    
    [https://github.com/typestack/typedi](https://github.com/typestack/typedi)
    
    ```jsx
    import { Container, Service } from 'typedi';
    
    @Service()
    class ExampleInjectedService {
      printMessage() {
        console.log('I am alive!');
      }
    }
    
    @Service()
    class ExampleService {
      constructor(
        // because we annotated ExampleInjectedService with the @Service()
        // decorator TypeDI will automatically inject an instance of
        // ExampleInjectedService here when the ExampleService class is requested
        // from TypeDI.
        private injectedService: ExampleInjectedService
      ) {}
    }
    
    const serviceInstance = Container.get(ExampleService);
    // we request an instance of ExampleService from TypeDI
    
    serviceInstance.injectedService.printMessage();
    ```
    

### D**ependency inversion**

The direction of dependency within the application should be in the direction of abstraction, not implementation details. Most applications are written such that compile-time dependency flows in the direction of runtime execution, producing a direct dependency graph. That is, if class A calls a method of class B and class B calls a method of class C, then at compile time class A will depend on class B, and class B will depend on class C, as shown in Figure 4-1.

![https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/media/image4-1.png](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/media/image4-1.png)

**Figure 4-1.** Direct dependency graph.

Applying the dependency inversion principle allows A to call methods on an abstraction that B implements, making it possible for A to call B at runtime, but for B to depend on an interface controlled by A at compile time (thus, _inverting_ the typical compile-time dependency). At run time, the flow of program execution remains unchanged, but the introduction of interfaces means that different implementations of these interfaces can easily be plugged in.

![https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/media/image4-2.png](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/media/image4-2.png)

**Figure 4-2.** Inverted dependency graph.

**Dependency inversion** is a key part of building loosely coupled applications, since implementation details can be written to depend on and implement higher-level abstractions, rather than the other way around. The resulting applications are more testable, modular, and maintainable as a result. The practice of _dependency injection_ is made possible by following the dependency inversion principle.