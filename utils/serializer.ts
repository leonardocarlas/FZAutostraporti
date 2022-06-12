import {Header, Page, About} from "../constants/page";

function fromJsonToObj(json : any)  {
    let p = {} as Page;

    let h = {} as Header;
    h.home     = json?.header?.home;
    h.aboutUs  = json?.header?.aboutUs;
    h.services = json?.header?.services;
    h.buttonContactUs = json?.header?.buttonContactUs;
    p.header = h;

    let a = {} as About;
    a.title    = json?.home?.about?.title;
    a.subtitle = json?.home?.about?.subtitle;
    p.about    = a;

    return p;
}


export default fromJsonToObj;
