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

        public List<Festival> GetFestivalsByUid(int userId)
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
                            Camping = reader.GetBoolean(reader.GetOrdinal("Camping")),
                            UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                            ImageUrl = reader.GetString(reader.GetOrdinal("ImageUrl")),
                        };
                        festivals.Add(festival);
                    }
                    reader.Close();
                    return festivals;
                }

            }
        }

        public Festival GetFestivalById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                       SELECT
                                       Id, [Name], Headliner, Location, [Date], Liked, Lacked, Camping, UserId, ImageUrl
                                       FROM Festival
                                       WHERE Id = @Id
                                       ";
                    cmd.Parameters.AddWithValue("@id", id);
                    SqlDataReader reader = cmd.ExecuteReader();

                    if (reader.Read())
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
                            Camping = reader.GetBoolean(reader.GetOrdinal("Camping")),
                            UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                            ImageUrl = reader.GetString(reader.GetOrdinal("ImageUrl")),
                        };

                        reader.Close();
                        return festival;
                    }
                    reader.Close();
                    return null;
                }
            }
        }

        public void CreateFestival(Festival festival)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                      INSERT INTO Festival
                                      (Id, [Name], Headliner, Location, [Date], Liked, Lacked, Camping, UserId, ImageUrl)
                                      OUTPUT INSERTED.ID
                                      VALUES (@id, @name, @headliner, @location, @date, @liked, @lacked, @camping, @userId, @imageUrl)
                                      ";

                    cmd.Parameters.AddWithValue("@name", festival.Name);
                    cmd.Parameters.AddWithValue("@headliner", festival.Headliner);
                    cmd.Parameters.AddWithValue("@location", festival.Location);
                    cmd.Parameters.AddWithValue("@date", festival.Date);
                    cmd.Parameters.AddWithValue("@liked", festival.Liked);
                    cmd.Parameters.AddWithValue("@lacked", festival.Lacked);
                    cmd.Parameters.AddWithValue("@camping", festival.Camping);
                    cmd.Parameters.AddWithValue("@imageUrl", festival.ImageUrl);

                    int id = (int)cmd.ExecuteScalar();

                    festival.Id = id;
                }
            }
        }

        public void DeleteFestival(int id)
        {
            using(SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                      DELETE FROM Festival
                                      WHERE Id = @id
                                      ";
                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void UpdateFestival(Festival festival)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                      UPDATE Festival
                                      SET
                                          Name = @name,
                                          Headliner = @headliner,
                                          Location = @location,
                                          Date = @date,
                                          Liked = @liked,
                                          Lacked = @lacked,
                                          Camping = @camping,
                                          UserId = @userId,
                                          ImageUrl = @imageUrl,
                                      WHERE Id = @id
                                      ";

                    cmd.Parameters.AddWithValue("@name", festival.Name);
                    cmd.Parameters.AddWithValue("@headliner", festival.Headliner);
                    cmd.Parameters.AddWithValue("@location", festival.Location);
                    cmd.Parameters.AddWithValue("@date", festival.Date);
                    cmd.Parameters.AddWithValue("@liked", festival.Liked);
                    cmd.Parameters.AddWithValue("@lacked", festival.Lacked);
                    cmd.Parameters.AddWithValue("@camping", festival.Camping);
                    cmd.Parameters.AddWithValue("@imageUrl", festival.ImageUrl);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
