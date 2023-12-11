import TableBody from "../molecules/tableBody";
import TableHead from '../molecules/tableHead';

function Table({data, setData}) {
    return (
        <>
            <table>
                <TableHead />
                <TableBody data={data} setData={setData}/>
            </table>
        </>
    )
    
}

export default Table