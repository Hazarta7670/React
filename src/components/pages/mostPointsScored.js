import React from "react";
import Table from "../organism/table";
import { NavLink, useLocation } from "react-router-dom";

function MostPointsScored() {
    const location = useLocation()
    const data = location.state['data']
    data.sort((a, b) => b[3] - a[3])

    return (
        <>  
            <NavLink to='/'>Home Page</NavLink>
            <Table data={data}/>
        </>
    )
}

export default MostPointsScored