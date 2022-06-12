import { Constants } from "../../constants/constants";
import Image from 'next/image';

import styles from './Section1.module.scss'
import utilStyles from '../../styles/utils.module.scss';
import { useRouter } from "next/router";
import { Util } from "../../utils/util";



export default function Front() {

    let router = useRouter();
    let t = Util.getLocale(router);


    return (
        <div>
            <p className={`${utilStyles.heading2Xl} ${styles.coloredName}`}>{t.section1.title}</p>
            <p className={utilStyles.headingLg}>{t.section1.subtitle}</p>
        </div>
    );
    

}

