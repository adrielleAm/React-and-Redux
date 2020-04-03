import React from "react";
import { connect } from "react-redux";
import * as courseAction from "../../redux/actions/coursesActions";
import * as authorAction from "../../redux/actions/authorAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { Redirect } from "react-router-dom";

class CoursesPage extends React.Component {
  state = {
    redirectToAddCoursePage: false
  };
  componentWillMount() {
    const { courses, authors, actions } = this.props;
    if (courses.length === 0) {
      actions.loadingCourses().catch(error => {
        alert("Loading courses failed " + error);
      });
    }

    if (authors.length === 0) {
      actions.loadingAuthors().catch(error => {
        alert("Loading authors failed " + error);
      });
    }
  }
  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="course" />}
        <h2>Courses</h2>
        <button
          style={{ marginBottom: 20 }}
          className="btn btn-primary add-course"
          onClick={() => this.setState({ redirectToAddCoursePage: true })}
        >
          Add Course
        </button>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map(course => {
            return {
              ...course,
              authorName: state.authors.find(a => a.id == course.authorId).name
            };
          }),
    authors: state.authors
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadingCourses: bindActionCreators(courseAction.loadCourses, dispatch),
      loadingAuthors: bindActionCreators(authorAction.loadAuthors, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
