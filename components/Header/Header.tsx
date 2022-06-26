import styles from './Header.module.scss'
import Image from 'next/image'
import { Constants } from '../../constants/constants'
import Link from 'next/link'
import logoPic from '../../public/svg/logo.svg'
import menuPic from '../../public/svg/hamburger-menu.svg'
import menuPicWhite from '../../public/svg/white/hamburger-menu-white.svg'
import { useRouter } from 'next/router'
import { Util } from '../../utils/util'
import { PathPage } from '../../constants/path-pages'
import utilStyles from '../../styles/util.module.scss';


export default function Header() {

    let router = useRouter();
    let t = Util.getLocale(router);

    return (
        <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container-fluid">
                <a className={'navbar-brand ml-8'} href="#">LOGO</a>
                <button className={`${styles.toggleButton} mt-3 mr-5`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <p>Menu</p>
                </button>
                <div className={`collapse navbar-collapse ${styles.end}`} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <div className={styles.rigthContainer}>
                        <Link href={'#'} ><a className={utilStyles.link}>{t.header.home}</a></Link>
                        <Link href={PathPage.SERVICES} ><a className={utilStyles.link}>{t.header.services}</a></Link>
                        <Link href={'#'} ><a className={utilStyles.link}>{t.header.aboutUs}</a></Link>
                        <button className={utilStyles.button}>{t.header.buttonContactUs}</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

