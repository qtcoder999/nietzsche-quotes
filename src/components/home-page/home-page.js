import React from "react";
import { AutoSizer } from "react-virtualized";
import SnackbarProvider from 'react-simple-snackbar'
import QuotesList from "../quotes-list/quotes-list"

export const HomePage = () => {
    return (
        <>
            <SnackbarProvider>
                < AutoSizer style={{ width: "100%" }}>
                    {({ height, width }) => (
                        <QuotesList height={height} width={width} />
                    )}
                </AutoSizer>
            </SnackbarProvider>

        </>
    )
};