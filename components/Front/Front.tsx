import { Constants } from "../../constants/constants";
import Image from 'next/image';

import styles from './Front.module.scss'
import utilStyles from '../../styles/util.module.scss';
import { useRouter } from "next/router";
import { Util } from "../../utils/util";

export default function Front() {

    let router = useRouter();
    let t = Util.getLocale(router);

    return (
        <div className={styles.frontContainer}>
            <div className={styles.frontContent}>
                <p className={`${utilStyles.title} ${styles.title}`}>{Constants.SITETITLE}</p>
                <div className={'flex flex-wrap flex-row align-center content-center mb-10'}>
                    <button>Contact Us</button>
                    <button>Services</button>      
                </div>
            </div>
        </div>
    );
    

}

