using MusicFestivalTracker.Models;
using Microsoft.Data.SqlClient;

namespace MusicFestivalTracker.Repositories
{
    public class FestivalRepo : IFestivalRepo
    {
        private readonly IConfiguration _config;

        public FestivalRepo(IConfiguration configuration)
        {
            _config = configuration;
        }

        public SqlConnection Connection
        {
            get
            {
                return new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            }
        }

        public List<Festival> GetFestivalsByUid(string userId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT Id, Name, Headliner, Location, Date, Liked, Lacked, Camping, UserId, ImageUrl
                                        FROM Festival
                                        WHERE UserId = @userId";
                    cmd.Parameters.AddWithValue("@userId", userId);
                    SqlDataReader reader = cmd.ExecuteReader();
                    List<Festival> festivals = new List<Festival>();
                    while (reader.Read())
                    {
                        Festival festival = new Festival()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                            Headliner = reader.GetString(reader.GetOrdinal("Headliner")),
                            Location = reader.GetString(reader.GetOrdinal("Location")),
                            Date = reader.GetString(reader.GetOrdinal("Date")),
                            Liked = reader.GetString(reader.GetOrdinal("Liked")),
                            Lacked = reader.GetString(reader.GetOrdinal("Lacked")),
                            Camping = reader.GetBoolean(reader.GetBoolean("Camping")),
                            UserId = reader.GetString(reader.GetOrdinal("UserId")),
                            ImageUrl = reader.GetString(reader.GetOrdinal("ImageUrl")),
                        };
                        festivals.Add(festival);
                    }
                    reader.Close();
                    return festivals;
                }

            }
        }
    }
}
