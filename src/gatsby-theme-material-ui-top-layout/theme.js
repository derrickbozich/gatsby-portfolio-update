import { createTheme, responsiveFontSizes } from "@mui/material";

const fonts = {
    body: 'Red Hat Text'
}

let theme = createTheme({
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
            fontWeight: 500,
            fontFamily: fonts.body,
            fontSize: 60,
            marginBottom: '0',
            letterSpacing: '0.01em'
        },
        h2: {
            fontWeight: 500,
            fontFamily: fonts.body,
            fontSize: 58,
            marginBottom: '0.5rem',
            letterSpacing: '0.01em'
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

        subhead1: {
            fontFamily: fonts.body,
            fontSize: 36,
            marginBottom: '1rem'
        },
        subhead2: {
            fontFamily: fonts.body,
            fontSize: 34,
            fontWeight: '400',
        },

        body1italic: {
            fontFamily: "bodini-italic",
            fontSize: 18,
        },
        body1: {
            fontFamily: fonts.body,
            fontSize: 20,
            marginBottom: '2rem'
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

            fontFamily: fonts.body,
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

theme = responsiveFontSizes(theme);



export default theme;