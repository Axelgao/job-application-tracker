using JobApplicationAPI.Models;

namespace JobApplicationAPI.Repositories
{
    public interface IApplicationRepository
    {
        Task<IEnumerable<JobApplication>> GetAllApplications();
        Task<JobApplication?> GetApplicationById(int id);
        Task AddApplication(JobApplication application);
        void UpdateApplication(JobApplication application);
        Task SaveChanges();
    }
}
