using GitBattleDotnet.Models;
using Microsoft.EntityFrameworkCore;

namespace GifBattleDotnet.Models
{
    public class GifBattleContext : DbContext
    {
        public GifBattleContext(DbContextOptions options)
            :base(options)
        {
        }
 
        public DbSet<Gif> Gifs { get; set; }
    }
}