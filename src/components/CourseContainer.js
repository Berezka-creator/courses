import React from "react";
import CoursesList from "./CoursesList";
import Header from "./Header";
import InputCourse from "./InputCourse";
import "../App.css";
import Flip from "./Flip";
import { v4 as uuidv4 } from "uuid";


class CourseContainer extends React.Component {


    state = {
        courses: [
            { id: uuidv4(),

                title: "CNIT 103 Hardware - 3 units",
                completed: false
            },
            {
                id: uuidv4(),

                title: "CNIT 131 Internet & Intro to HTML, CSS - 3 units",

                completed: false
            },
            {
                id: uuidv4(),
                title: "CNIT 106 Introduction to Networks - 3 units",
                completed: false
            },
            {
                id: uuidv4(),
                title: "CNIT 120 Network Security 3 units",
                completed: false
            }
        ],
        theme: true,
        storage:true
    };


    handleChange = (id) => {
        this.setState({
            courses: this.state.courses.map(course => {
                if (course.id === id) {
                    course.completed = !course.completed;
                }
                return course;

            })
        });
    };
    handleTheme = () => {
        this.setState ( {
            theme: !this.state.theme

        });
    };
    handleStorage =() =>{
        this.setState({
            storage: !this.state.storage
        });
    };
    deleteCourse = (id) => {
        this.setState({
            courses:
                [
                    ...this.state.courses.filter(course => {
                        return course.id !== id;

                    })
    ]
    });

    }
    addCourseItem = title => {
        const newCourse = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            courses: [...this.state.courses, newCourse]
        });
    };

    render() {
        return (
            <div className={`container ${this.state.theme ? "light" : "dark"}`}>
                <Header />
                <Flip handleThemeProps={this.handleTheme} theme={this.state.theme}/>
                <InputCourse addCourseProps={this.addCourseItem}/>
                <CoursesList courses={this.state.courses}
                             handleChangeProps={this.handleChange}
                             deleteCourseProps={this.deleteCourse} />
                     </div>
        )
    }
}
export default CourseContainer;
