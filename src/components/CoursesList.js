import React from "react";
import CourseItem from "./CourseItem";

class CoursesList extends React.Component{
    render(){
        return(
            <div> {this.props.courses.map(course =>(
                <CourseItem key={course.id} course={course} handleChangeProps = {this.props.handleChangeProps} deleteCourseProps={this.props.deleteCourseProps}/>
            )
            )
            }
            </div>
        )
    }

}
export default CoursesList;
