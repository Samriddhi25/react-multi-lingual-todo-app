import React from 'react';
import Filter from './Filter';
import ButtonWrapper from './ButtonWrapper';
import { useTranslation } from 'react-i18next';

export default function Footer(props) {
    const {count, filter, changeFilter} = props;
    const { t } = useTranslation();
    return (
        <footer className="clearfix">
            <div className="pull-left buttons">
                <ButtonWrapper {...props}/>
            </div>
            <div className="pull-left">
                {`${count} ${t('ITEM_LEFT')}`}
            </div>
            <div className="pull-right">
                <Filter {...{filter, changeFilter}}/>
            </div>
        </footer>
    );
}
