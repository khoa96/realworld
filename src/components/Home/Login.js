import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ListErrors from './ListErrors';
import { REGISTER } from '../../constanst/router';
import { connect } from 'react-redux';
class Login extends Component {
    componentDidMount() {
      this.props.dispatch({type: 'TEST'})
    }
    
    render() {
        console.log(this.props.login);
        return (
            <div className="auth-page">
                <div className="container page">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 col-xs-12">
                            <h1 className="text-xs-center">Sign In</h1>
                            <p className="text-xs-center">
                                <Link to={REGISTER} >
                                    Need an account?
                                </Link>
                            </p>
                            {/* hien thi loi khi login */}
                            {/* <ListErrors /> */}
                            <form >
                                <fieldset>
                                    <fieldset className="form-group">
                                        <input
                                            className="form-control form-control-lg"
                                            type="email"
                                            placeholder="Email"
                                        />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input
                                            className="form-control form-control-lg"
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </fieldset>
                                    <button
                                        className="btn btn-lg btn-primary pull-xs-right"
                                        type="submit"
                                    >
                                        Login
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

const mapStateToProps = (state) => {
    return {
        login: state.loginReducer
    }
}
export default connect(mapStateToProps)(Login);