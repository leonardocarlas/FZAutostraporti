import { Constants } from "../../constants/constants";
import Image from 'next/image';

import styles from './Front.module.scss'
import utilStyles from '../../styles/util.module.scss';
import { useRouter } from "next/router";
import { Util } from "../../utils/util";
import Header from "../Header/Header";
import arrowDown from '../../public/svg/down-arrow.svg';

export default function Front() {

    let router = useRouter();
    let t = Util.getLocale(router);

    return (
        <div className={styles.frontContainer}>
            <div className={styles.headerContainer}>
                <Header></Header>
            </div>
            <div className={styles.frontContent}>
                <p className={`${utilStyles.title} ${styles.title}`}>{Constants.SITETITLE}</p>
                <div className={'flex flex-wrap flex-row justify-center align-center content-center mb-4'}>
                    <button className={`${utilStyles.button} ${styles.button}`}>CONTACT US</button>
                    <button className={`${utilStyles.button} ${styles.button} ${styles.white}`}>SERVICES</button>      
                </div>
                <div className={'flex flex-wrap flex-row justify-center mb-4 md:mb-32 lg:mb-48'}>
                    <Image src={arrowDown} height={20} width={20}></Image>
                </div>
            </div>
        </div>
    );
    

}

