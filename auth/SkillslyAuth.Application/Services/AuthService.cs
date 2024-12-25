using AuthService.Comain;

namespace AuthService.Application.Services;

public class AuthService
{
    private readonly IUserRepositry _userRepository;

    public async Task<bool> RegisterUser(string FirstName, string LastName, string Email, string Password)
    {
        // TODO use the UserExists method

        // TODO if not then return with error about user exists already
        
        // TODO if all good then create user

    }

    public async Task<bool> LoginUser(string Email, string Password)
    {

    }
}