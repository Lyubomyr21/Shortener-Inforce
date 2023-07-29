using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shortener.Data;
using Shortener.Interfaces;
using Shortener.Models.Dto;
using Shortener.Services;
using System.Data;
using System.Data.Entity;
using System.Data.SqlClient;

namespace Shortener.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LinksShortenerController : ControllerBase
    {
        private readonly ILinksService _linksService;
        private readonly DataContext _context;

        public LinksShortenerController(ILinksService linksService, DataContext context) 
        {
            _linksService = linksService;
            _context = context;
        }


        [HttpGet]
        public IActionResult GetLinks()
        {
            var links = _context.Links.ToList();
            return Ok(links);
        }
        

        [HttpPost]
        public async Task<IActionResult> CreateShortLink(LinkDto linkModel)
        {
            var shortLink = new Link
            {
                LongLink = linkModel.TransferLongLink,
                ShortLink = _linksService.GenerateShortLink()
            };

            var link = _context.Links.Add(shortLink);
            await _context.SaveChangesAsync();

            return Ok(link);
        }
    }
}