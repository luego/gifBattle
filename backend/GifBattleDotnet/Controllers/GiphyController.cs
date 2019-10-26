using System.Collections.Generic;
using System.Threading.Tasks;
using GifBattleDotnet.Models;
using GitBattleDotnet.Utils;
using Microsoft.AspNetCore.Mvc;

namespace GitBattleDotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GiphyController : ControllerBase
    {

        readonly string BaseUrl = "https://api.giphy.com/v1/gifs";

        [HttpGet]
        [Route("random")]
        public async Task<ActionResult<GifGiphy>> RandomAsync()
        {
            HttpRequestClient client = new HttpRequestClient();
            //HttpResponse<List<Gif>> response = new HttpResponse<List<Gif>>();
            HttpResponse<GifGiphy> response = await client.GetAsync<HttpResponse<GifGiphy>>(BaseUrl + "/random?api_key=uDl0yncHQqgk1r6zkkCh0tNkHGqpQmUn");

            return response.Data;
        }
    }
}
