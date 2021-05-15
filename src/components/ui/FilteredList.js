import React from 'react';
import TodoItem from './TodoItem';
import { useTranslation } from 'react-i18next';

export default function FilteredList(props) {
    const {items, changeStatus} = props;
    const { t } = useTranslation();
    if (items.length === 0) {
        return (
            <p className="alert alert-info">{t('MSG_NO_ITEMS')}</p>
        );
    }

    return (
        <ul className="list-unstyled">
            {items.map(item => (
                <TodoItem key={item.id} data={item} changeStatus={changeStatus}/>
            ))}
        </ul>
    );
}
