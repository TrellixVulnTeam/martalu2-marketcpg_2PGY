import * as React from "react";
import {useState, useEffect} from "react";
import {Button} from "antd";
import './App.css';
import 'antd/dist/antd.css';
import {ScheduleOutlined} from "@ant-design/icons";

import {getAllVisitors} from "./client";
import VisitorForm from "./VisitorForm";
import {errorNotification} from "./Notification";

function App() {
    const [visitors, setVisitors] = useState([]);
    const [showDrawer, setShowDrawer] = useState(false);

    const fetchVisitors = () =>
        getAllVisitors()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setVisitors(data);
            }).catch(err => {
            console.log(err.response)
            err.response.json().then(res => {
                console.log(res);
                errorNotification("There was an issue", `${res.message} [${res.status}] [${res.error}]`, "bottomLeft")
                });
            });

    useEffect(() => {
        console.log("component is mounted");
        fetchVisitors();
    }, []);


    return <>
        <div id="bgr">
            <div className="container">
                <div className="left">
                    <br/>
                    <div className="transparentText">
                        <p>
                            ¡Hola, soy Martha Lu!
                            <br/>
                            <br/>¿Estás cerca de jubilarte o ya en esa gran etapa y quieres
                            disfrutarla plenamente?
                            <br/>¿Imaginas vivir en un país donde el
                            dinero alcance dos o tres veces más que donde vives actualmente?
                            <br/>¿Te cansan esos inviernos que se te meten en los huesos?
                            <br/>¿Deseas que te cocinen y hagan aseo a diario?
                            <br/>¿Necesitas un cuidado especial que no puedes pagar hoy?
                            <br/>¿Quieres saber más?
                            <br/> Ven, regístrate y te diremos cómo.
                            <br/>
                            ¡Te recompensaremos por tu tiempo!
                        </p>
                    </div>
                </div>
                <div className="right">
                    <div id="mkt-vid01">
                        <embed
                            src="https://www.youtube.com/embed/L21ecT60VAM?autohide=1&autoplay=0"
                            wmode="transparent"
                            type="video/mp4"
                            width="100%"
                            height="100%"
                            frameBorder="0px"
                            allow="encrypted-media; picture-in-picture"
                            allowFullScreen
                            title="Youtube video"
                        />
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <VisitorForm
                showDrawer={showDrawer}
                setShowDrawer={setShowDrawer}
            />
            <div align="center">
                <Button
                    onClick={() => setShowDrawer(!showDrawer)}
                    type="primary"
                    shape="round"
                    style={{
                        borderRadius: 10,
                        borderColor: "green",
                    }}
                    size="large"
                    icon={<ScheduleOutlined/>}
                >
                    let's schedule!
                </Button>
            </div>
            <br/>
        </div>
    </>

}

export default App;