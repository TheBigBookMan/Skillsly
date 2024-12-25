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
        // TODO use the UserExists method

        // TODO if not then return with error about user exists already

        // TODO if all good then create user

    }

    public async Task<bool> LoginUser(string Email, string Password)
    {

    }
}