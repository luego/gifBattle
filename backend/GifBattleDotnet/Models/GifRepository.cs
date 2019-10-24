using GitBattleDotnet.Models;

namespace GifBattleDotnet.Models
{
    public class GifRepository : Repository.RepositoryBase<Gif>, IGifRepository
    {
        public GifRepository(IGifBattleDatabaseSettings settings) : base(settings)
        {
        }
    }
}