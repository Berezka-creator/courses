import React from "react";


function MyRoom () {
    const [isOn, setLight] = React.useState(true);
    const luminosity = isOn ? "light" : "dark"

    return (<div className={`MyRoom ${luminosity}`}>the light of the room is {isOn ? 'ON':'OFF'}
    <br />
<button onClick={() => setLight(!isOn)}>Flip It</button></div>
    );
}
export default MyRoom;
