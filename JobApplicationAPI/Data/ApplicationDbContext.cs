using Microsoft.EntityFrameworkCore;
using JobApplicationAPI.Models;

namespace JobApplicationAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<JobApplication> JobApplications { get; set; }
    }
}
