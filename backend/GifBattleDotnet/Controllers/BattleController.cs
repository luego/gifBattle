using System.Collections.Generic;
using System.Linq;
using GifBattleDotnet.Models;
using GitBattleDotnet.Models;
using Microsoft.AspNetCore.Mvc;

namespace GifBattleDotnet.Controllers
{
    [Route("api/battle")]
    [ApiController]
    public class BattleController : ControllerBase
    {
        private readonly IRepositoryWrapper _repoWrapper;

        public BattleController(IRepositoryWrapper repoWrapper){
            this._repoWrapper = repoWrapper;
        }

        [HttpGet]
        [Route("versus")]
        public IEnumerable<Gif> Versus()
        {
            var rnd = new System.Random();
            var gifAll = _repoWrapper.Gif.FindAll().OrderBy(item => rnd.Next()).Take(2);           
    
            return gifAll;
        }

        [HttpPost]
        [Route("create")]
        public Gif Create([FromBody] Gif gif){
            return _repoWrapper.Gif.Create(gif);
        }

        [HttpPost]
        [Route("vote")]
        public Gif Vote([FromBody] string id){
            IGifRepository gif =  _repoWrapper.Gif;
            var model = gif.FindOneByCondition(x => x.Id == id);
            model.Vote += 1;
            gif.Update(x => x.Id == id,model);
            return model;
        }
    }
}