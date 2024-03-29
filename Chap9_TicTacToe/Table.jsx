import React from 'react';
import Tr from './Tr';

const Table = ({ tableData }) => {
    return (
        <>
            <table>
                {Array(tableData.length).fill().map((tr, i) => (
                    <Tr rowIndex={i} rowData={tableData[i]} />
                ))}
            </table>
        </>
    );
}
 
export default Table;