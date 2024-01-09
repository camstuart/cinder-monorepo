"use client";

import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/auth-context";
import Spinner from "../components/spinner";
import axios from "axios";

const page = () => {
    const { user } = UserAuth();
    const [loading, setLoading] = useState(true);
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
        };
        checkAuthentication();

        axios.get("https://data.emergency.vic.gov.au/Show?pageId=getIncidentJSON").then((data) => {
            console.log(data);
            setIncidents(data?.data);
            setLoading(false);
        });

    }, [user]);

    return (
        <div className="p-4">
            {loading ? (
                <Spinner />
            ) : user ? (
                <div>
                    Users
                    {incidents.map((item, i) => {
                        return (
                            <div key={i}>
                                <p>{item?.name}</p>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p>You must be logged in to view this page - protected route.</p>
            )}
        </div>
    );
};

export default page;