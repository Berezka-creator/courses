import React from "react";

class InputCourse extends React.Component{
    state={
        title: ""
    };

    onChange = e => {
        this.setState({
            title : e.target.value
        });
    };

    handleSubmit = e => { e.preventDefault();
        this.props.addCourseProps(this.state.title);
        this.setState({ title: "" });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='f-container'>
                <input type="text" className='f-input' placeholder="Add Task..." value={this.state.title} onChange={this.onChange}/>
                <input type="submit" value="SUBMIT" className='f-submit'/>
            </form>
        )
    }
}

export default InputCourse;
