import React from 'react';
import {getOptions} from '../../services/filter';
import { useTranslation } from 'react-i18next';

export default function Filter(props) {
    const options = getOptions();
    const {filter, changeFilter} = props;
    const getClass = (key) => (key === filter ? 'selected' : '');
    const { t } = useTranslation();

    return (
        <ul className="filters list-unstyled clearfix">
            {Object.keys(options).map(key => (
                <li key={key}>
                    <a onClick={() => changeFilter(key)} className={getClass(key)}>
                        {t(options[key])}
                    </a>
                </li>
            ))}
        </ul>
    );
}
