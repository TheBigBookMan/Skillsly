using AuthService.Domain;
using AuthService.Infrastructure.Repositories;

namespace AuthService.Application.Services;

public class AuthService
{
    private readonly IUserRepository _userRepository;

    public AuthService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<bool> RegisterUser(string FirstName, string LastName, string Email, string Password)
    {
        if(await _userRepository.UserExists(Email))
        {
            throw new Exception("User already exists.");
        }

        var hashedPassword = BCrypt.Net.BCrypt.HashPassword(Password);

        var user = new User{
            Id = Guid.NewGuid(),
            Email = Email,
            PasswordHash = hashedPassword,
            FirstName = FirstName,
            LastName = LastName,
            CreatedAt = DateTime.UtcNow
        };

        await _userRepository.AddUserAsync(user);

        return true;
    }

    public async Task<bool> LoginUser(string Email, string Password)
    {
        

    }
}