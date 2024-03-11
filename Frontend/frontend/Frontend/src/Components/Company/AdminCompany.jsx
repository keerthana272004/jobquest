

import React, { useState, useEffect } from "react";
import "./AdminCompany.css";
import { BiTimeFive } from "react-icons/bi";
import logo1 from "../../assets/logo1.png";
import axios from "axios";
// import ALNav from "../ALNav/ALNav";
import SideNav from "../SideNav/SideNav";

const API_URL = "http://localhost:8080/api/AddJob"; // Replace with your actual API endpoint

const AdminCompany = () => {
  const [cards, setCards] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
  const [newJob, setNewJob] = useState({
    title: "",
    location: "",
    image:"",
    time: "",
    company: "",
    description: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setCards(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAdd = async () => {
    try {
      const response = await axios.post(API_URL, newJob);
      setCards([...cards, response.data]);
      setNewJob({
        title: "",
        location: "",
        image:"",
        time: "",
        company: "",
        description: "",
      });
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  const handleEdit = (id) => {
    const jobToEdit = cards.find((card) => card.id === id);
    setEditingJob(jobToEdit);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`${API_URL}/${editingJob.id}`, editingJob);
      fetchData(); 
      setEditingJob(null);
    } catch (error) {
      console.error("Error saving edit:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchData(); // Refresh the data after deletion
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  return (
    <div>
      <nav>
        <SideNav />
      </nav>
      <div className="jobb">
        {cards.map(({ id, image, title, location, description, company, time }) => {
          return (
            <div className="groupDivv" id="groupDiv" key={id}>
              <span className="groupSpann">
                <h1 className="textH11">{title}</h1>
                <span className="SpanDivv">
                  <BiTimeFive />
                  {time}
                </span>
              </span>
              <h6 className="textH66">{location}</h6>
              <hr className="linee" />
              <p className="textPP">{description}</p>
              <div className="companyy">
                <img src={image} alt="" className="logoo" />
                <span className="SpanDiv11">{company}</span>
              </div>

              <button className="btn11" onClick={() => handleEdit(id)}>
                Edit
              </button>

              <button className="btn11" onClick={() => handleDelete(id)}>
                Delete
              </button>
            </div>
          );
        })}
        <div className="addjob">
          <form>
          <label>Title:</label>
            <input
              type="text"
              value={newJob.title}
              onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
            />

            <label>Location:</label>
            <input
              type="text"
              value={newJob.location}
              onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
            />
            <label>Image:</label>
            <input
              type="text"
              value={newJob.image}
              onChange={(e) => setNewJob({ ...newJob, image: e.target.value })}
            />
            <label>Time:</label>
            <input
              type="text"
              value={newJob.time}
              onChange={(e) => setNewJob({ ...newJob, time: e.target.value })}
            />
            <label>Company:</label>
            <input
              type="text"
              value={newJob.company}
              onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
            />
            <label>Description:</label>
            <input
              type="text"
              value={newJob.description}
              onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
            />
            <center><button type="button" className="b11" onClick={handleAdd}>
              Add Job
            </button></center>
          </form>
        </div>

        {editingJob && (
          <div className="modal">
            <div className="modal-content">
            <span className="close" onClick={() => setEditingJob(null)}>
                &times;
              </span>
              <h2>Edit Job</h2>
              <form>
                <label>Title:</label>
                <input
                  type="text"
                  value={editingJob.title}
                  onChange={(e) => setEditingJob({ ...editingJob, title: e.target.value })}
                />

                <label>Location:</label>
                <input
                  type="text"
                  value={editingJob.location}
                  onChange={(e) => setEditingJob({ ...editingJob, location: e.target.value })}
                />
                {/* <label>Image:</label>
                <input
                  type="text"
                  value={editingJob.image}
                  onChange={(e) => setEditingJob({ ...editingJob, image: e.target.value })}
                /> */}

                <label>Time:</label>
                <input
                  type="text"
                  value={editingJob.time}
                  onChange={(e) => setEditingJob({ ...editingJob, time: e.target.value })}
                />
                <label>Company:</label>
                <input
                  type="text"
                  value={editingJob.company}
                  onChange={(e) => setEditingJob({ ...editingJob, company: e.target.value })}
                />
                <label>Description:</label>
                <input
                  type="text"
                  value={editingJob.description}
                  onChange={(e) => setEditingJob({ ...editingJob, description: e.target.value })}
                />

                <button type="button" onClick={handleSaveEdit}>
                  Save
                </button>
              </form>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCompany;
