import React from "react";
import {PopupWidget} from "react-calendly";


const scheduleModal = () => {
    return (
        <div className="scheduleModal">
            <PopupWidget
                url="https://calendly.com/martalu/martalu-intro?hide_gdpr_banner=1&background_color=eaeaea&text_color=32b57f&primary_color=2f400b"
                // utm={this.props.utm}
                // prefill={this.props.prefill}
                // onModalClose={() => this.setState({isOpen: false})}
                // open={this.state.isOpen}
                /*
                 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                 */
                rootElement={document.getElementById("root")}
                text="Click here to schedule!"
                textColor="#ffffff"
                color="#00a2ff"
            />
        </div>
    );
};
export default scheduleModal;