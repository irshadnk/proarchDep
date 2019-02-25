
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { node } from 'prop-types';
import userActions from '../../actions/user.actions';
import '../../css/common.css';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
  }

  componentDidMount() {
  }

  logoutfn() {
    this.props.logout();
  }

  render() {
    console.log('this.props', this.props)
    let user = (!this.props.user) ? {} : this.props.user;
    let data = (!user.data) ? [] : user.data;
    let det  = (!data[0]) ? {} : data[0];
    const pStyle = {
      padding: '15px',
      backgroundColor: '#3f51b5',
      color: 'white'
    };
    const cardStyle = {
      marginLeft: '0%',
      width: '100%'
    };

    return (
      <div className="container">
        <div className="">
          <div>
            Name: {det.userName}
          </div>
          <div>
            Skills: {det.skills}
          </div>
          <div>
            Country: {det.country}
          </div>
        </div>

        <div className="form-group">
          <button className="btn indigo" onClick={this.logoutfn.bind(this)} >Logout</button>
        </div>

      </div>
    );
  }
}

Dashboard.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { user } = state;
  return {user: user.loggedInuser };
};

const mapDispatchToProps = dispatch => ({
  logout: () => userActions.logout()(dispatch),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

