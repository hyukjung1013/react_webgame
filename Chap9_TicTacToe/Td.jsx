import React, { useCallback } from 'react';
import { CLICK_CELL, CHANGE_TURN } from './TicTacToe';

const Td = ({ rowIndex, cellIndex, dispatch, cellData }) => {

    const onClickTd = useCallback(() => {
        console.log(rowIndex, cellIndex);
        if(cellData) {  // Cell that was already clicked can not be clicked.
            return;
        } 
        dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
        // dispatch({ type: CHANGE_TURN });
    }, [cellData]);

    return (
        <td onClick={onClickTd} >{cellData}</td>
    )
};

export default Td;