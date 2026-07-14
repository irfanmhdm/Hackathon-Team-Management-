import axios from 'axios';
import React, { useState } from 'react';

const Add = () => {

    const [input, changeInput] = useState({
        team_id: "",
        team_name: "",
        team_leader_name: "",
        leader_email: "",
        leader_phone: "",
        college_name: "",
        number_of_members: "",
        project_title: "",
        problem_statement_track: "",
        technology_stack: "",
        mentor_name: "",
        registration_date: "",
        table_station_number: ""
    });

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValue = () => {
        console.log(input);

        axios
            .post("http://localhost:3000/add", input)
            .then((response) => {
                console.log(response.data);
                alert("Registration Successful!");

                changeInput({
                    team_id: "",
                    team_name: "",
                    team_leader_name: "",
                    leader_email: "",
                    leader_phone: "",
                    college_name: "",
                    number_of_members: "",
                    project_title: "",
                    problem_statement_track: "",
                    technology_stack: "",
                    mentor_name: "",
                    registration_date: "",
                    table_station_number: ""
                });
            })
            .catch((error) => {
                console.log(error);
                alert("Something went wrong!");
            });
    };

    return (
        <div className="container border border-2 rounded shadow p-5 mt-5">
            <div className="form text-center p-3"><h2>REGISTRATION FORM </h2> </div>
            <div className="row g-3">

                <div className="col-md-6">
                    <label className="form-label">Team ID</label>
                    <input type="text" className="form-control" name="team_id" value={input.team_id} onChange={inputHandler} />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Team Name</label>
                    <input type="text" className="form-control" name="team_name" value={input.team_name} onChange={inputHandler} />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Team Leader Name</label>
                    <input type="text" className="form-control" name="team_leader_name" value={input.team_leader_name} onChange={inputHandler} />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Leader Email</label>
                    <input type="email" className="form-control" name="leader_email" value={input.leader_email} onChange={inputHandler} />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Leader Phone</label>
                    <input type="text" className="form-control" name="leader_phone" value={input.leader_phone} onChange={inputHandler} />
                </div>

                <div className="col-md-6">
                    <label className="form-label">College Name</label>
                    <input type="text" className="form-control" name="college_name" value={input.college_name} onChange={inputHandler} />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Number of Members</label>
                    <input type="number" className="form-control" name="number_of_members" value={input.number_of_members} onChange={inputHandler} />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Project Title</label>
                    <input type="text" className="form-control" name="project_title" value={input.project_title} onChange={inputHandler} />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Problem Statement Track</label>
                    <input type="text" className="form-control" name="problem_statement_track" value={input.problem_statement_track} onChange={inputHandler} />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Technology Stack</label>
                    <input type="text" className="form-control" name="technology_stack" value={input.technology_stack} onChange={inputHandler} />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Mentor Name</label>
                    <input type="text" className="form-control" name="mentor_name" value={input.mentor_name} onChange={inputHandler} />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Registration Date</label>
                    <input type="date" className="form-control" name="registration_date" value={input.registration_date} onChange={inputHandler} />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Table / Station Number</label>
                    <input type="text" className="form-control" name="table_station_number" value={input.table_station_number} onChange={inputHandler} />
                </div>

                <div className="col-12 text-center mt-4">
                    <button className="btn btn-success px-5" onClick={readValue}>
                        Register Team
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Add;