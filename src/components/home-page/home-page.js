import React from "react";
import { AutoSizer } from "react-virtualized";
import QuotesList from "../quotes-list/quotes-list"

export const HomePage = () => {
    return (
        <>
            < AutoSizer style={{ width: "100%" }}>
                {({ height, width }) => (
                    <QuotesList height={height} width={width} />
                )}
            </AutoSizer>
        </>
    )
};