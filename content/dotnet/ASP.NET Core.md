
[# รวมเนื้อหาที่เกี่ยวข้องกับ ASP.net Core](https://ponggun.medium.com/%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B9%80%E0%B8%99%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AB%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%9A-asp-net-core-ac94c7315137)


## React

- [https://github.com/mildronize/aspnet-core-react-template](https://github.com/mildronize/aspnet-core-react-template)
- [https://www.youtube.com/watch?v=5OtUm1BLmG0](https://www.youtube.com/watch?v=5OtUm1BLmG0)
    - [https://github.com/jasontaylordev/CleanArchitecture](https://github.com/jasontaylordev/CleanArchitecture)






- [[Database]]
    
    If `dotnet ef` has not been installed, install it as a global tool:
    
    .NET CLICopy
    
    ```
      dotnet tool install --global dotnet-ef
    ```
    
    For more information on the CLI for EF Core, see [EF Core tools reference for .Net CLI](https://docs.microsoft.com/en-us/ef/core/miscellaneous/cli/dotnet).
    
    Run the following .NET CLI commands:
    
    .NET CLICopy
    
    ```
    dotnet ef migrations add InitialCreate
    dotnet ef database update
    ```
    
    - `ef migrations add InitialCreate`: Generates an _Migrations/{timestamp}_InitialCreate.cs_ migration file. The `InitialCreate` argument is the migration name. Any name can be used, but by convention, a name is selected that describes the migration. This is the first migration, so the generated class contains code to create the database schema. The database schema is based on the model specified in the `MvcMovieContext` class, in the _Data/MvcMovieContext.cs_ file.
    - `ef database update`: Updates the database to the latest migration, which the previous command created. This command runs the `Up` method in the _Migrations/{time-stamp}_InitialCreate.cs_ file, which creates the database.
    
    # EF CLI
    
    ```bash
    dotnet add package Microsoft.EntityFrameworkCore.Design
    ```
    
    ```
    dotnet ef migrations add InitialCreate
    dotnet ef database update
    ```
    
    Your startup project 'AuthorizeServer' doesn't reference Microsoft.EntityFrameworkCore.Design. This package is required for the Entity Framework Core Tools to work. Ensure your startup project is correct, install the package, and try again.
    
    # SQLite
    
    ```bash
    dotnet add package Microsoft.EntityFrameworkCore
    dotnet add package Microsoft.EntityFrameworkCore.Sqlite
    ```
    
    ```csharp
    using Microsoft.EntityFrameworkCore;
    
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddDbContext<ApplicationDbContext>(options =>
            options.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));
    }
    ```
    
    # Related Ref:
    
    [Get started with ASP.NET Core MVC](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app/start-mvc?view=aspnetcore-5.0&tabs=visual-studio)
    
    [Tutorial: Create a web API with ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-5.0&tabs=visual-studio)
    
    [Tutorial: Create a Razor Pages web app with ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/?view=aspnetcore-5.0)
    
    
    
