import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { HOME, SETTING, EDITOR, LOGIN } from '../../constanst/router'

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-light">
                    <div className="container">
                        <Link to={HOME} className="navbar-brand">
                            REALWORLD APP
                        </Link>
                        <ul className="nav navbar-nav pull-xs-right">

                            <li className="nav-item">
                                <Link to={HOME} className="nav-link">
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to={EDITOR} className="nav-link">
                                    <i className="ion-compose"></i>&nbsp;New Post
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to={SETTING} className="nav-link">
                                    <i className="ion-gear-a"></i>&nbsp;Settings
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={LOGIN} className="nav-link">
                                    Sign in
                                </Link>
                            </li>
                            <li className="nav-item">
                                {/* PHAN DANH HIEN THI USER IMAGE VA USERNAME */}
                                <Link
                                    to="/user"
                                    className="nav-link">
                                    <img src="https://scontent.fhan5-4.fna.fbcdn.net/v/t1.0-9/31493874_932902653554972_5737681810414895104_n.jpg?_nc_cat=104&_nc_oc=AQlewgnh7qTvqjy4IhIEvAnjvcJ2glWxuUP-NzxTemJJBTQYtPO6LCQwioWlXb_ozdQ&_nc_ht=scontent.fhan5-4.fna&oh=c54e1f09e7decdcbe816146fdb6d958b&oe=5D6B10D6" className="user-pic" alt="nguyen dang khoa" />
                                    Nguyen Hoàng Trung Hieu
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}
