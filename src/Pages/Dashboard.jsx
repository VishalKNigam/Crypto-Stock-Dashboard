import React, { useState, useEffect } from 'react'
import { useToast, Stack } from "@chakra-ui/react"
import { Coins } from '../Components/Coins';
import { Pagination } from '../Components/Pagination';
import { Toolbar } from '../Components/ToolBar';
import { useDispatch } from 'react-redux';
import { getCoins } from '../redux/action';
import { Graph } from '../Components/Chart';

const Dashboard = () => {
    const toast = useToast();
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState("inr");
    const [order, setOrder] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const params = {
            per_page: 10,
            page: page,
            vs_currency: currency,
        };
        if (order) {
            params.order = order;
        }
        dispatch(getCoins(params, toast));
    }, [page, currency, order, search]);
    return (
        <div style={{ backgroundColor: "#F5F5F5" }}>
            <Stack p={4} minH={"25vh"} position={"relative"}>
                <Toolbar search={search} setSearch={setSearch}
                    currency={currency} setCurrency={setCurrency}
                    order={order} setOrder={setOrder} />
                <Coins currency={currency} />
                <div style={{ maxWidth: "100%", maxHeight: "150px" }}> {/* Set max width and height */}
                    <Graph style={{ width: "100%", height: "100%" }} /> {/* Style the chart */}
                </div>
                <Pagination page={page} setPage={setPage} />
            </Stack>
        </div>
    )
}

export default Dashboard;