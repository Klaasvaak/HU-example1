
const SchoolCoursesComponent = React.createClass({

  propTypes: {
    name: React.PropTypes.string.isRequired,
    courses: React.PropTypes.array.isRequired
  },

  renderCourses () {
    return this.props.courses.map((course) => {
      return (
        <li key={course}>{course}</li>
      )
    });
  },

  render () {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>Courses:</h2>
        <ul>
          {this.renderCourses()}
        </ul>
      </div>
    );
  }
});

ReactDOM.render(
  <SchoolCoursesComponent
    name={window.HU.name}
    courses={window.HU.courses}
  />,
  document.getElementById('app')
);