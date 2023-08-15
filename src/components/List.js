import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

class List extends React.Component {

    columns = [
        { id: 'id', label: 'Id' },
        { id: 'content', label: 'Content' },
    ];

    state = {
        page: 0,
        rowsPerPage: 10
    }

    
    handleChangePage = (event, newPage) => {
        this.setState({
            page: newPage
        })
    };

    handleChangeRowsPerPage = (event) => {
        this.setState({
            rowsPerPage: +event.target.value,
            page: 0
        })
    };

    render() {
        return (
            <div>
                {/* {
                    this.props.toDoList.map(function(item){
                        return (
                            <div key={ item.id }>
                                { item.id } - { item.content }
                            </div>
                        )
                    })
                } */}

                {/* data table */}
                {/* <DataGrid
                    rows={this.props.toDoList}
                    columns={this.columns}
                    initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                    }}
                    pageSizeOptions={[5, 10]}
                /> */}

                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {this.columns.map((column) => (
                                <TableCell key={column.id}>
                                    {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.toDoList
                            .slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                            .map((row) => {
                                return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {this.columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                        <TableCell key={column.id}>
                                            {value}
                                        </TableCell>
                                    );
                                    })}
                                </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={this.props.toDoList.length}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.page}
                    onPageChange={this.handleChangePage}
                    onRowsPerPageChange={this.handleChangeRowsPerPage}
                />
            </div>
        )
    }
}

export default List