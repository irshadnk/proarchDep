import React, { Component } from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import userActions from '../../actions/user.actions';
class LoginCointainer extends Component {
  constructor(props) {
    super(props);
    this.props.logout();
    this.state = {
      username: '',
      password: '',
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // reset login status
    this.props.logout();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
        this.props.login({username : username, password: password});
    }
  }
  render() {
    const { username, password, submitted } = this.state;
    return (
      <>
        <div className="container ">
        <div className="">

          <form className="" onSubmit={this.handleSubmit}>
            <div className=''>
              <div className=''>
              </div>
            </div>

            <div className=''>
              <div className=''>
                <input className='validate' type='text' name='username' id='username' 
                value={username} onChange={this.handleChange.bind(this)} />
                <label htmlFor='username'>Enter your Username</label>
              </div>
            </div>

            <div className=''>
              <div className=''>
                <input className='validate' type='password' name='password' id='password' 
                value={password} onChange={this.handleChange.bind(this)} />
                <label htmlFor='password'>Enter your password</label>
              </div>
            </div>

            <br/>
            <center>
              <div className='row'>
                <button name='btn_login' className=''
                >Login</button>
              </div>
              <Router>
              <div className=''>
                
                <div className=""> <a href="registration">Click here to Register</a></div>
                
              </div>
              </Router>
            </center>
          </form>
        </div>
      </div>
      </>
    )
  }
}

LoginCointainer.propTypes = {
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { user } = state;
  if (user.user) {
    window.location.reload();
  }
  return {isloggedIn : user.isloggedIn};
};

const mapDispatchToProps = dispatch => ({
  login: (user) => userActions.login(user)(dispatch),
  logout: (user) => userActions.logout()(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginCointainer);

