import { Constants } from "../../constants/constants";

import Image from "next/image";
import styles from './About.module.scss'
import utilStyles from '../../styles/util.module.scss';
import { useRouter } from "next/router";
import { Util } from "../../utils/util";
import map from '../../public/images/map.jpg';

export default function Front() {

    let router = useRouter();
    let t = Util.getLocale(router);

    return (
        <div className={'bg-black text-white p-20 lg:p-40 h'}>
            <div className={'flex flex-row flex-wrap justify-start mb-4'}>
                <div className={'flex flex-col flex-wrap max-w-[400px]'}>
                    <p className={`${utilStyles.title} ${styles.title}`}>ABOUT US</p>
                    <p className={`${utilStyles.subtitle} ${styles.title}`}>F.Z. Autotrasporti è un'azienda nata nel 1997 specializzata nel trasporto merci in conto terzi, operando
                        nel territorio nazionale ed internazionale e prevalentemente nel nord Italia. <br></br><br></br>
                     </p>
                </div>
            </div>
            <div className={'flex flex-row flex-wrap justify-end rounded-lg'}>
                <Image src={map} className={styles.image}></Image>
            </div>
        </div>
    );
}

