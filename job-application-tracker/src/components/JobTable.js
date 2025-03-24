import React from "react";

const JobTable = ({ jobs, onEdit, currentPage, totalPages, onPageChange }) => {

  const handleStatusChange = (job, newStatus) => {
    const updatedJob = { ...job, status: newStatus };
    onEdit(updatedJob); 
  };

  return (
    <div>
      <h2>Job Applications</h2>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Position</th>
            <th>Status</th>
            <th>Date Applied</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.companyName}</td>
              <td>{job.position}</td>
              <td>
                <select
                  value={job.status}
                  onChange={(e) => handleStatusChange(job, e.target.value)}
                >
                  <option value="Applied">Applied</option>
                  <option value="Interview">Interview</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>
              <td>{new Date(job.dateApplied).toLocaleDateString()}</td>
              <td>
                <button onClick={() => onEdit(job)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default JobTable;
