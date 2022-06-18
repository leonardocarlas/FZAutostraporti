
export interface Page {
    header : Header,
    about  : About
}

export interface Header {
    home                : string,
    aboutUs             : string,
    services            : string,
    buttonContactUs     : string
}

export interface TitleSubtitle {
    title : string,
    subtitle : string
}

export interface About extends TitleSubtitle {}
