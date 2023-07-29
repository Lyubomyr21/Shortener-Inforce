using Microsoft.EntityFrameworkCore;

namespace Shortener.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Link> Links { get; set; }

    }
}
