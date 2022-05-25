using MusicFestivalTracker.Models;

namespace MusicFestivalTracker.Repositories
{
    public interface IUserRepo
    {
        User GetUserById(string id);
        void CreateUser(User user);
    }
}
