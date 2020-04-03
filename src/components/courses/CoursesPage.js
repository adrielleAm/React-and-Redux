import React from "react";
import { connect } from "react-redux";
import * as courseAction from "../../redux/actions/coursesActions";
import * as authorAction from "../../redux/actions/authorAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

class CoursesPage extends React.Component {
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
        <h2>Courses</h2>
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
