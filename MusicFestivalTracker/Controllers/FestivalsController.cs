using MusicFestivalTracker.Models;
using MusicFestivalTracker.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MusicFestivalTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FestivalsController : Controller
    {

        private readonly IFestivalRepo _festivalRepo;

        public FestivalsController(IFestivalRepo festivalRepo)
        {
            _festivalRepo = festivalRepo;
        }

        [HttpGet("uid/{uid}")]
        // GET: FestivalsController
        public ActionResult GetFestivalsByUid(int uid)
        {
            var match = _festivalRepo.GetFestivalsByUid(uid);

            if (match == null)
            {
                return NotFound();
            }
            return Ok(match);
        }

        [HttpGet("{id}")]

        public ActionResult GetFestivalById(int id)
        {
            var match = _festivalRepo.GetFestivalById(id);

            if (match == null)
            {
                return NotFound();
            }
            return Ok(match);
        }

        [HttpPost]
        public IActionResult CreateFestival(Festival festival)
        {
            if (festival == null)
            {
                return NotFound();
            }
            else
            {
                _festivalRepo.CreateFestival(festival);
                return Ok(festival);
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateOrder(Festival festival)
        {
            int id = festival.Id;
            var match = _festivalRepo.GetFestivalById(id);

            if (match == null)
            {
                return NotFound();
            }
            else
            {
                _festivalRepo.UpdateFestival(festival);
                return Ok(festival);
            }

        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _festivalRepo.DeleteFestival(id);
        }
    }
}
