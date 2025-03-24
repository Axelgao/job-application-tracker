import React, { useState, useEffect } from "react";
import { getAllJobs, addJob, updateJob } from "../services/jobService";
import JobTable from "../components/JobTable";
import JobForm from "../components/JobForm";
import "./../styles/jobDashboard.css";

const JobDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getAllJobs();
      setJobs(data);
    };
    fetchJobs();
  }, []);

  const handleAddJob = async (job) => {
    await addJob(job);
    setJobs(await getAllJobs());
  };

  const handleUpdateJob = async (updatedJob) => {
    await updateJob(updatedJob);
    setJobs(await getAllJobs());
  };

  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const currentJobs = jobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <JobForm onAdd={handleAddJob} />
      <JobTable
        jobs={currentJobs}
        onEdit={handleUpdateJob}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default JobDashboard;
