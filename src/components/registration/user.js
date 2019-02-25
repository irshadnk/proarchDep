import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import userActions from '../../actions/user.actions';
import "react-datepicker/dist/react-datepicker.css";
import '../../css/common.css'
import { history } from '../../helpers';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName:'',
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        dob: moment(),
        country:'',
        skills:''
      },
      submitted:false
    };
  }

  componentDidMount() {
    this.setState({
      submitted: false,
    });
    this.props.getSkillsandCountry();
  }

  handleSubmit() {
    this.setState({ submitted: true });
    const { user } = this.state;
    console.log(user.userName +'&&'+ user.firstName +'&&'+ user.lastName +'&&'+ user.email +'&&'+ user.dob)
    if(user.userName && user.firstName && user.lastName && user.email && user.dob && user.skills && user.country) {
      let dbuser = 
      { 
        "userName":user.userName,
        "email":user.email,
        "password":user.password,
        "firstName":user.firstName,
        "lastName":user.lastName,
        "dob":user.dob,
        "skills":user.skills,
        "country":user.country,
      };
      console.log('handleSubmit', dbuser);
      this.props.register(dbuser);
    }
  }

  gologin() {
    history.push('/login');
  }

  handleDateChange(event) {
    const { user } = this.state;
    this.setState({
        user: {
            ...user,
            'dob': event
        }
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
        user: {
            ...user,
            [name]: value
        }
    });
  }

  render() {
    
    const {submitted, user } = this.state;
    let gridList  = (!this.props.grid_list) ? {} : this.props.grid_list;
    let country = (!gridList.country) ? [] : gridList.country, 
    skills =  (!gridList.skills) ? [] : gridList.skills;
    
    return (
      <div>
        <div className="container">
          <div className="">
            <div className="">
              <h5> Signup as User</h5>
            </div>
            <div className="">
              <div>
                <div className={'form-group' + (submitted && !user.userName ? ' has-error' : '')}>
                  <span  htmlFor="userName">User Name</span>
                  <input type="text" className="form-control" name="userName" value={user.userName} onChange={this.handleChange.bind(this)} />
                  {submitted && !user.userName &&
                    <div className="red-text text-darken-2">User Name is required</div>
                  }
                </div>

                <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                  <span htmlFor="email">Email</span>
                  <input type="text" className="form-control" name="email" value={user.email} onChange={this.handleChange.bind(this)} />
                  {submitted && !user.email &&
                    <div className="red-text text-darken-2">Email is required</div>
                  }
                </div>

                <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                  <span htmlFor="firstName">First Name</span>
                  <input type="text" className="form-control" 
                  name="firstName" value={user.firstName} onChange={this.handleChange.bind(this)} />
                  {submitted && !user.firstName &&
                    <div className="red-text text-darken-2">First Name is required</div>
                  }
                </div>
                <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                  <span htmlFor="lastName">Last Name</span>
                  <input type="text" className="form-control " 
                   name="lastName" value={user.lastName} onChange={this.handleChange.bind(this)} />
                  {submitted && !user.lastName &&
                    <div className="red-text text-darken-2">Last Name is required</div>
                  }
                </div>
                <div className={'form-group' + (submitted && !user.dob ? ' has-error' : '')}>
                  <span htmlFor="dob">Date of Birth</span>
                  
                  <DatePicker
                  
                  onSelect={this.handleDateChange.bind(this)}
                  onChange={this.handleDateChange.bind(this)}
                  />
                  {submitted && !user.dob &&
                    <div className="red-text text-darken-2">Date of Birth is required</div>
                  }
                </div>

                <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                  <span htmlFor="password">Password</span>
                  <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange.bind(this)} />
                  {submitted && !user.password &&
                    <div className="red-text text-darken-2">Password is required</div>
                  }
                </div>

                <div className={'form-group' + (submitted && !user.country ? ' has-error' : '')}>
                  <span htmlFor="country">Country</span>
                  <select className="form-control" name="country" value={user.country} onChange={this.handleChange.bind(this)}>
                    <option value = "" > - Select - </option>
                    {
                        Object.keys(country).map(function(key) {
                            return <option value = {country[key]} >{country[key]}</option>
                        }.bind(this))
                    }
                  </select>
                  {submitted && !user.country &&
                    <div className="red-text text-darken-2">Country is required</div>
                  }
                </div>
                
                <div className={'form-group' + (submitted && !user.skills ? ' has-error' : '')}>
                  <span htmlFor="skills">Skills</span>
                  <select className="form-control" name="skills" value={user.skills} onChange={this.handleChange.bind(this)}>
                    <option value = "" > - Select - </option>
                    {
                        Object.keys(skills).map(function(key) {
                            return <option value = {skills[key]} >{skills[key]}</option>
                        }.bind(this))
                    }
                  </select>
                  {submitted && !user.skills &&
                    <div className="red-text text-darken-2">Skills is required</div>
                  }
                </div>
                <div className="form-group">
                  <button className="sgnUp" onClick={this.handleSubmit.bind(this)} >SignUp</button>
                  
                  <button className="can" onClick={this.gologin.bind(this)} >Cancel</button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  register: PropTypes.func.isRequired,
  getSkillsandCountry: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {  user } = state;
  console.log('state', state)
  console.log('state user --', user)
  return {grid_list: user.grid_list};
};

const mapDispatchToProps = dispatch => ({
  register: (user) => userActions.register(user)(dispatch),
  getSkillsandCountry: () => userActions.getSkillsandCountry()(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);

