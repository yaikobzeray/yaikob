import { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

function SpinningLoader(props) {

    return (
        <ClimbingBoxLoader
           loading={props.loading}
            color={"#433E49"}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
}

export default SpinningLoader;
