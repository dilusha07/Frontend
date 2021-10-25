import React, { Component } from 'react';
import axios from 'axios';


axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = 'c9496f17-e0da-4ba4-90df-153857f43cff';

class Breeds extends Component {

  async getBreeds() {
      const res = await axios('/breeds');
      return res.data;
  }
 

  constructor(...args) {

      super(...args);
      this.state = {
        breeds: [], 
        selected_breed: 0
      };

    this.onBreedSelectChange = this.onBreedSelectChange.bind(this);
  }
  async onBreedSelectChange(e) {
    console.log("Breed Selected. ID:",e.target.value)
    await this.setState({selected_breed:e.target.value});
    
  }
  componentDidMount() {
      if (this.state.breeds.length===0) {
          (async () => {
              try {
                  this.setState({breeds: await this.getBreeds()});
              } catch (e) {
                 
                  console.error(e)
              }
          })();
      }
  }
  render() {
      return (
        <div>

      <select value={this.state.selected_breed} 
              onChange={this.onBreedSelectChange}>
        {this.state.breeds.map((breed) => <option key={breed.id} value={breed.id}>{breed.name}</option>)}
      </select>
     </div>
      );
  }
}

export default Breeds;
