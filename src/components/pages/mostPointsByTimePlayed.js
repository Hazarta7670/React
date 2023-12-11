import React from "react";
import Table from "../organism/table";
import { NavLink, useLocation } from "react-router-dom";

function MostPointsByTimePlayed() {
    const location = useLocation()
    const data = location.state['data']
    let new_data = {}
    data.map((el) => {
        if (!new_data[el[0]]) {
            new_data[el[0]] = [el[0], el[1], Number(el[2]), Number(el[3])]
        }
        else {
            new_data[el[0]][2] += Number(el[2])
            new_data[el[0]][3] += Number(el[3])
        }
    })
    let d = Object.values(new_data)
    d.sort((a,b) => b[3]/b[2] - a[3]/a[2])

    return (
        <>  
            <NavLink to='/'>Home Page</NavLink>
            <Table data={d}/>
        </>
    )
}

export default MostPointsByTimePlayed;