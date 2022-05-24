import React from "react"

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import Fragmento from './components/Fragmento'

export default () => (
    <div id="app">
        <h1>Fundamentos React</h1>
        <Fragmento />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro"
            nota={9.3} />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Maria"
            nota={9.9} />
        <Primeiro></Primeiro>
    </div>
)