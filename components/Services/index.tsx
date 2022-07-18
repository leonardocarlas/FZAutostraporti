import { Constants } from "../../constants/constants";
import styles from './Services.module.scss'
import utilStyles from '../../styles/util.module.scss';
import { useRouter } from "next/router";
import { Util } from "../../utils/util";
import image from '../../public/images/marcofront.jpg';
import Image from "next/image";

export default function Services() {
     return (
        <>
        <div className={'flex flex-col flex-wrap text-center p-20 lg:p-40 bg-black text-white'}>
            <p className={utilStyles.title}>SERVIZI CHE OFFRIAMO</p>
            <p className={utilStyles.subtitle}>   L'azienda dispone di una flotta composta da motrici, autotreni, autoarticolati con semirimorchi
                        centinati, aperti e ribassati. Offre un servizio volto a soddisfare le esigenze del cliente in modo sicuro,
                        puntuale ed efficiente con trasporti a carichi completi, dedicati, parziali e groupage, inoltre offriamo la
                        possibilità di effettuare trasporti eccezionali. <br></br></p>
            
            <div className={'flex flex-row flex-wrap  justify-around my-5'}>
                <div>
                    <Image src={image} width={400} height={300} className={'rounded'}></Image>
                    <p className={'text-left mt-2'}>Trasporti a carichi completi</p>
                </div>
                <div>
                    <Image src={image} width={400} height={300} className={'rounded'}></Image>
                    <p className={'text-left mt-2'}>Trasporti a carichi completi</p>
                </div>
            </div>
            <div className={'flex flex-row flex-wrap justify-around my-5'}>
                <div>
                    <Image src={image} width={400} height={300} className={'rounded'}></Image>
                    <p className={'text-left mt-2'}>Trasporti a carichi parziali</p>
                </div>
                <div>
                    <Image src={image} width={400} height={300} className={'rounded'}></Image>
                    <p className={'text-left mt-2'}>Trasporti a carichi groupage</p>
                </div>
            </div>
        </div>
           
        </>
     );
}