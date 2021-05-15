import React from 'react';
import InputWrapper from './InputWrapper';
import { useTranslation } from 'react-i18next';

export default function Header(props) {
    const { t } = useTranslation();
    return (
        <header>
            <h1>{t('TITLE')}</h1>
            <InputWrapper {...props}/>
        </header>
    );
}
