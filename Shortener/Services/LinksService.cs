using Shortener.Interfaces;
using HashidsNet;

namespace Shortener.Services
{
    public class LinksService : ILinksService
    {
        public string GenerateShortLink()
        {
            string urlsafe = string.Empty;
            Enumerable.Range(48, 75)
              .Where(i => i < 58 || i > 64 && i < 91 || i > 96)
              .OrderBy(o => new Random().Next())
              .ToList()
              .ForEach(i => urlsafe += Convert.ToChar(i)); // Store each char into urlsafe
            var Token = urlsafe.Substring(new Random().Next(0, urlsafe.Length), new Random().Next(2, 6));
            return Token;
        }

    }
}
