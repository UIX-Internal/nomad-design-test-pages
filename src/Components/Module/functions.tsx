import React, { useState, useEffect, useCallback } from "react";



export const WindowReload = () => {
    useEffect(() => {
        window.onbeforeunload = function pushRefresh() {
            window.scrollTo(0, 0);
        };
    }, []);
}