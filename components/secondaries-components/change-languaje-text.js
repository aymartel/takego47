import React, { useEffect, useState } from "react";
import Link from 'next/link'
import { useRouter } from "next/router";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ChangeLanguajeText = () => {
    const router = useRouter();
    const t = useTranslations('Messages');
    const [language, setlanguage] = useState(router.locale);
    const [text, setext] = useState(router.locale);
    useEffect(() => {
        switch (router.locale) {
            case 'es':
                setlanguage('en');
                setext('es')
                break;
            case 'en':
                setlanguage('ru');
                setext('en')
                break;
            default:
                setlanguage('es');
                setext('ru')
                break;
        }
    }, [router.locale])


    return (
        <Link
            href={router.asPath}
            locale={language}
            passHref
        >
            <li>
                <i className="fas fa-language" />{" "}
                <a>
                    {t(text)}

                </a>
            </li>

        </Link>
    );
};

export default ChangeLanguajeText;
