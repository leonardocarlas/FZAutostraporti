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
            <p className={'text-2xl'}>Services we Provide</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br></br>
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
        </div>
        </>
     );
}