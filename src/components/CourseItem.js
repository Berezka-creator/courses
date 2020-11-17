import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CourseItem extends React.Component{

    render(){
        const completeStyle = {
            fontStyle: "italic",
            color: "#d35e0f",
            opacity: 0.5,
            textDecoration: "line-through",
        }
        return(
            <div>
                <li className="course-item"><input type="checkbox"
                           checked={this.props.course.completed}
                           onChange={() => this.props.handleChangeProps(this.props.course.id)}
                />
                <FontAwesomeIcon className="favicons" icon = 'trash' onClick={() => this.props.deleteCourseProps(this.props.course.id)} />
                    <span style={this.props.course.completed ? completeStyle : null}>{this.props.course.title}</span>
                </li>

            </div>

            )



    }
}
export default CourseItem;
