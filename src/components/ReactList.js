import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ReactList = ({ ReactList }) => {
    const style = {
        listStyleType: 'none'
    }
    const style1 = {
        textAlign: 'left'
    }
    return (
        <div style={style1}>
            <br />
            <h1>List of Question and Answers:</h1>
            <br />
            {
                Object.keys(ReactList).map(questionId => {
                    let list = ReactList[questionId];
                    return <li style={style}>
                        <ul uk-accordion="multiple: true">
                            <li className="uk-open">
                                <a className="uk-accordion-title" href="#">{list.question} </a>
                                <div className="uk-accordion-content">
                                    <p>{list.answer}</p>
                                </div>
                            </li>
                        </ul>
                    </li>;
                })
            }
        </div>
    )
}

ReactList.propTypes = {
    ReactList: PropTypes.object,
};

const mapStateToProps = state => {
    return {
        ReactList: state.reactById
    };
};

export default connect(mapStateToProps)(ReactList);
