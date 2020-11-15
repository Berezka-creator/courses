import React from "react";

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
                <li className="todo-item"><input type="checkbox"
                           checked={this.props.course.completed}
                           onChange={() => this.props.handleChangeProps(this.props.course.id)}
                />
                <button onClick={() => this.props.deleteCourseProps(this.props.course.id)}>DELETE</button>
                    <span style={this.props.course.completed ? completeStyle : null}>{this.props.course.title}</span>
                </li>

            </div>

            )



    }
}
export default CourseItem;
