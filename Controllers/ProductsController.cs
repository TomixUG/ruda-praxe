using Microsoft.AspNetCore.Mvc;

namespace dutyfreeButReact.Models.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductsController : ControllerBase
{

    // dont touch
    private readonly ILogger<ProductsController> _logger;

    // dont touch
    public ProductsController(ILogger<ProductsController> logger)
    {
        _logger = logger;
    }

    // the API request 
    // gets data and sends it back to the client
    [HttpGet]
    public IEnumerable<Products> Get() // gets called on API request
    {
        return Enumerable.Range(1, 5).Select(index => new Products
        {
            ProductID = 46456,
            DateCreated = DateTime.Now.AddDays(index),
            CreatedBy = 4
        })
        .ToArray();


    }
}

