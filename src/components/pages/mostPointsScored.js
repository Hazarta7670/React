import React from "react";
import Table from "../organism/table";
import { useLocation, NavLink } from "react-router-dom";

function MostPointsScored() {
    const location = useLocation()
    const data = location.state['data']
    data.sort((a, b) => b[3] - a[3])

    return (
        <>  
            <NavLink to='/' state={{data: data}}>Home Page</NavLink>
            <NavLink to='/MostPointsInAllMatches' state={{data: data}}>Table for most point scored in all matches</NavLink>
            <NavLink to='/MostPointsByTimePLayed' state={{data: data}}>Table for most points scored based on time played</NavLink>
            <NavLink to='/MostPointsInTeam' state={{data: data}}>Table for most points scored in the team</NavLink>
            <Table data={data}/>
        </>
    )
}

export default MostPointsScored