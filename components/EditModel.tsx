import React, {useEffect, useState} from 'react';
import {Model} from "../types/models";
import {useDispatch} from "react-redux";
import {editModelsAction} from "../redux/actions/modelsAction";

interface EditModelProps {
    selectedServer: Model | null,
    setSelectedServer: any,
}

const EditModel: React.FC<EditModelProps> = ({selectedServer, setSelectedServer}) => {

        if (selectedServer === null) return <div className={'edit-models'}><h3>Выберите сервер для редактирования</h3>
        </div>;

        const [serverName, setServerName] = useState(selectedServer.server_name);
        const [serverType, setServerType] = useState(selectedServer.server_type);
        const dispatch = useDispatch();
        const onSubmit = () => {
            const result: Model = {
                customer_id: selectedServer.customer_id,
                server_name: serverName,
                server_type: serverType,
            }
            localStorage.setItem(selectedServer.customer_id, JSON.stringify(result));
            setSelectedServer(null);
            dispatch(editModelsAction(result));
        }

        useEffect(() => {
            setServerName(selectedServer.server_name);
            setServerType(selectedServer.server_type);
        }, [selectedServer])

        return (
            <div className={'edit-models'}>
                <>
                    <h3>Редактировать сервер</h3>
                    <div className="form-row">
                        <label htmlFor="" className="form-label">ID клиента</label>
                        <span>{selectedServer.customer_id}</span>
                    </div>
                    <div className="form-row">
                        <label htmlFor="" className="form-label">Имя сервера</label>
                        <input type="text" value={serverName}
                               onChange={e => setServerName(e.target.value)}/>
                    </div>
                    <div className="form-row">
                        <label htmlFor="" className="form-label">Тип сервера</label>
                        <select value={serverType} onChange={e => setServerType(e.target.value)}>
                            <option value="vds">vds</option>
                            <option value="dedicated">dedicated</option>
                            <option value="hosting">hosting</option>
                        </select>
                    </div>
                    <button onClick={onSubmit}>Изменить</button>
                </>
            </div>
        );
    }
;

export default EditModel;