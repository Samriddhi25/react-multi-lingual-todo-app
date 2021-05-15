import React, { Component } from 'react';
import TodoList from '../ui/TodoList';
import StateProvider from './StateProvider';
import KeyStrokeHandler from './KeyStrokeHandler';
import i18n from "../../util/i18n";
import { I18nextProvider } from "react-i18next";

class App extends Component {
    render() {
        return (
            <I18nextProvider i18n={i18n}>
                <StateProvider>
                    <KeyStrokeHandler>
                        <TodoList />
                    </KeyStrokeHandler>
                </StateProvider>
            </I18nextProvider>
        );
    }
}

export default App;
