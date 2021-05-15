import React from 'react';
import { useTranslation } from 'react-i18next';

export default function SearchBox(props) {
    const {query, setSearchQuery} = props;
    const { t } = useTranslation();
    return (
        <input
            type="text" autoFocus
            className="form-control search"
            value={query}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={t('SEARCH')}
        />
    );
}
