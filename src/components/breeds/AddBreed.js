import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const AddBreed = () => {
  let history = useHistory();
  const [breed, setBreed] = useState({
    name: "",
    description: "",
    adaptability: "",  
    affection_level: "",
    child_friendly: "",
    stranger_friendly:"",
    energy_level:"",
    weight:""
  });

  const { name, description, adaptability, affection_level, child_friendly, stranger_friendly, energy_level, weight } = breed;
  
  const onInputChange = e => {
    setBreed({ ...breed, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3001/breeds", breed);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Breed</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Description"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Adaptability "
              name="adaptability"
              value={adaptability}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Affection Level"
              name="affection_level"
              value={affection_level}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Child Friendly"
              name="child_friendly"
              value={child_friendly}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Stranger Friendly"
              name="stranger_friendly"
              value={stranger_friendly}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Energy Level"
              name="energy_level"
              value={energy_level}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Weight"
              name="weight"
              value={weight}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Breed</button>
        </form>
      </div>
    </div>
  );
};

export default AddBreed;
