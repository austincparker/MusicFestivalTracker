using MusicFestivalTracker.Models;

namespace MusicFestivalTracker.Repositories
{
    public interface IUserRepo
    {
        User GetUserById(int id);
        void CreateUser(User user);
    }
}
