import { Constants } from "../../constants/constants";
import Image from 'next/image';

import styles from './Info.module.scss'
import utilStyles from '../../styles/util.module.scss';
import { useRouter } from "next/router";
import { Util } from "../../utils/util";
import imageTir from '../../public/images/info.jpg';
import gear from '../../public/svg/gear-white.svg'
export default function Front() {

    let router = useRouter();
    let t = Util.getLocale(router);

    return (
        <>
            <div className={styles.imageContainer}>
            </div>
            <div className={'flex flex-row flex-wrap justify-around bg-black text-white py-20'}>
                <div className={'flex flex-col justify-center my-20 text-left'}>
                    <div className={'mb-2'}><Image src={gear} width={40} height={40}></Image></div>
                    <p className={`${utilStyles.title}`}>PIU' DI 500'000 KM</p>
                    <p className={'text-xl'}>percorsi ogni anno dai nostri mezzi</p>
                </div>

                <div className={'flex flex-col justify-center my-20 text-left'}>
                    <div className={'mb-2'}><Image src={gear} width={40} height={40}></Image></div>
                    <p className={`${utilStyles.title}`}>PIU' DI 50 AZIENDE</p>
                    <p className={'text-xl'}>servite con la massima professionalità</p>
                </div>

                <div className={'flex flex-col justify-center my-20 text-left'}>
                    <div className={'mb-2'}><Image src={gear} width={40} height={40}></Image></div>
                    <p className={`${utilStyles.title}`}>PIU' DI 10 PAESI</p>
                    <p className={'text-xl'}>raggiunti in tutta Europa</p>
                </div>
            </div>
        </>
    );
    

}

