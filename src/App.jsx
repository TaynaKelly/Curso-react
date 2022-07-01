import React from "react"
import "./App.css"

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/layout/Card"
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"

const App = () => (
    <div className="App">

        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="  #07 - Desafio Repetição" color="#800000">
                < TabelaProdutos />
            </Card>

            <Card titulo="  #06 - Repetição" color="#8B008B">
                < ListaAlunos />
            </Card>

            <Card titulo="  #05 - Componentes com Filho" color="#0000CD">
                <Familia sobrenome="Silva" >
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="José" />
                </Familia >
            </Card>

            <Card titulo="  #04 - Aleatório" color="#D2691E">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo=" #03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo=" #02 - ComParametro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro"
                    nota={9.3} />
            </Card>

            <Card titulo=" #01 - Primeiro" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>
)

export default App;