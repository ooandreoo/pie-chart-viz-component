const Table = ({ headers, data }) => {
    const headerElements = <tr>{headers.map((e,i) => <th key={`${i}th`}>{e}</th>)}</tr>;
    const buildDataRow = (json,index) => {
        return headers.map((field,i) => <td key={`${index}-${i}td`}>{json[field]}</td>)
    };
    const dataElements = data.map((e,i) => <tr key={`${i}tr`}>{buildDataRow(e,i)}</tr>)
    console.log(dataElements)
    return (
        <table>
            <thead>
                {headerElements}
            </thead>
            <tbody>
                {dataElements}
            </tbody>
        </table>
    )
}

export default Table