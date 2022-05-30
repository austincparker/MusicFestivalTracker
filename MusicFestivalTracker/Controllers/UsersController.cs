using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MusicFestivalTracker.Models;
using MusicFestivalTracker.Repositories;

namespace MusicFestivalTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : Controller
    {
        private readonly IUserRepo _userRepo;

        public UsersController(IUserRepo userRepository)
        {
            _userRepo = userRepository;
        }

        [HttpGet("{id}")]
        public IActionResult GetUserById(int id)
        {
            User user = _userRepo.GetUserById(id);

            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public IActionResult CreateUser(User user)
        {
            if (user == null)
            {
                return NotFound();

            }
            else
            {
                _userRepo.CreateUser(user);
                return Ok(user);
            }

        }
    }
}
