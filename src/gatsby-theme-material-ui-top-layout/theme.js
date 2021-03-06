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
            fontWeight: 500,
            fontFamily: fonts.body,
            fontSize: 44,
            // marginBottom: '1rem'
        },
        h4: {
            fontWeight: 500,
            fontFamily: fonts.body,
            fontSize: 30,
            // marginBottom: '1rem'
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
            fontSize: 32,
            fontWeight: 500,
        },
        subhead3: {
            fontFamily: fonts.body,
            fontSize: 36,
            fontWeight: 500,
        },


        body1: {
            fontFamily: fonts.body,
            fontSize: 19,
            marginBottom: '2rem'
        },
        body2: {
            fontFamily: fonts.body,
            fontSize: 22,
            marginBottom: '1rem'
        },


        nav: {

            fontFamily: fonts.body,
            fontSize: 17,
            fontWeight: 400,
            lineHeight: 0,
            letterSpacing: '0.1em'

        },
        brand: {
            fontFamily: fonts.body,
            fontWeight: 500,
            // letterSpacing: '0.05em',
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
    components: {
        // Name of the component
        MuiButton: {
            variants: [
                {
                    props: { variant: 'primary' },
                    style: {
                        textTransform: 'none',
                        // border: `2px dashed red`,
                        padding: '8px 24px',
                        backgroundColor: 'orange',
                        borderRadius: '38px',
                        color: 'black',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none',
                        '&:hover': {
                            backgroundColor: 'orange',
                            opacity: '0.85'
                        }

                    },
                },
                {
                    props: { variant: 'secondary' },
                    style: {
                        textTransform: 'none',
                        border: `2px solid black`,
                        padding: '8px 24px',
                        backgroundColor: 'transparent',
                        borderRadius: '38px',
                        color: 'black',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                            backgroundColor: 'black',
                            opacity: '0.85',
                            border: `2px solid black`,
                            color: 'white'
                        }

                    },
                },
              
            ],
        },
    },
});

theme = responsiveFontSizes(theme);



export default theme;