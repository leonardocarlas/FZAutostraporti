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
        <div className={'bg-black text-white p-20 lg:p-40'}>
            <div className={'flex flex-row flex-wrap justify-start mb-4'}>
                <div className={'flex flex-col flex-wrap max-w-[400px]'}>
                    <p className={'text-2xl'}>About Us</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                </div>
            </div>
            <div className={'flex flex-row flex-wrap justify-end rounded-lg'}>
                <Image src={map} className={styles.image}></Image>
            </div>
        </div>
    );
}

