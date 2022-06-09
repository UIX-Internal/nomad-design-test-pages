import React, { useEffect, useRef } from "react";



export const WindowReload = () => {
    useEffect(() => {
        window.onbeforeunload = function pushRefresh() {
            window.scrollTo(0, 0);
        };
    }, []);
}