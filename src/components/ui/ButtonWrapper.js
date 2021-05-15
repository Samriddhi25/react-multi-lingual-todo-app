import React, { useState } from 'react';
import { MODE_NONE, MODE_CREATE, MODE_SEARCH } from '../../services/mode';
import { useTranslation } from 'react-i18next';
import i18next from "i18next";

export default function ButtonWrapper(props) {
    const { mode, changeMode } = props;
    const [toggle, setToggle] = useState(false)
    const isCreateMode = () => mode === MODE_CREATE;
    const isSearchMode = () => mode === MODE_SEARCH;
    const { t } = useTranslation();

    return (
        <div>
            <a title="Add New"
                className={'button add ' + (isCreateMode() ? 'selected' : '')}
                onClick={() => changeMode(isCreateMode() ? MODE_NONE : MODE_CREATE)}></a>
            <a title="Search"
                className={'button search ' + (isSearchMode() ? 'selected' : '')}
                onClick={() => changeMode(isSearchMode() ? MODE_NONE : MODE_SEARCH)}></a>
            <a title="Language"
                className='button lang'
                onClick={() => {setToggle(!toggle)}}></a>
            {toggle &&
                <div className="multi-lang">
                    <a className="button" onClick={() => {i18next.changeLanguage('en'); setToggle(false)}}>{t('ENGLISH')}</a>
                    <a className="button" onClick={() => {i18next.changeLanguage('hi'); setToggle(false)}}>{t('HINDI')}</a>
                </div>
            }
        </div>
    );
}
