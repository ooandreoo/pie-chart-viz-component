const Table = ({ 
    headers, 
    data, 
    deleteItem = null,
    noEmpty
}) => {

    const headerElements = <tr>{headers.map((e,i) => <th className='th-style' key={`${i}th`}>{e}</th>)}</tr>;

    const buildActionsRow = (index) => {
        let actionElements = [];
        if(deleteItem !== null)
            actionElements = actionElements.concat(<button key={`${index}btn`} onClick={() => deleteItem(index)}>X</button>)
        return( 
        <td className='td-style' key={`${index}xtd`}>
            {actionElements}
        </td>);
    }

    const buildDataRow = (json,index) => {
        const dataRow = headers.map((field,i) => <td className='td-style' key={`${index}-${i}td`}>{json[field]}</td>);
        const actionsRow = buildActionsRow(index);
        return dataRow.concat(actionsRow);
    };

    const dataElements = data.map((e,i) => <tr key={`${i}tr`}>{buildDataRow(e,i)}</tr>)

    
    return (
        noEmpty && data.length === 0 ? 
        <></> 
        :
        <table className='table-style'>
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