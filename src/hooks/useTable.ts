import React, {useState} from "react";

import {CountryGroup} from "../interfaces";

export type UseTableProps = {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    rowsPerPage: number;
    order: "ASC" | "DESC";
    orderBy: string;
    //
    selected: string[];
    setSelected: React.Dispatch<React.SetStateAction<string[]>>;
    onSelectRow: (id: number) => void;
    onSelectAllRows: (checked: boolean, newSelecteds: number[]) => void;
    //
    onSort: (id: string) => void;
    onChangePage: (event: unknown, newPage: number) => void;
    onChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeDense: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type Props = {
    defaultOrder?: "ASC" | "DESC";
    defaultOrderBy?: string;
    defaultSelected?: number[];
    defaultRowsPerPage?: number;
    defaultCurrentPage?: number;
};

const useTable = (props?: Props) => {
    const [orderBy, setOrderBy] = useState(props?.defaultOrderBy || "id");
    const [order, setOrder] = useState<"ASC" | "DESC">(
        props?.defaultOrder || "ASC"
    );
    const [page, setPage] = useState(props?.defaultCurrentPage || 0);
    const [rowsPerPage, setRowsPerPage] = useState(
        props?.defaultRowsPerPage || 5
    );
    const [selected, setSelected] = useState<number[]>(props?.defaultSelected || []);

    const onSort = (id: string) => {
        const isAsc = orderBy === id && order === "ASC";
        if (id !== "") {
            setOrder(isAsc ? "DESC" : "ASC");
            setOrderBy(id);
        }
    };

    const onSelectRow = (id: number) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: number[] = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }
        setSelected(newSelected);
    };
    const onSelectAllRows = (checked: boolean, newSelecteds: number[]) => {
        if (checked) {
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };
    const onChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const onChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return {
        order,
        page,
        setPage,
        orderBy,
        rowsPerPage,

        selected,
        setSelected,
        onSelectRow,
        onSelectAllRows,

        onSort,
        onChangePage,
        onChangeRowsPerPage,
        setOrder,
        setOrderBy,
        setRowsPerPage,
    };
};

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

export function getComparator<Key extends keyof CountryGroup>(
    order: "ASC" | "DESC",
    orderBy: Key
): (a: CountryGroup, b: CountryGroup) => number {
    return order === "DESC"
        ? (a, b) => -descendingComparator(a, b, orderBy)
        : (a, b) => descendingComparator(a, b, orderBy);
}


export function emptyRows(
    page: number,
    rowsPerPage: number,
    arrayLength: number
) {
    return page > 0 ? Math.max(0, (1 + page) * rowsPerPage - arrayLength) : 0;
}

export function useCountryData(initialData: CountryGroup[]) {
    const [sortedData, setData] = useState<CountryGroup[]>(initialData);
    const [isSorted, setIsSorted] = useState<boolean>(false);

    const sortCountriesByName = () => {
        if (!isSorted) {
            const sorted = [...sortedData].sort((a, b) => a.country.localeCompare(b.country));
            setData(sorted);
            setIsSorted(true);
        } else {
            setData([...initialData]); // Відновлення до початкового (несортованого) стану
            setIsSorted(false);
        }
    };

    return {sortedData, sortCountriesByName};
}

export {useTable};
