
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

const AddCourseForm = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    onSubmit: React.PropTypes.func.isRequired
  },

  onSubmit (e) {
    e.preventDefault();

    const courseName = e.target.courseName.value;
    e.target.reset();

    this.props.onSubmit(courseName);
  },

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <input name="courseName" type="text" />
        <input type="submit" />
      </form>
    )
  }
});

const renderApp = () => ReactDOM.render(
  <div>
    <SchoolCoursesComponent
      name={window.HU.name}
      courses={window.HU.courses}
    />
    <AddCourseForm
      name={window.HU.name}
      onSubmit={(name) => {
        window.HU.courses.push(name);
        renderApp();
      }}
    />
  </div>,
  document.getElementById('app')
);

renderApp();
