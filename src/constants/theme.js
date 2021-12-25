import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
    // colors
    // yellow: "#FBB915",
    // yellow1: "#FBC74F",
    // yellow2: "#FDD57E",
    // yellow3: "#FDE4AA",
    // yellow4: "#FEF1D5",
    // yellow5:"#ffb500",

    // dark: "#000000",
    // dark1: "#4B4B4B",
    // dark2: "#8E8E8E",
    // dark3: "#CACACA",
    // dark4: "#EAEAEA",
    // dark5: "#FAFAFA",

    // light: "#2C2C2C",
    // light: "#6E6E6E",
    // light: "#B3B3B3",
    // light: "#E1E1E1",
    // light: "#F5F5F5",
    // light: "#FFFFFF",

    // black: '#000000',       // h4
    // black1: '#121212',      //header, imgButton
    // black2: '#4b4b4b',       //btnBG , overviewDesc
    // black3: '#161616',       //keyword remove icon, keyword text
    // white: '#ffffff',      //body
    // light: '#f5f5f5',        //btnText
    // light1: '#fafafa',
    // lightGray1: '#b3b3b3',  //p
    // lightGray2: '#e1e1e1',  //hrline btnSectiontopBorder
    // lightGray3: '#eaeaea',   //profileImgBg,
    // lightGray4: '#f4f4f4',  // sideMenu
    // lightGray5: '#e0e0e0', //keyword bg
    // lightGray6: '#cacaca', //keyword icon bg // signup login page background
    // lightGray7: '#c6c6c6', //text color for payment confirmation

    // lightGray8: '#393939',
    // lightGray10: '#6f6f6f',

    // lightGray11: 'rgba(255, 255, 255, 0.8)',
    // gray: '#a8a8a8',        //placeholder
    // gray2: '#8d8d8d',      //textFieldBorder
    // gray3: '#525252',        //textLink, textLabel
    // gray4: '#979797',          //profileImgBorder
    // // lightGray3: '#f4f4f4',  //textFields
    // gray5: '#8e8e8e',
    // gray6: '#2f2f2f',    // dashboardMenuButtons
    // gray7: '#2c2c2c',  // cards footer
    // gray8: '#6e6e6e',
    // gray9: '#262626',

    red1:'#e6564e',
    red2:'#ff8177',

    blue1:'#484af1',
    blue2:'#160b87',


    pink1:'#d86eb8',
    pinkShade:'rgba(220,108,187,0.8)',
    blue1:'#599ffc',
    blueShade:'rgba(59,159,255,0.9)',
    white:'#fdfbfc',
    white2:'#fcfcfe',
    lightBlue1:'#ebebfa',
    lightBg:'#ebebfa',
    black:'#090909',
    gray1:'#acacac',
    gray2:'#939297',
    danger: '#F32013',
    warning: '#ffc107',
    success: '#4bb543',
    info: '#6f6f6f',
    disabled: '#c2c2c2',
    purple:'#a74bc9',
    skyblue2:'#e2e9f2',
    lightBg2:'#f0eff7',
    blue:'#5c7ccc',
    skyblue:'#5cb4e4',
    pink2:'#d054b4',
    purple2:'#9c54b4',
    pink3:'#fdb8e0',
    pureWhite:'#fff',
    black:'#000',
    lightGray:'#dbdbdb',
    gray3:'#78787f'
};

// ==================== DARK MODE CUSTOMIZATION ====================== //
export const DARK_THEME = {
    // COLORS: { ...COLORS }
    darkBG: { backgroundColor: COLORS.black1 },
    lightGray6: { backgroundColor: COLORS.lightGray6 },
    lightGray6BG: { backgroundColor: COLORS.lightGray6 },



    black1: { color: COLORS.black1 },
    black2: { color: COLORS.black2 },
    light: { color: COLORS.light },
    white: { color: COLORS.white },

    lightGray6: { color: COLORS.lightGray6 },
    lightGray7: { color: COLORS.lightGray7 },
    lightGray10: { color: COLORS.lightGray10 },
    lightGray9: { color: COLORS.lightGray9 },

    gray7: { color: COLORS.gray7 },

    black2BR: { borderColor: COLORS.black2 }
}

//static sizes for fonts
// for dynamic sizes use deviceOrientation width and height

export const SIZES = {
   
    largTitle: 32,
    title: 24,    //experience
    subTitle: 20, //experience

    h: 18,
    h1: 16,  //textlink //header
    h2: 15,  //username
    h3: 14,  //msg
    h4: 12,  //date

    body1: 16,
    body2: 15,
    body3: 14,
    body4: 12,
    small: 12, //experience
    xsmall: 10,

    arrow_down: 16,
    calender: 20,

    // app dimensions
    width,
    height,
};

export const FONTS = {
    heading : "FuzzyBubbles-Bold"


};

const appTheme = { COLORS, SIZES, FONTS, DARK_THEME };

export default appTheme;