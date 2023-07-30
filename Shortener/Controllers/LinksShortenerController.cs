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

        // Constructor for LinksShortenerController and context for database interaction.
        public LinksShortenerController(ILinksService linksService, DataContext context) 
        {
            _linksService = linksService;
            _context = context;
        }

        // Retrieves a list of links from the database and returns them as a response.
        [HttpGet]
        public IActionResult GetLinks()
        {
            var links = _context.Links.ToList();
            return Ok(links);
        }

        // Creates a new short link based on the provided LinkDto data and stores it in the database.
        [HttpPost]
        public async Task<IActionResult> CreateShortLink([FromBody] LinkDto linkModel)
        {
            var linkObject = new Link
            {
                LongLink = linkModel.BaseLink,
                ShortLink = _linksService.GenerateShortLink(),
                CreatedDate = DateTime.Now,
            };

            // Check for duplicate short link and regenerate if necessary
            if (_context.Links.FirstOrDefault(x => x.ShortLink == linkObject.ShortLink) != null)
            {
                linkObject.ShortLink = _linksService.GenerateShortLink();
            };

            //In further improvements can be redesigned based on GUID technology

            var link = _context.Links.Add(linkObject) ;
            await _context.SaveChangesAsync();

            return Ok(linkObject);
        }

        //Retrieves a link from the database based on the given short link token. 
        //Will be used to implement redirection
        [HttpGet("{token}")]
        public IActionResult FindLinkByToken(string token)
        {
            var linkByToken = _context.Links.FirstOrDefault(x => x.ShortLink == token);
            if (linkByToken is null) return NotFound("Not found");
            return Ok(linkByToken);
        }

        //Deletes a record from the database based on the given ID.
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