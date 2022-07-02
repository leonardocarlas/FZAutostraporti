import { Constants } from "../../constants/constants";
import Image from 'next/image';

import styles from './Info.module.scss'
import utilStyles from '../../styles/util.module.scss';
import { useRouter } from "next/router";
import { Util } from "../../utils/util";
import imageTir from '../../public/images/info.jpg';

export default function Front() {

    let router = useRouter();
    let t = Util.getLocale(router);

    return (
        <>
            <div className={styles.imageContainer}>
            </div>
            <div className={'flex flex-row flex-wrap justify-around bg-black text-white py-20'}>
                <div className={'flex flex-col justify-center text-center my-20'}>
                    <p className={'text-2xl font-bold'}>+ 13'000 km percorsi</p>
                    <p className={'text-xl'}>nell'anno solare 2022</p>
                </div>
                <div className={'flex flex-col justify-center text-center  my-20'}>
                    <p className={'text-2xl font-bold'}>+ 50 aziende servite</p>
                    <p className={'text-xl'}>negli ultimi 4 anni</p>
                </div>
            </div>
        </>
    );
    

}

