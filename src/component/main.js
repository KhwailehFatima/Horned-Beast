import React from "react";
import HornedBeast from "./hornedbeast";

class Main extends React.Component {
   
    render() {
        return (
            <>
                {
                    this.props.item.map(item =>
                        <HornedBeast title={item.title} image_url={item.image_url} description={item.description} />
                    )
                }

            </>
        )
    }
}

export default Main;
