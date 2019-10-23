namespace GifBattleDotnet.Models
{
    public class GifBattleDatabaseSettings : IGifBattleDatabaseSettings
    {
        public string GifsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IGifBattleDatabaseSettings
    {
        string GifsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}