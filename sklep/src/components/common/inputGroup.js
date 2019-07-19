import React from "react";

const inputGroup = (props) => {
    const { prepend, input, append } = props;
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                {prepend}
            </div>
            {input}
            <div className="input-group-append">
                {append}
            </div>
        </div>
    );
};

export default inputGroup;
