import React from "react";
import { Component } from "react/cjs/react.production.min";
import api from "./api";

class App extends Component{

    state ={
      filmes:[],
    }

    async componentDidMount(){
      const response = await api.get('');
      this.setState({filmes: response.data});
    }
  render(){
    const {filmes} =this.state;
    return(
      <div>
        <h1>Listar os Filmes</h1>
        {filmes.map(filme =>(
          <li key={filme.show.id}>
            <h2>
              <strong>
                Título: </strong>
                {console.log(filme)}
                {filme.show.name}
                </h2>
                <p>{filme.show.url}</p>
          </li>
          ))}
      </div>
    );
  };
};

export default App;
