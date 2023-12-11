import React from "react";
import Table from "../organism/table";
import { useLocation, NavLink } from "react-router-dom";

function MostPointsInTeam() {
    const location = useLocation()
    const data = location.state['data']
    let object_data = {}
    data.map((el) => {
        if (!object_data[el[0]]) {
            object_data[el[0]] = [el[0], el[1], Number(el[2]), Number(el[3])]
        }
        else {
            object_data[el[0]][2] += Number(el[2])
            object_data[el[0]][3] += Number(el[3])
        }
    })
    let d = Object.values(object_data)

    let list_data = {}
    d.map((el) => {
        if (!list_data[el[1]]) {
            list_data[el[1]] = []
        }
        list_data[el[1]].push([el[0], el[1], Number(el[2]), Number(el[3])])
    })

    let list_data_list = Object.values(list_data)
    let final_data = []
    list_data_list.filter((el) => {
        el.sort((a,b) => b[3] - a[3])
        final_data.push(el[0])
    })

    final_data.sort((a,b) => b[3] - a[3])

    return (
        <>
            <NavLink to='/' state={{data: data}}>Home Page</NavLink>
            <NavLink to='/MostPointsScoredInOneMatch' state={{data: data}}>Table for most points scored in one match</NavLink>
            <NavLink to='/MostPointsInAllMatches' state={{data: data}}>Table for most point scored in all matches</NavLink>
            <NavLink to='/MostPointsByTimePLayed' state={{data: data}}>Table for most points scored based on time played</NavLink>
            <Table data={final_data}/>
        </>
    )
}

export default MostPointsInTeam