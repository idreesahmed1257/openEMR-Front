import React from 'react'
import '../../css/idrees.css'
import '../../css/login.css'
import logo from '../../assets/logo.png'

const login = () => {
    return (
        <div className='col-12 d-flex'>
            <div className='col-3'></div>
            <div className='d-flex con-center col-6 loginWrap'>
                <div className="loginBox d-flex f-column ">
                    <div className='loginHead d-flex f-column text-center align-center p-3 gap-2'>
                        <img src={logo} alt="" />
                        <p>The most popular open-source Electronic Health Record and Medical Practice Management solution.</p>
                        <a href="#">Acknowledgments, Licensing and Certification</a>
                    </div>
                    <form className="loginBody d-flex f-column  p-3 gap-3">
                        <div className='d-flex f-column'>
                            <label htmlFor="Username" className='browser-default'>Username</label>
                            <input type="text" className='input browser-default' />
                        </div>
                        <div className='d-flex f-column '>
                            <label htmlFor="password" className='browser-default'>Password</label>
                            <input type="password" className='input browser-default ' />
                        </div>
                        <div className='d-flex con-end'>
                            <button className="btn blue-btn">Login</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='col-3'></div>
        </div>
    )
}

export default login