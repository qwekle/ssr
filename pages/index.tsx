import Head from "next/head";
import Aside from "../components/Aside";
import EditModel from "../components/EditModel";
import {useState} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Index = () => {
    const models = useTypedSelector(state => state.modelsReducer.models);
    const [selectedServer, setSelectedServer] = useState(null)
    const getSelectedServerName = (serverId: number) => {
        setSelectedServer(models[serverId]);
    }

    return (
        <>
            <Head>
                <title>Test SSR with next.js</title>
            </Head>
            <div className={'wrapper'}>
                <Aside getSelectedServerName={getSelectedServerName}/>
                <EditModel selectedServer={selectedServer} setSelectedServer={setSelectedServer}/>
            </div>
        </>
    );
};

export default Index;