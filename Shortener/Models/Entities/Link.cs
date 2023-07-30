using System.ComponentModel.DataAnnotations;

namespace Shortener.Models
{
    // Represents a link entity in the database.
    public class Link
    {
        [Key]
        public int Id { get; set; }
        public string LongLink { get; set; }
        public string? ShortLink { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
