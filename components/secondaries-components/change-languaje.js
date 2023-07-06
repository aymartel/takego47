import React, { useEffect, useState } from "react";
import Link from 'next/link'
import { useRouter } from "next/router";
import Image from "next/image";
import es from "@/images/es.png";
import en from "@/images/en.png";
import ru from "@/images/ru.png";

const ChangeLanguaje = () => {
    const router = useRouter();
    const [language, setlanguage] = useState(router.locale)
    const [flag, setflag] = useState(`/assets/images/${router.locale}.png`)
    // flag_ru.png
    useEffect(() => {
        switch (router.locale) {
            case 'es':
                setlanguage('en');
                setflag(es)
                break;
            case 'en':
                setlanguage('ru');
                setflag(en)
    
                break;
            default:
                setlanguage('es');
                setflag(ru)
                break;
        }
    }, [router.locale])
    
   
    return (
        <Link
            href={router.asPath}
            locale={language}
            passHref
        >
            <button className="button_for_change_languaje ms-3">


                <Image 
                    src={flag} alt="languaje flag" layout="fixed" width="25px" height="15px"
                />
            </button>
        </Link>
    );
};

export default ChangeLanguaje;
