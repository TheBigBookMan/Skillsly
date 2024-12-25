using AuthService.Domain;

namespace AuthService.Infrastructure.Repositories;

public class UserRepository : IUserRepository
{
    private readonly ApplicationContext _context;

    public UserRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<void> AddUserAsync(UserRepository user)
    {
        
    }

    public async Task<User?> GetUserByEmail(string email)
    {

    }

    public async Task<bool> UserExists(string email)
    {
        
    }

}