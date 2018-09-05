import React from 'react';
import { setTextFilter } from './../actions/filters';
import { connect } from 'react-redux';

const TextFilterInput = (props) => (
    <div className="form-group">
        <input 
            type="text"
            placeholder="Text Filter"
            className="form-control"
            onChange={(e) => {
                props.dispatch(setTextFilter({ text: e.target.value }));
            }}    
        />
    </div>
);

export default connect()(TextFilterInput);