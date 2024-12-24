using AuthService.Comain;

namespace AuthService.Application.Services;

public class AuthService
{
    private readonly IUserRepositry _userRepository;

    public async Task<bool> RegisterUser(string FirstName, string LastName, string Email, string Password)
    {

    }

    public async Task<bool> LoginUser(string Email, string Password)
    {
        
    }
}