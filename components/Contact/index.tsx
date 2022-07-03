import Image from "next/image";
import styles from './Contact.module.scss';
import { useRouter } from "next/router";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import axios from "axios";
import utilStyles from '../../styles/util.module.scss';
import { Util } from "../../utils/util";

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

        <div>

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
            
            <div>
                <p className={utilStyles.title}></p>
                <p className={utilStyles.subtitle}></p>
            </div>

            <div className={styles.formContainer}>
                <form method="post" onSubmit={handleSubmit}>
                    <div className={styles.rowForm}>
                        <div className={styles.formElement}>
                            <label htmlFor="name"></label>
                            <input onChange={handleChange} type="text" id="name" name="name" placeholder="Mario Rossi" required />
                        </div>
                        <div className={styles.formElement}>
                            <label htmlFor="email"></label>
                            <input onChange={handleChange} type="email" id="email" name="email" placeholder="mariorossi@gmail.com" required/>
                        </div>
                    </div>
                    <div className={styles.rowForm}>
                        <div className={styles.formElement}>
                            <label htmlFor="text"></label>
                            <textarea onChange={handleChange} id="text" name="text" placeholder="" required rows={7} cols={50}></textarea>
                        </div>
                    </div>
                    <div className={`${styles.rowForm} my-5 `} >
                        <button type={'submit'}>Submit</button>
                    </div>
                </form>
            </div>
            
        </div>
    
    );
}