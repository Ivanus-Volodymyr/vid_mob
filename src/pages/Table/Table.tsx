import * as React from 'react';

import {Paper, Table, TableBody, TableContainer, TablePagination} from '@mui/material';

import {data} from "../../constants";

import {Row, TableHeader} from '../../components';
import {useCountryData, useGroupedDataForGrid, useSummarizedCriteria, useTable} from "../../hooks";


export default function CollapsibleTable() {
    const {rows} = useGroupedDataForGrid(data);
    const {
        page,
        rowsPerPage,
        onChangePage,
        onChangeRowsPerPage
    } = useTable({defaultRowsPerPage: 5, defaultOrderBy: ' ', defaultOrder: 'ASC'});

    const {summary} = useSummarizedCriteria(rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage));
    const {sortedData, sortCountriesByName} = useCountryData(rows);


    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table" sx={{tableLayout: 'fixed'}}>
                <TableHeader data={summary} handleSort={sortCountriesByName}/>
                <TableBody>
                    {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                        <Row key={row.id} row={row}/>
                    ))}
                </TableBody>
            </Table>

            <TablePagination
                rowsPerPageOptions={[5, 10]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={onChangePage}
                onRowsPerPageChange={onChangeRowsPerPage}
            />
        </TableContainer>
    );
}
