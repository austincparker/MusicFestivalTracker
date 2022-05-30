using MusicFestivalTracker.Models;

namespace MusicFestivalTracker.Repositories
{
    public interface IFestivalRepo
    {
        List<Festival> GetFestivalsByUid(int id);
        Festival GetFestivalById(int id);
        void CreateFestival(Festival festival);
        void DeleteFestival(int id);
        void UpdateFestival(Festival festival);


    }
}
