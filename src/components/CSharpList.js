import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CSharpList = ({ CSharpList }) => {
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
                Object.keys(CSharpList).map(questionId => {
                    let list = CSharpList[questionId];
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

CSharpList.propTypes = {
    CSharpList: PropTypes.object,
};

const mapStateToProps = state => {
    return {
        CSharpList: state.csharpById
    };
};

export default connect(mapStateToProps)(CSharpList);
