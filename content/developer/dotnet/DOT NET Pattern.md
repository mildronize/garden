---
title: .NET Pattern
---


# Method Extension

[Extension Methods - C# Programming Guide | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods)

Extension methods enable you to "add" methods to existing types without creating a new derived type, recompiling, or otherwise modifying the original type. Extension methods are static methods, but they're called as if they were instance methods on the extended type.

```csharp
// Define Extenion
// Extension.cs

public static ItemDto AsDto(this Item item)
{
    return new ItemDto
    {
        Id = item.Id,
        Name = item.Name,
        Price = item.Price,
        CreatedDate = item.CreatedDate
    };
}

// Controller

[HttpGet]
public IEnumerable<ItemDto> GetItems()
{
    return _itemRepository.GetItems().Select(item => item.AsDto());
}

// Same as 

[HttpGet]
public IEnumerable<ItemDto> GetItems()
{
    return _itemRepository.GetItems().Select(item => new ItemDto
    {
        Id = item.Id,
        Name = item.Name,
        Price = item.Price,
        CreatedDate = item.CreatedDate
    });
}
```

# AutoMapper

[NuGet Gallery | AutoMapper.Extensions.Microsoft.DependencyInjection 8.1.1](https://www.nuget.org/packages/AutoMapper.Extensions.Microsoft.DependencyInjection/)

# Clean Arch

[Architecting ASP.NET Core Applications: Best Practices | Pluralsight](https://app.pluralsight.com/library/courses/architecting-asp-dot-net-core-applications-best-practices/table-of-contents)

[How to use Firebase Auth with a custom (node) backend | by Daniel Peach | ITNEXT](https://itnext.io/how-to-use-firebase-auth-with-a-custom-node-backend-99a106376c8a?gi=0f88542bd587)

