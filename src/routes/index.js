import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Index from "../components/AddressForm";
import Task from "../components/Task";

export default function RoutesModule() {

    return (
        <>
            <BrowserRouter>
                <Routes >
                    <Route exact path="/" element={<Index />} />
                    <Route exact path="/task" element={<Task />} />
                </Routes >
            </BrowserRouter>
        </>
    )
}