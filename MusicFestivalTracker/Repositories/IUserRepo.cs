using MusicFestivalTracker.Models;

namespace MusicFestivalTracker.Repositories
{
    public interface IUserRepo
    {
        User GetUserByUid(string firebaseKey);
        void CreateUser(User user);
    }
}
