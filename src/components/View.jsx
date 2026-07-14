import axios from "axios";
import React, { useEffect, useState } from "react";

const View = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .post("http://localhost:3000/view")
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Hackathon Team Details</h3>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Team ID</th>
              <th>Team Name</th>
              <th>Leader Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>College</th>
              <th>Members</th>
              <th>Project Title</th>
              <th>Problem Track</th>
              <th>Technology Stack</th>
              <th>Mentor</th>
              <th>Registration Date</th>
              <th>Table / Station No.</th>
            </tr>
          </thead>

          <tbody>
            {data.map((team) => (
              <tr key={team._id}>
                <td>{team.team_id}</td>
                <td>{team.team_name}</td>
                <td>{team.team_leader_name}</td>
                <td>{team.leader_email}</td>
                <td>{team.leader_phone}</td>
                <td>{team.college_name}</td>
                <td>{team.number_of_members}</td>
                <td>{team.project_title}</td>
                <td>{team.problem_statement_track}</td>
                <td>{team.technology_stack}</td>
                <td>{team.mentor_name}</td>
                <td>{team.registration_date}</td>
                <td>{team.table_station_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View;