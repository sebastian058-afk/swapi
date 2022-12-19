import styled from "@emotion/styled";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

interface CharacterTableProps{
    rows: any | any[];
}

const HeadTableCell = styled(TableCell)`
  font-weight: bolder;
  font-size: large;
`;

export const DataTable = ({rows}: CharacterTableProps) => {
    return (
        <TableContainer component={Paper}>
            <Table  aria-label="character-data-table">
                <TableHead>
                    <TableRow>
                        <HeadTableCell width={'25%'}>Character Data</HeadTableCell>
                        <HeadTableCell>Value</HeadTableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{ overflowWrap: 'anywhere'}}>
                    {rows?.map((row: any) => (
                        <TableRow
                            key={row?.value}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell >{row?.data}</TableCell>
                            <TableCell >{row?.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
