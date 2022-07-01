import { cloneElement } from "react"

const Familia = (props) => {
 return (
    <div>
        <h2>Componente Filho</h2>
        
        {props.children.map((child, i) => {
            return cloneElement(child, {...props, key: i})
        })}
    </div>
 )
}

export default Familia;