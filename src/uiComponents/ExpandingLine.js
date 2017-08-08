import React, { Component } from 'react';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Line = styled.div`
    border-bottom: 4px solid black;
`;

const ExpandingLine = props => {
    return (
        <ReactCSSTransitionGroup
            transitionName='expanding'
            transitionEnter={false}
            transitionLeave={false}
            transitionAppear={true}
            transitionAppearTimeout={1000}
        >
            <Line key={ Math.random() }/>
        </ReactCSSTransitionGroup>
    );
}

export { ExpandingLine };