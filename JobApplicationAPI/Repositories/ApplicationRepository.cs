using JobApplicationAPI.Data;
using JobApplicationAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace JobApplicationAPI.Repositories
{
    public class ApplicationRepository : IApplicationRepository
    {
        private readonly ApplicationDbContext _context;

        public ApplicationRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<JobApplication>> GetAllApplications()
        {
            return await _context.JobApplications.ToListAsync();
        }

        public async Task<JobApplication?> GetApplicationById(int id)
        {
            return await _context.JobApplications.FindAsync(id);
        }

        public async Task AddApplication(JobApplication application)
        {
            await _context.JobApplications.AddAsync(application);
        }

        public void UpdateApplication(JobApplication application)
        {
            _context.JobApplications.Update(application);
        }

        public async Task SaveChanges()
        {
            await _context.SaveChangesAsync();
        }
    }
}
