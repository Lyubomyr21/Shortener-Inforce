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
        public async Task<IActionResult> CreateShortLink([FromBody] LinkDto linkModel)
        {
            var linkObject = new Link
            {
                LongLink = linkModel.BaseLink,
                ShortLink = _linksService.GenerateShortLink()
            };

            var link = _context.Links.Add(linkObject) ;
            await _context.SaveChangesAsync();

            return Ok(linkObject);
        }

        [HttpGet("{token}")]
        public IActionResult FindLinkByToken(string token)
        {
            var linkByToken = _context.Links.FirstOrDefault(x => x.ShortLink == token);
            if (linkByToken is null) return NotFound("Not found");
            return Ok(linkByToken);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteShortUrl(int id)
        {
            var shortLink = _context.Links.FirstOrDefault(x => x.Id == id);
            if (shortLink is null) return NotFound("Not found");

            _context.Links.Remove(shortLink);
            await _context.SaveChangesAsync();
            return Ok("Deleted");
        }
    }
}