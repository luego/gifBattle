namespace GifBattleDotnet.Models
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private IGifRepository _gif;
        private readonly IGifBattleDatabaseSettings settings;

        public IGifRepository Gif {
            get {
                if(_gif == null)
                {
                    _gif = new GifRepository(settings);
                }
 
                return _gif;
            }
        }

        public RepositoryWrapper(IGifBattleDatabaseSettings settings){
            this.settings = settings;
        }
    }
}