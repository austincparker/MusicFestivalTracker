﻿using MusicFestivalTracker.Models;

namespace MusicFestivalTracker.Repositories
{
    public class IFestivalRepo
    {
        List<Festival> GetFestivalsByUid(int id);
        Festival GetFestivalByid(int id);
        void CreateFestival(Festival festival);
        void DeleteFestival(string id);
        void UpdateFestival(Festival festival);


    }
}