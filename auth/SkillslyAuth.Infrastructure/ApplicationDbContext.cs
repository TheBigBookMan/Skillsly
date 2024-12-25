using Microsoft.EntityFrameworkCore;
using AuthService.Domain;

namespace AuthService.Infrastructure;

public class ApplicationDbContext : ApplicationDbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {

    }

    // ? Define tables to use here
    public DbSet<User> Users {get; set;}
}