import React from 'react';
import {MODE_NONE} from '../../services/mode';
import { useTranslation } from 'react-i18next';

export default function Info(props) {
    const { t } = useTranslation();

    return <p className="info">{props.mode === MODE_NONE ? t('INFO_SHORTCUT_KEYS') : t('INFO_CANCEL_SHORTCUT_KEY')}</p>;
}
