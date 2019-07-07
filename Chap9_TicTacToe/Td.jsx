import React, { useCallback, useContext } from 'react';
import { CLICK_CELL, CHANGE_TURN } from './TicTacToe';
import { TableContext } from './TicTacToe'

const Td = ({ rowIndex, cellIndex, cellData }) => {

    const { dispatch } = useContext(TableContext)

    const onClickTd = useCallback(() => {
        console.log(rowIndex, cellIndex);
        if(cellData) {  // Cell that was already clicked can not be clicked.
            return;
        } 
        dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
    }, [cellData]);

    return (
        <td onClick={onClickTd} >{cellData}</td>
    )
};

export default Td;