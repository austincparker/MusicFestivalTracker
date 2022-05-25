namespace MusicFestivalTracker.Models
{
    public class Festival
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Headliner { get; set; }
        public string Location { get; set; }
        public string Date { get; set; }
        public string Liked { get; set; }
        public string Lacked { get; set; }
        public bool Camping { get; set; }
        public int UserId { get; set; }
        public string ImageUrl { get; set; }
    }
}
