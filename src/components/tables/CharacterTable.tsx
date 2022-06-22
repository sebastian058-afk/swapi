import styled from "@emotion/styled";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

interface CharacterTableProps{
    rows: any[];
}

const HeadTableCell = styled(TableCell)`
  font-weight: bolder;
  font-size: large;
`;

export const CharacterTable = ({rows}: CharacterTableProps) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="character-data-table">
                <TableHead>
                    <TableRow>
                        <HeadTableCell>Character Data</HeadTableCell>
                        <HeadTableCell>Value</HeadTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((row: any) => (
                        <TableRow
                            key={row?.value}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell >{row?.characterData}</TableCell>
                            <TableCell >{row?.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
