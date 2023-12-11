import TableBody from "../molecules/tableBody";
import TableHead from '../molecules/tableHead';

function Table({data}) {
    return (
        <>
            <table>
                <TableHead />
                <TableBody data={data} />
            </table>
        </>
    )
    
}

export default Table