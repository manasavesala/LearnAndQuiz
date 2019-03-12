import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AngularList = ({ AngularList }) => {
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
                Object.keys(AngularList).map(questionId => {
                    let list = AngularList[questionId];
                    return <li style={style}>
                        <ul uk-accordion="multiple: true">
                            <li>
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

AngularList.propTypes = {
    AngularList: PropTypes.object,
};

const mapStateToProps = state => {
    return {
        AngularList: state.angularById
    };
};

export default connect(mapStateToProps)(AngularList);
