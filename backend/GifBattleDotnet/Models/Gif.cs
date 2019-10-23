using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GitBattleDotnet.Models
{
    public class Gif
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Url { get; set; }
        public string Caption {get;set;}
        public int Vote {get;set;}
    }
}