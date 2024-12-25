using AuthService.Domain;
using Microsoft.EntityFrameworkCore;

namespace AuthService.Infrastructure.Repositories;

public class UserRepository : IUserRepository
{
    private readonly ApplicationDbContext _context;

    public UserRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<bool> AddUserAsync(User user)
    {
        await _context.AddUserAsync(user);
        await _context.SaveChangesAsync();
    }

    public async Task<User?> GetUserByEmail(string email)
    {
        return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
    }

    public async Task<bool> UserExists(string email)
    {
        return await _context.Users.AnyAsync(u => u.Email == email);
    }
}