// in React e' possibile crare componenti anche come Classi
// i componenti a classi sono leggermente piu' scomodi da scrivere ma hanno
// il maggior numero di funzionalita'
import { Component } from "react";

class ClassComponent extends Component{
    // questa classe e' un componente React
    render() { //senza render il componente a classe non funziona
        return <h1>Alunno</h1>
    }
}

export default ClassComponent // per poter esportare questo file