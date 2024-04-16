"use client"

import Script from "next/script"

export default function Page() {
    return (
        <div>

            <Script
            src="/location.js"
            onLoad={() => {
                console.log("File Loaded in Next Js")
            }}
            />
            <h2>Get User Geolocation</h2>
        </div>
    )
}

