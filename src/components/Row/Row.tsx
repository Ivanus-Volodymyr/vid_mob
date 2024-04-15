import * as React from "react";

import {IconButton, TableCell, TableRow } from "@mui/material";
import {KeyboardArrowDown, KeyboardArrowUp} from "@mui/icons-material";

import {CountryGroup} from "../../interfaces";

const Row = (props: { row: CountryGroup }) => {
    const {row} = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{width: '100%'}}>
                <TableCell component="th" scope="row"
                           sx={{
                               paddingLeft: 5,
                               display: 'flex',
                               alignItems: 'center',
                               border: open ? '1px solid blue' : '1px solid #cfcdc8',
                               width: '100%',
                               flexShrink: 0,
                               flexGrow: 0,
                               flexBasis: '100%',
                           }}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                        sx={{position: 'absolute', left: 0}}
                    >
                        {open ? <KeyboardArrowUp/> : <KeyboardArrowDown/>}
                    </IconButton>{row.country}
                </TableCell>
                <TableCell align="right">{row.criteriaA.inFlight}</TableCell>
                <TableCell align="center"
                           sx={{
                               borderRight: '1px solid #cfcdc8',
                           }}
                >{row.criteriaA.preFlight}</TableCell>
                <TableCell align="center">{row.criteriaB.inFlight}</TableCell>
                <TableCell align="center"
                           sx={{
                               borderRight: '1px solid #cfcdc8',
                           }}
                >{row.criteriaB.preFlight}</TableCell>
                <TableCell align="center">{row.criteriaC.inFlight}</TableCell>
                <TableCell align="center"
                           sx={{
                               borderRight: '1px solid #cfcdc8',
                           }}
                >{row.criteriaC.preFlight}</TableCell>
                <TableCell align="center">{row.criteriaD.inFlight}</TableCell>
                <TableCell align="center"
                           sx={{
                               borderRight: '1px solid #cfcdc8',
                           }}
                >{row.criteriaD.preFlight}</TableCell>

            </TableRow>

            {row.states.length && row.states.map(value =>
                <TableRow sx={{
                    display: open ? 'table-row' : 'none',
                    '&:hover': {
                        backgroundColor: 'rgba(243,211,252,0.53)',
                    }
                }} key={value.id}>
                    <TableCell component="th" scope="row"
                               sx={{
                                   paddingLeft: 5,
                                   display: 'flex',
                                   alignItems: 'left',
                                   borderRight: '1px solid #cfcdc8',
                                   width: '100%',
                                   flexShrink: 0,
                                   flexGrow: 0,
                                   flexBasis: '100%',
                               }}>
                        {value.state}
                    </TableCell>
                    <TableCell align="right">{value.criteriaA.inFlight}</TableCell>
                    <TableCell align="center"
                               sx={{
                                   borderRight: '1px solid #cfcdc8',
                               }}
                    >{value.criteriaA.preFlight}</TableCell>
                    <TableCell align="center">{value.criteriaB.inFlight}</TableCell>
                    <TableCell align="center"
                               sx={{
                                   borderRight: '1px solid #cfcdc8',
                               }}
                    >{value.criteriaB.preFlight}</TableCell>
                    <TableCell align="center">{value.criteriaC.inFlight}</TableCell>
                    <TableCell align="center"
                               sx={{
                                   borderRight: '1px solid #cfcdc8',
                               }}
                    >{value.criteriaC.preFlight}</TableCell>
                    <TableCell align="center">{value.criteriaD.inFlight}</TableCell>
                    <TableCell align="center"
                               sx={{
                                   borderRight: '1px solid #cfcdc8',
                               }}
                    >{value.criteriaD.preFlight}</TableCell>
                </TableRow>
            )}
        </React.Fragment>
    );
}

export {Row};
