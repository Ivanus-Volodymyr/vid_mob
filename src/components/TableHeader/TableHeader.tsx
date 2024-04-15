import React from 'react';

import {Box, TableCell, TableHead, TableRow, TableSortLabel} from '@mui/material';

import {SummarizedResponse} from "../../interfaces";

interface Props {
    data?: SummarizedResponse;
    handleSort: () => void;
}

const TableHeader = ({data, handleSort}: Props) => {
    return (
        <TableHead>
            <TableRow>
                <TableCell component="th" scope="row"
                           sx={{
                               paddingLeft: 5,
                               display: 'flex',
                               alignItems: 'flex-start',
                               flexDirection: 'column',
                               borderRight: '1px solid #cfcdc8',
                               justifyContent:'space-between',
                               width: '100%',
                               height: '100px',
                               '&:hover': {
                                   cursor: 'pointer',
                               }
                           }}
                >
                    <div>Markets</div>

                    <div>
                        <TableSortLabel
                            onClick={handleSort}
                        >
                            <span style={{fontSize: '11px'}}>sort by country</span>
                        </TableSortLabel>
                    </div>
                </TableCell>

                <TableCell
                    sx={{
                        textAlign: 'right',
                        borderBottom: '1px solid #cfcdc8'
                    }}
                >
                    <Box sx={{fontWeight: 'bold', paddingLeft: '40px'}}>Criteria A</Box>
                    <Box sx={{
                        paddingTop: '25px',
                    }}>
                        <div>In-flight</div>
                        <div>{data?.criteriaA.inFlight}</div>
                    </Box>
                </TableCell>
                <TableCell
                    sx={{
                        borderRight: '1px solid #cfcdc8',
                    }}>
                    <Box sx={{
                        paddingTop: '50px',
                        paddingLeft: '40px',
                    }}>
                        <div>Pre-flight</div>
                        <div style={{paddingLeft: '10px'}}>{data?.criteriaA.preFlight}</div>
                    </Box>
                </TableCell>

                <TableCell
                    sx={{
                        textAlign: 'center',
                        borderBottom: '1px solid #cfcdc8'
                    }}
                >
                    <Box sx={{fontWeight: 'bold'}}>Criteria B</Box>
                    <Box sx={{
                        paddingTop: '25px',
                    }}>
                        <div>In-flight</div>
                        <div>{data?.criteriaB.inFlight}</div>
                    </Box>
                </TableCell>
                <TableCell
                    sx={{
                        borderRight: '1px solid #cfcdc8',
                    }}>
                    <Box sx={{
                        paddingTop: '50px',
                        paddingLeft: '40px',
                    }}>
                        <div>Pre-flight</div>
                        <div style={{paddingLeft: '10px'}}>{data?.criteriaB.preFlight}</div>
                    </Box>
                </TableCell>


                <TableCell
                    sx={{
                        textAlign: 'center',
                        borderBottom: '1px solid #cfcdc8'
                    }}
                >
                    <Box sx={{fontWeight: 'bold'}}>Criteria C</Box>
                    <Box sx={{
                        paddingTop: '25px',
                    }}>
                        <div>In-flight</div>
                        <div>{data?.criteriaC.inFlight}</div>
                    </Box>
                </TableCell>
                <TableCell
                    sx={{
                        borderRight: '1px solid #cfcdc8',
                    }}>
                    <Box sx={{
                        paddingTop: '50px',
                        paddingLeft: '40px',
                    }}>
                        <div>Pre-flight</div>
                        <div style={{paddingLeft: '10px'}}>{data?.criteriaC.preFlight}</div>
                    </Box>
                </TableCell>


                <TableCell
                    sx={{
                        textAlign: 'center',
                        borderBottom: '1px solid #cfcdc8'
                    }}
                >
                    <Box sx={{fontWeight: 'bold'}}>Criteria D</Box>
                    <Box sx={{
                        paddingTop: '25px',
                    }}>
                        <div>In-flight</div>
                        <div>{data?.criteriaD.inFlight}</div>
                    </Box>
                </TableCell>
                <TableCell
                    sx={{
                        borderRight: '1px solid #cfcdc8',
                    }}>
                    <Box sx={{
                        paddingTop: '50px',
                        paddingLeft: '40px',
                    }}>
                        <div>Pre-flight</div>
                        <div style={{paddingLeft: '10px'}}>{data?.criteriaD.preFlight}</div>
                    </Box>
                </TableCell>


            </TableRow>
        </TableHead>
    );
};

export {
    TableHeader
};
