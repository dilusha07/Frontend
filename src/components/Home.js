import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [breeds, setBreed] = useState([]);

  useEffect(() => {
    getAllBreeds();
  }, []);

  const getAllBreeds = async () => {
    const result = await axios.get("http://localhost:3001/breeds");
    setBreed(result.data);
  };

  const deleteBreed = async id => {
    await axios.delete(`http://localhost:3001/breeds/${id}`);
    getAllBreeds();
  }


  return (
    <div className="container">
      <div className="py-4">
        <h1> Breeds</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Adaptability</th>
              <th scope="col">Affection Level</th>
              <th scope="col">Child Friendly</th>
              <th scope="col">Stranger Friendly</th>
              <th scope="col">Energy Level</th>
              <th scope="col">Weight</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {breeds.map((breed, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{breed.name}</td>
                <td>{breed.description}</td>
                <td>{breed.adaptability}</td>
                <td>{breed.affection_level}</td>
                <td>{breed.child_friendly}</td>
                <td>{breed.stranger_friendly}</td>
                <td>{breed.energy_level}</td>
                <td>{breed.weight}</td>
                <td>
                  <Link class="btn btn-primary mr-2" >
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteBreed(breed.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
