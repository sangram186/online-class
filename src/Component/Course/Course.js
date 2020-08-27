import React from 'react';
import './Course.css';

const Course = (props) => {
    const {img, title, price, ratting, creator, student} = props.data;
    return (
            <div className="course-info">
                <img src={img} alt=""/>
                <h3>{title}</h3>
                <p><small>{creator}</small></p>
                <p><small>Rating</small> <span className='ratting'>{ratting}</span> - <small>({student})</small></p>
                <h3>${price}</h3>
                <button onClick={() => props.enrollBtn(props.data)}>Enroll Now</button>
                
            </div>
    );
};

export default Course;