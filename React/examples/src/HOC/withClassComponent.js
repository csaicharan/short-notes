import React from 'react';

const withClassComponent = (WithComponent, className) => {
    return (props) => {
        return (
            <div className={className}>
                <WithComponent/>
            </div>
        )
    }
}

export default withClassComponent;