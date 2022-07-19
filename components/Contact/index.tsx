import Image from "next/image";
import styles from './Contact.module.scss';
import { useRouter } from "next/router";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import axios from "axios";
import utilStyles from '../../styles/util.module.scss';
import { Util } from "../../utils/util";
import office from '../../public/images/office.png';
import trial from '../../public/svg/gear-white.svg';
import location from '../../public/svg/location.svg';
import phone from '../../public/svg/phone.svg';
export default function Contact() {

    const router = useRouter();
    let t = Util.getLocale(router);
    const [form, setForm] = useState({});
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);

    const handleChange = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { value, name } = e.target;
        setForm({ ...form, [name]: value });
    }
    
    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            let res = await axios.post('/api/contact', form);
            setSuccess(true);
        } catch (error) {
            setSuccess(false);
        }
    }

    return (

        <div className={'bg-black flex flex-col flex-wrap text-white p-20 lg:p-40'}>
            
           
            <p className={utilStyles.title}>CONTATTACI</p>
            <p className={utilStyles.subtitle}>per avere un approfondimento sul servizio.</p>
            
            
            <div className={'mt-20 flex flex-row flex-wrap justify-around'}>
                <div className={'m-0'}>
                    <a href="#"><Image src={office} className={styles.officeImage}></Image></a>
                </div>
                <div className={'flex flex-col'}>
                    <div className="mt-4">
                        <div className={'mb-2'}><Image src={location} width={40} height={40}></Image></div>
                        <p className={`${utilStyles.title} ${styles.title}`}>INDIRIZZO DELLA SEDE</p>
                        <p className={'text-3xl'}>Via Garziere 13, Santorso, 36014, Vicenza (IT)</p>
                    </div>
                    <div className="mt-20">
                        <div className={'mb-2'}><Image src={phone} width={40} height={40}></Image></div>
                        <p className={`${utilStyles.title} ${styles.title}`}>CONTATTO TELEFONICO</p>
                        <p className={'text-3xl'}>+39 349 359 2222</p>
                    </div>
                    
                </div>
            </div>

            <div className={'mt-20'}>
                <p className={utilStyles.title}>SCRIVICI</p>
                <p className={utilStyles.subtitle}>e avrai una risposta alle tue domande nel più breve tempo possibile</p>
            </div>

            <div className={styles.formContainer}>
                <form method="post" onSubmit={handleSubmit}>
                    <div className={styles.rowForm}>
                        <div className={styles.formElement}>
                            <label htmlFor="name">Name</label>
                            <input onChange={handleChange} type="text" id="name" name="name" placeholder="Mario Rossi" required />
                        </div>
                        <div className={styles.formElement}>
                            <label htmlFor="email">Email</label>
                            <input onChange={handleChange} type="email" id="email" name="email" placeholder="mariorossi@gmail.com" required/>
                        </div>
                    </div>
                    <div className={styles.rowForm}>
                        <div className={ `${styles.formElement} w-[300px] md:w-[610px] lg:w-[610px]`}>
                            <label htmlFor="text">Text</label>
                            <textarea onChange={handleChange} id="text" name="text" placeholder="" required rows={7} cols={50}></textarea>
                        </div>
                    </div>
                    <div className={`${styles.rowForm} my-5 `} >
                        <button type={'submit'}>Submit</button>
                    </div>
                </form>
            </div>

            { success ?
                <div className={`text-black d-flex flex-col justify-center text-center p-4 bg-green-400`}>
                    <p></p>
                    <button className='underline block' onClick={() => {setSuccess(false)}}></button>
                </div>
                :
                ''
            }
            { failure ?
                <div className={`text-black d-flex flex-col justify-center text-center p-4 bg-red-500`}>
                    <p></p>
                    <button onClick={() => {setFailure(false)}}></button>
                </div>
                :
                ''
            }
            
        </div>
    
    );
}