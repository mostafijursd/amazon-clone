/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            maxWidth: {
                container: "1440px"
            },
            screens: {
                xs: "320px",
                sm: "375px",
                sml: "500px",
                md: "668px",
                mdl: "768px",
                lg: "960px",
                lgl: "1024px",
                xl: "1280px"
            },
            fontFamily: {
                titleFont: "Roboto",
                bodyFont: "Poppins"
            },
            colors: {
                amazonclone_blue: "#131921",
                amazonclone_light: "#232F3E",
                amazonclone_yellow: "#febd96",
                amazonclone_green: "#1B4D3E",
                amazonclone_greenLigth: "#22604D",
                whiteText: "#ffffff",
                ligthText: "#ccc",
                quantity_box: "#F0F2F2",
                footerBottom: "#131A22"
            },
            boxShadow: {
                testShadow: " 0px 0px 32px 1px rgba(199,199,199,1)",
                amazoncloneInput: "0 0 3px 2px rgba(228 121 17/50%)"
            }
        },
    },
    plugins: [],
}