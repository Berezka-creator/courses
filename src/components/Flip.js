import React from "react";
import Switch from "react-switch";

class Flip extends React.Component {
    render() {
        return(
        <div>
            <Switch
                onChange={() => this.props.handleThemeProps(this.props.theme)}
                checked={this.props.theme}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.2)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
            />
            <p>This switch is <b>{this.props.theme ? "on" : "off"}</b></p>


        </div>
        )
    }
}

export default Flip;
