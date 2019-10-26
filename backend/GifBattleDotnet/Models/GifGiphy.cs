namespace GifBattleDotnet.Models
{
    public class GifGiphy
    {
        public string Id { get; set; }
        public string Type { get; set; }
        public string Url { get; set; }
        public string Title { get; set; }
        public ImageGiphy images { get; set; }
    }

    public class ImageGiphy
    {
        public ImageOriginalGiphy Original { get; set; }
    }

    public class ImageOriginalGiphy
    {
        public string Url { get; set; }
    }
}