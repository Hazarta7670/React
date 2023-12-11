function splitingStringByNewLines(string) {
    return string.trim().split(/(\r\n|\n|\r)/g)
}

function filteringArray(array) {
    return array.filter((el) => 
        el.trim() !== '' && el.trim() !== '\r\n' && el.trim() !== '\n' && el.trim() !== '\r'   
    )
}

function creatingDataMAtrix(filteredArray) {
    return filteredArray.map((row) => {
        return row.split(',').map((el) => el.trim())
    })
}

export { splitingStringByNewLines, filteringArray, creatingDataMAtrix}