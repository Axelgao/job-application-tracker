import React, { useState } from "react";

const JobForm = ({ onAdd }) => {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [dateApplied, setDateApplied] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!companyName || !position || !dateApplied) return;
    onAdd({ companyName, position, status: "Applied", dateApplied });
    setCompanyName("");
    setPosition("");
    setDateApplied("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Job</h2>
      <label>
        Company Name:
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Position:
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </label>
      <br />
      <label>
        Date Applied:
        <input
          type="date"
          value={dateApplied}
          onChange={(e) => setDateApplied(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;
