namespace AuthService.Domain;

public interface IUserRepository
{
    Task<bool> AddUserAsync(User user);
    Task<User?> GetUserByEmail(string email);
    Task<bool> UserExists(string email);
}