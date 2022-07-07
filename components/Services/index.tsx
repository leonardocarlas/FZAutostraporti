import { Constants } from "../../constants/constants";
import styles from './Services.module.scss'
import utilStyles from '../../styles/util.module.scss';
import { useRouter } from "next/router";
import { Util } from "../../utils/util";
import imageTir from '../../public/images/info.jpg';

export default function Services() {
     return (
        <>
        <div className={'flex flex-col flex-wrap text-center p-20 lg:p-40 bg-black text-white h-[60rem]'}>
            <p className={utilStyles.title}>Services we Provide</p>
            <p className={utilStyles.subtitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br></p>
            <a href="https://nextjs.org/docs" className={styles.card}>
                <h2>Documentation &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
            </a>
        </div>
        </>
     );
}