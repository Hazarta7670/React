import { useState } from "react";
import {splitingStringByNewLines, filteringArray, creatingDataMAtrix} from "../../utils/dataConvertor";
import Header1 from "../atoms/header1";
import { NavLink } from "react-router-dom";
import Table from "../organism/table";

function Home() {
    const [data, setData] = useState()

    function FileUpload(e) {
        e.preventDefault()
        let file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsText(file)
        reader.onload = function() {
          let array = splitingStringByNewLines(reader.result)
          let filteredArray = filteringArray(array)
          let matrix = creatingDataMAtrix(filteredArray)
          setData(matrix)
        }
    }
    
    return (
        <>
            <Header1 text="BasketBall"/>
            <input 
                className='file'
                type='file' 
                onChange={FileUpload} 
            />
            {
                data ? <div className="filters">
                        <NavLink to='/MostPointsScoredInOneMatch' state={{data: data}}>Table for most points scored in one match</NavLink>
                        <NavLink to='/MostPointsInAllMatches' state={{data: data}}>Table for most point scored in all matches</NavLink>
                        <NavLink to='/MostPointsByTimePLayed' state={{data: data}}>Table for most points scored based on time played</NavLink>
                        <NavLink to='/MostPointsInTeam' state={{data: data}}>Table for most points scored in the team</NavLink>
                        <Table data={data}/>
                    </div>  : 'NO Data to show!!!'
            } 
        </>
    )
}

export default Home;