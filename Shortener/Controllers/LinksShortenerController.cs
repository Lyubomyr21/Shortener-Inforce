using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shortener.Models.Dto;
using System.Data;
using System.Data.SqlClient;

namespace Shortener.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LinksShortenerController : ControllerBase
    {

        private readonly IConfiguration _configuration;
        public LinksShortenerController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        /*[HttpPost]
        public IActionResult CreateShortLink(LinkDto linkModel)
        {

        }

       /* [HttpGet]
        public IActionResult GetShortLink()
        {
            
        }*/
    }
}
