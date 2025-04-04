import React, { useState, useEffect } from "react";
import Caja from "./Caja";
import "../../styles/index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Layout = () => {
    const [listaDeTareas, setListaDeTareas] = useState([])
    const [tarea, setTarea] = useState("")

    const handlerKeyDown = (e) => {
        if (e.key === "Enter" && e.target.value.trim() !== "") {
            setTarea(e.target.value)
            setListaDeTareas(prev => [...prev, e.target.value])
            setTarea("")

        }

    }

    const handlerClickIcono = (index) => {
        const copiaListaDeTareas = listaDeTareas.filter((_, eliminar) => eliminar !== index)
        setListaDeTareas(copiaListaDeTareas)
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center fondo">
            <h1><strong>ToDo List</strong></h1>
            <div className=" d-flex flex-column gap-1">
                <input
                    value={tarea}
                    type="text"
                    placeholder="What needs to be done!?"
                    onChange={(e) => setTarea(e.target.value)}
                    onKeyDown={handlerKeyDown}
                />
                {listaDeTareas.length === 0 && <Caja mensaje="No hay tareas, añadir tareas" />}
                {listaDeTareas.map((element, index) => {
                    return <Caja key={index} mensaje={element} icono={<FontAwesomeIcon icon={faX} />} onClick={() => handlerClickIcono(index)} />
                })}
                <div style={{ fontSize: "10px" }}>
                    <p> Quedan {listaDeTareas.length} tareas</p>
                </div>
            </div>
        </div>
    )
}
export default Layout

