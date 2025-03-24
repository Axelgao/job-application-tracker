using Microsoft.AspNetCore.Mvc;
using JobApplicationAPI.Models;
using JobApplicationAPI.Repositories;

namespace JobApplicationAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationsController : ControllerBase
    {
        private readonly IApplicationRepository _repository;

        public ApplicationsController(IApplicationRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<JobApplication>>> GetAll()
        {
            return Ok(await _repository.GetAllApplications());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<JobApplication>> Get(int id)
        {
            var application = await _repository.GetApplicationById(id);
            return application == null ? NotFound() : Ok(application);
        }

        [HttpPost]
        public async Task<ActionResult> Post(JobApplication application)
        {
            await _repository.AddApplication(application);
            await _repository.SaveChanges();
            return CreatedAtAction(nameof(Get), new { id = application.Id }, application);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateJobApplication(int id, JobApplication updatedJob)
        {
            var jobApplication = await _repository.GetApplicationById(id);
            if (jobApplication == null)
            {
                return NotFound();
            }

            jobApplication.Status = updatedJob.Status;
            _repository.UpdateApplication(jobApplication);
            await _repository.SaveChanges();

            return NoContent();
        }

    }
}
