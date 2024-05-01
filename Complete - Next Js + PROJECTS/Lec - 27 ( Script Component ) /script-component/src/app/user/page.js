"use client"

import Script from "next/script"

export default function Page() {
    return (
        <div>

            <Script
            src="/location.js"
            onLoad={() => {
                console.log(" File Loaded in Next Js File")
            }}
            />
            <h2> Get Users Geolocations Here </h2>
        </div>
    )
}

