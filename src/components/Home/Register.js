import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../constanst/router';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/register';

class Register extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         email: '',
         password: ''
      }
    }

    onUserChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onSubmitRegisterForm = (event) => {
        event.preventDefault();
        const { username, email, password } = this.state;
        this.props.onRegister({username, email, password});
    }
    
    render() {
        const { username, email, password } = this.state;
        const { isRegisterSuccess, isProcess, response } = this.props.register;
        if(isRegisterSuccess) {
            localStorage.removeItem('token');
            localStorage.setItem('token', response.token);
            this.props.history.push('/');
        } 
        return (
            <div className="auth-page">
                <div className="container page">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 col-xs-12">
                            <h1 className="text-xs-center">Sign Up</h1>
                            <p className="text-xs-center">
                                <Link to={LOGIN} >
                                    Have an account?
                                </Link>
                            </p>
                            {/* noi hien thi cac loi trong qua trinh dang ki */}
                            {/* <ListErrors errors={this.props.errors} /> */}

                            <form onSubmit={event => this.onSubmitRegisterForm(event)} >
                                <fieldset>
                                    <fieldset className="form-group">
                                        <input
                                            className="form-control form-control-lg"
                                            type="text"
                                            placeholder="Username"
                                            name="username"
                                            value={username}
                                            onChange={event => {this.onUserChange(event)}}
                                        />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <input
                                            className="form-control form-control-lg"
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            value={email}
                                            onChange={event => {this.onUserChange(event)}}
                                        />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <input
                                            className="form-control form-control-lg"
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            value={password}
                                            onChange={event => {this.onUserChange(event)}}
                                        />
                                    </fieldset>

                                    <button
                                        className="btn btn-lg btn-primary pull-xs-right"
                                        type="submit"
                                        disabled={isProcess ? true : false}
                                    >
                                        Sign up
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRegister: ({username, email, password}) => dispatch(registerUser({username, email, password})),
    }
}

const mapStateToProps = (state) => {
    return {
        register: state.registerReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
