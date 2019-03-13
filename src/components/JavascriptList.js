import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const JavascriptList = ({ JavascriptList }) => {
    const style = {
        listStyleType: 'none'
    }
    const style1 = {
        textAlign: 'left'
    }
    var style2 = {
        backgroundColor: 'yellow'
    }
    return (
        <div style={style1}>
            <br />
            <div style={style2}>
                <h1>List of Question and Answers:</h1>
            </div>
            <br />
            {
                Object.keys(JavascriptList).map(questionId => {
                    let list = JavascriptList[questionId];
                    return <li style={style}>
                        <ul uk-accordion="multiple: true">
                            <li>
                                <a className="uk-accordion-title" href="#"><h3>{list.question}</h3> </a>
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

JavascriptList.propTypes = {
    JavascriptList: PropTypes.object,
};

const mapStateToProps = state => {
    return {
        JavascriptList: state.javaScriptById
    };
};

export default connect(mapStateToProps)(JavascriptList);
