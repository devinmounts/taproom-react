import React from 'react';
import PropTypes from 'prop-types';

function KegInfo(props) {

    let divStyle = {
        border: '3px solid grey',
        width: '25%',
        display: 'inline-block',
        margin: '1.5%',
        padding: '10px',
        verticalAlign: 'top',
        minHeight: '200px',
        WebkitBoxShadow: '0px 0px 33px 1px rgba(0,0,0,0.74)',
        MozBoxShadow: '0px 0px 33px 1px rgba(0,0,0,0.74)',
        boxShadow: '0px 0px 33px 1px rgba(0,0,0,0.74)',
        backgroundColor: '#76b35d'
    };

    function handleChangeSelectedKeg(kegId){
        props.onChangeSelectedKeg(kegId);
    }

    const kegInformation =
    <div>
        <h3>{props.name}</h3>
        <h5>Brewer: {props.brewer}</h5>
        <h5>{props.description}</h5>
        <h5>${props.price}</h5>
        <h5>{props.abv} ABV</h5>
        <h5>Pints Remaining: {props.remaining}</h5>
    </div>;

    if (props.currentRouterPath === '/admin'){
        return (
            <div style={divStyle}
                onClick={() => {handleChangeSelectedKeg(
                    {kegId: props.kegId});}}
            >
                {kegInformation}
            </div>
        );
    } else {
        return(
            <div style={divStyle}>
                {kegInformation}
            </div>
        );
    }
}

KegInfo.propTypes = {
    name: PropTypes.string,
    brewer: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    abv: PropTypes.string,
    kegId: PropTypes.string.isRequired,
    remaining: PropTypes.number,
    onChangeSelectedKeg: PropTypes.func,
    currentRouterPath: PropTypes.string
};

export default KegInfo;
