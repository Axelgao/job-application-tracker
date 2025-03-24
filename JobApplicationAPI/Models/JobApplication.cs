using System.ComponentModel.DataAnnotations;

namespace JobApplicationAPI.Models
{
    public class JobApplication
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string CompanyName { get; set; }

        [Required]
        public string Position { get; set; }

        public string Status { get; set; } = "Applied";

        [Required]
        public DateTime DateApplied { get; set; }
    }
}
