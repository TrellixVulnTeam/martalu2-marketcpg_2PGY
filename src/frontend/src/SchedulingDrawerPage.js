import React from "react";
import {
    Drawer as MUIDrawer,
    Button,
    Box
} from "@mui/material";
import {
    InlineWidget,
    PopupModal
} from "react-calendly";


function SchedulingDrawerPage({showDrawer, setShowDrawer}) {

    const [state, setState] = React.useState({
        schedule: false,
        back: true,
    });

    const onClose = () => setShowDrawer(false)
    //here I guess I could set it to open the congrats page.

    const onFinish = values => {
        alert(JSON.stringify(values, null, 2));
    };

    const onFinishFailed = errorInfo => {
        alert(JSON.stringify(errorInfo, null, 2));
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const CalendlyWidget = (anchor) => (
        <Box
            sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div>
                <InlineWidget
                    url={"https://calendly.com/martalu/martalu-intro?hide_gdpr_banner=1&background_color=eaeaea&text_color=32b57f&primary_color=2f400b"}
                    prefill={}
                />
            </div>


        </Box>
    )


    return (
        <div>
            <MUIDrawer variant="temporary" className={CalendlyWidget()}>
                onClick:
            </MUIDrawer>

        </div>
    );
}

export default SchedulingDrawerPage;
