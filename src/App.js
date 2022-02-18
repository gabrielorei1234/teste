import React from "react";
import { Component } from "react/cjs/react.production.min";
import api from "./api";

class App extends Component{

  state = {
    filmes:[],
  }

  getData = async () => {
    const {data} = await api.get('/search/shows?q=star%20wars');
    this.setState({ filmes: data });
  }

  componentDidMount(){
    this.getData();
  }

  render(){
    const {filmes} = this.state;

    return(
      <div>
        <h1>Listar os Filmes</h1>
        {
          filmes.map(filme =>(
            <li key={filme.show.id}>
              <h2>
                <strong>Título:</strong> {filme.show.name}
              </h2>
                <p>{filme.show.url}</p>
            </li>
          ))
        }          
      </div>
    );
  };
};

export default App;
