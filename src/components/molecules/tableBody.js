import React from "react";

function TableBody({data}) {
    let index = 0
    return (
        <tbody>
            {data.map((row) => {
                index += 1
                return (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                        <td>{row[2]}</td>
                        <td>{row[3]}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}

export default TableBody

