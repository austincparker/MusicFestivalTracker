using MusicFestivalTracker.Models;
using Microsoft.Data.SqlClient;

namespace MusicFestivalTracker.Repositories
{
        public class UserRepo : IUserRepo
        {
            private readonly IConfiguration _config;

            public UserRepo(IConfiguration configuration)
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

            public User GetUserById(int id)
            {
                using (SqlConnection conn = Connection)
                {
                    conn.Open();
                    using (SqlCommand cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"
                                            SELECT * FROM [User
                                            WHERE Id = @id
                                            ";
                        cmd.Parameters.AddWithValue("id", id);

                        SqlDataReader reader = cmd.ExecuteReader();

                        if (reader.Read())
                        {
                            User user = new User
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("id")),
                                FullName = reader.GetString(reader.GetOrdinal("fullName")),
                                FirebaseKey = reader.GetString(reader.GetOrdinal("firebaseKey")),
                            };

                            return user;
                        }
                        else
                        {
                            reader.Close();
                            return null;
                        }
                    }
                }
            }

            public void CreateUser(User user)
            {
                using (SqlConnection conn = Connection)
                {
                    conn.Open();
                    using (SqlCommand cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"
                        INSERT INTO [User] (Id, FullName, FirebaseKey)
                        OUTPUT INSERTED.ID
                        VALUES (@id, @fullName, @firebaseKey);
                    ";

                        cmd.Parameters.AddWithValue("@id", user.Id);
                        cmd.Parameters.AddWithValue("@fullName", user.FullName);
                        cmd.Parameters.AddWithValue("@firebaseKey", user.FirebaseKey);

                        cmd.ExecuteNonQuery();


                    }
                }
            }
        }
    }
