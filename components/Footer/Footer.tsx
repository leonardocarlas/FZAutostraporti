import styles from './Footer.module.scss';
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

import logoPic from '../../public/svg/logo.svg'
import utilStyles from '../../styles/util.module.scss';
import { Constants } from '../../constants/constants';
import { useRouter } from 'next/router';
import { Util } from '../../utils/util';
import { PathPage } from '../../constants/path-pages';

export default function Footer () {

  let router = useRouter();
  let t = Util.getLocale(router);
  
  return (
    <footer className={`p-2 bg-black text-white link-white ${styles.link}`} data-testid="container">
      <div className={'flex flex-row flex-wrap justify-around'}>
        <div>
          <p className={utilStyles.subtitle}>ORARI LAVORATIVI</p>
          <p>Lunedì______8:00-17:00</p>
          <p>Martedì</p>
          <p>Mercoledì</p>
          <p>Giovedì</p>
          <p>Venerdì</p>
          <p>Sabato e Domenica</p>
        </div>
        <div className={'flex flex-col'}>
          <p className={utilStyles.subtitle}>MENU</p>
          <Link href={'#'} ><a className={`${utilStyles.link} ${styles.link}`}>{t.header.home}</a></Link>
          <Link href={PathPage.SERVICES} ><a className={`${utilStyles.link} ${styles.link}`}>{t.header.services}</a></Link>
          <Link href={'#'} ><a className={`${utilStyles.link} ${styles.link}`}>{t.header.aboutUs}</a></Link>
          <Link href={'#'} ><a className={`${utilStyles.link} ${styles.link}`}>{t.header.buttonContactUs}</a></Link>
        </div>
        <div className={'flex flex-col'}>
          <p className={utilStyles.subtitle}>SEDE OPERATIVA</p>
          <p>Via Garziere 13, Santorso</p>
          <p>36014</p>
          <p>Vicenza, Italia</p>
        </div>

        <div className={'flex flex-col'}>
          <p className={utilStyles.subtitle}>CONTATTI</p>
          <p>Email: info@fzautotrasporti.it</p>
          <p>Cellulare: </p>
        </div>
      </div>
      <div className={'flex flex-row justify-center text-2xl'}>
        <p>Website developed by <Link href={'https://www.leonardocarlassare.com/'}><a>Leonardo Carlassare</a></Link></p>
      </div>
    </footer>
  );

}