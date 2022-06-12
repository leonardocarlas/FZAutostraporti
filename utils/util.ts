import { NextRouter } from "next/router";
import {Page} from "../constants/page";
import resources from "../public/locales/i18n";


export class Util {
    public static getLocale(router: NextRouter) : Page {
        let t;
        switch(router.locale) { 
          case 'en': { 
            t = resources.enPage;
            break; 
          } 
          case 'it': { 
            t = resources.itPage
            break; 
          }
          default: { 
            t = resources.itPage;
            break; 
          } 
        }
        return t;
    }
}



