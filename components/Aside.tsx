import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";

interface AsideProps {
    getSelectedServerName?: (serverName: number) => void;
}

const Aside: React.FC<AsideProps> = ({getSelectedServerName}) => {
    const models = useTypedSelector(state => state.modelsReducer.models);
    return (
        <aside className="aside">
            <h3 className="aside-title">Список серверов</h3>
            <ul>
                {models.map((model, index) =>
                    <li key={index + model.customer_id} onClick={() => getSelectedServerName(index)}>{model.customer_id}</li>
                )}
            </ul>
        </aside>
    );
};

export default Aside;