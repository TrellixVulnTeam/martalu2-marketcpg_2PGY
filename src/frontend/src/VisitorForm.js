import {
    Drawer,
    Input,
    Col,
    Form,
    Row,
    Button
} from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import React from "react";
import {errorNotification} from "./Notification";

import {addNewVisitor} from "./client";
import calendlyModal from "./calendlyModal";

function VisitorForm({showDrawer, setShowDrawer}) {
    const onClose = () => setShowDrawer(false)

    const onFinish = visitor => {
        console.log(JSON.stringify(visitor, null, 2))
        addNewVisitor(visitor)
            .then(() => {
                console.log("visitor added")
                calendlyModal()
            }).catch(err => {
                console.log(err.response)
                err.response.json().then(res => {
                    console.log(res);
                    errorNotification("There was an issue", `${res.message} [${res.status}] [${res.error}]`, "bottomLeft")
                })
            })
    };

    const onFinishFailed = errorInfo => {
        alert(JSON.stringify(errorInfo, null, 2));
    };

    return <Drawer
        title="Please enter your name and email"
        width={window.innerWidth > 900 ? 800 : window.innerWidth - 100}
        onClose={onClose}
        visible={showDrawer}
        bodyStyle={{paddingBottom: 80}}
    >
        <Form layout="vertical"
              onFinishFailed={onFinishFailed}
              onFinish={onFinish}
              hideRequiredMark>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="firstName"
                        label="First Name"
                        rules={[{required: true, message: 'Please enter your first name'}]}
                    >
                        <Input placeholder="Please enter your first name"/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="lastName"
                        label="Last Name"
                        rules={[{required: true, message: 'Please enter your last name'}]}
                    >
                        <Input placeholder="Please enter your last name"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{required: true, message: 'Please enter your email'}]}
                    >
                        <Input placeholder="Please enter your email"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button
                        onClick={onClose}
                        style={{
                            marginRight: 8,
                            borderRadius: 10,
                            borderColor: "green",
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        // onClick={calendlyModal}
                        type="primary"
                        style={{
                            marginRight: 8,
                            borderRadius: 10,
                            borderColor: "green",
                        }}
                        htmlType="submit"
                    >
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    </Drawer>
}

export default VisitorForm;




// function VisitorForm() {
//     const [formValues, setFormValues] = useState(defaultValues);
//     const handleInputChange = (e) => {
//         const {name, value} = e.target;
//         setFormValues({
//             ...formValues,
//             [name]: value,
//         });
//     };
//
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(JSON.stringify(formValues, null, 2));
//         addNewVisitor(formValues)
//             .then(() => {
//                 console.log("visitor added")
//             }).catch(err => {
//             console.log(err)
//         })
//     };
//