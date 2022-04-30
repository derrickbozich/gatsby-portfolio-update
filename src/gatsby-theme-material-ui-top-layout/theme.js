import { createTheme } from "@mui/material";

const fonts = {
    body: 'Work Sans'
}

const theme = createTheme({
    palette: {
        primary: {
            light: '#f5f4f1',
            main: '#3f50b5',
            dark: '#0C0D0C',
            // contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
    typography: {
        h1: {
            fontWeight: 700,
            fontFamily: fonts.body,
            fontSize: '2.5rem',
            marginBottom: '0.4rem',
            textTransform: 'uppercase',
            letterSpacing: '0.01em'
        },
        h2: {
            fontWeight: 600,
            fontFamily: fonts.body,
            fontSize: 42,
            marginBottom: '1rem',
            letterSpacing: '0.15em'
        },
        h3: {
            fontWeight: 600,
            fontFamily: fonts.body,
            fontSize: 32,
            marginBottom: '1rem'
        },
        p: {
            fontFamily: fonts.body,
        },
        body1: {
            fontFamily: fonts.body,
            fontSize: 18,
            marginBottom: '1rem'
        },
        body1italic: {
            fontFamily: "bodini-italic",
            fontSize: 18,
        },
        body2: {
            fontFamily: fonts.body,
            fontSize: 18,
        },
        body2Bold: {
            fontFamily: fonts.body,
            fontWeight: 600,
            fontSize: 18,
        },
        body2Black: {
            fontFamily: fonts.body,
            fontWeight: 700,
            fontSize: 18,
        },
        body3: {
            fontFamily: fonts.body,
            fontSize: 16,
            marginBottom: '1rem',
            display: 'block'
        },
        body3Bold: {
            fontFamily: fonts.body,
            fontSize: 16,
            fontWeight: 600,
        },
        nav: {
            fontFamily: "bodini-italic",
            fontSize: 16,
            letterSpacing: '0.15em'
        },
        brand: {
            fontFamily: fonts.body,
            fontWeight: 400,
            letterSpacing: '0.05em',
            // textTransform: 'uppercase'
        },
        footerBrand: {
            fontFamily: fonts.body,
            fontWeight: 600,
            letterSpacing: '0.05em',
            fontSize: 24
        },
        button: {
            fontFamily: fonts.body,
            fontWeight: 600,
            "textTransform": 'none',
            fontSize: 16,
        },


    },
});



export default theme;