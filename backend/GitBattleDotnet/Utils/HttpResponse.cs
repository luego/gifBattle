namespace GitBattleDotnet.Utils
{
    public class HttpResponse<T>
    {
        public T Data { get; set; }
        public StatusResponse Meta { get; set; }
    }

    public class StatusResponse
    {
        public int Status { get; set; }
        public string Msg { get; set; }
        public string Response_id { get; set; }
    }
}