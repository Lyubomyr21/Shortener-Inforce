using System.ComponentModel.DataAnnotations;

namespace Shortener.Models
{
    public class Link
    {
        [Key]
        public int Id { get; set; }
        public string LongLink { get; set; }
        public string? ShortLink { get; set; }
    }
}
