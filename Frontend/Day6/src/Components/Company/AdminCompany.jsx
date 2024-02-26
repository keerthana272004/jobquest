// import React, { useState } from "react";
// import "./AdminCompany.css";
// import { BiTimeFive } from "react-icons/bi";
// import logo1 from "../../assets/logo1.png";
// import logo2 from "../../assets/logo2.png";
// import logo3 from "../../assets/logo3.png";
// import logo4 from "../../assets/logo4.png";
// import { Link } from "react-router-dom";

// const initialCards = [
//   {
//     id: 1,
//     image: logo1,
//     title: "Web Developer",
//     time: "Now",
//     location: "Canada",
//     desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita.",
//     company: "Novac Linus Co.",
//   },
//   // ... (other job cards)
// ];

// const AdminCompany = () => {
//   const [cards, setCards] = useState(initialCards);

//   const handleAdd = () => {
//     const newCard = {
//       id: cards.length + 1,
//       image: logo1,
//       title: "New Job",
//       time: "Now",
//       location: "New Location",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita.",
//       company: "New Company",
//     };

//     setCards([...cards, newCard]);
//   };

//   const handleEdit = (id) => {
//     // You can implement an edit functionality here if needed
//     // For example, open a modal or navigate to an edit page
//     console.log(`Editing job with ID ${id}`);
//   };

//   const handleDelete = (id) => {
//     const updatedCards = cards.filter((card) => card.id !== id);
//     setCards(updatedCards);
//   };

//   return (
//     <div>
//       <div className="jobb">
//         {cards.map(({ id, image, title, location, desc, company, time }) => {
//           return (
//             <div className="groupDivv" id="groupDiv" key={id}>
//               <span className="groupSpann">
//                 <h1 className="textH11">{title}</h1>
//                 <span className="SpanDivv">
//                   <BiTimeFive />
//                   {time}
//                 </span>
//               </span>
//               <h6 className="textH66">{location}</h6>
//               <hr className="linee" />
//               <p className="textPP">{desc}</p>
//               <div className="companyy">
//                 <img src={image} alt="" className="logoo" />
//                 <span className="SpanDiv11">{company}</span>
//               </div>
//               <Link to="/details">
//                 <button className="btn11" onClick={() => handleEdit(id)}>
//                   Apply Now
//                 </button>
//               </Link>
//               <button className="btn11" onClick={() => handleDelete(id)}>
//                 Delete
//               </button>
//               <Link to={`/company/${id}`}>
//                 <button className="btn11">More</button>
//               </Link>
//             </div>
//           );
//         })}
//         <button className="btn11" onClick={handleAdd}>
//           Add Job
//         </button>
//       </div>
//     </div>
//   );
// };
// export default AdminCompany;
import React, { useState } from "react";
import "./AdminCompany.css";
import { BiTimeFive } from "react-icons/bi";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import { Link } from "react-router-dom";
import ALNav from "../ALNav/ALNav";
import SideNav from "../SideNav/SideNav";

const initialCards = [
  {
    id: 1,
    image: logo1,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita.",
    company: "Novac Linus Co.",
  },
  // ... (other job cards)
];

const AdminCompany = () => {
  const [cards, setCards] = useState(initialCards);
  const [editingJob, setEditingJob] = useState(null);

  const handleAdd = () => {
         const newCard = {
          id: cards.length + 1,
          image: logo1,
          title: "New Job",
          time: "Now",
          location: "New Location",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita.",
          company: "New Company",
        };
    
        setCards([...cards, newCard]);
      };

  const handleEdit = (id) => {
    // Set the job data to the modal
    const jobToEdit = cards.find((card) => card.id === id);
    setEditingJob(jobToEdit);
  };

  const handleSaveEdit = () => {
    // Save the edited job data
    const updatedCards = cards.map((card) =>
      card.id === editingJob.id ? { ...card, ...editingJob } : card
    );
    setCards(updatedCards);
    setEditingJob(null);
  };

  const handleDelete = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
         setCards(updatedCards);
  };

  return (
    <div>
      <nav><SideNav/></nav>
      <div className="jobb">
        {cards.map(({ id, image, title, location, desc, company, time }) => {
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
              <p className="textPP">{desc}</p>
              <div className="companyy">
                <img src={image} alt="" className="logoo" />
                <span className="SpanDiv11">{company}</span>
              </div>
              {/* <Link to="/details"> */}
                <button className="btn11" onClick={() => handleEdit(id)}>
                  Edit
                </button>
              {/* </Link> */}
             
              <button className="btn11" onClick={() => handleDelete(id)}>
                Delete
              </button>
              
            </div>
          );
        })}
        <button className="b11" onClick={handleAdd}>
          Add Job
        </button>

        {/* Modal for editing job */}
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
