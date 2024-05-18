import React from 'react';
import s from './Nav.module.css';
import logo from '../images/logo.svg';
import data from '../images/measering.svg';
import calc from '../images//calculation.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className={s.nav}>
            <div className={s.wrapper}>
                <Link to=''>
                    <img src={logo} alt='' className={s.logo} />
                </Link>

                <span className={s.navigationItem}>
                    <Link to='/services' className={s.link}>Services</Link>
                </span>
                <span className={s.navigationItem}>
                    <Link to='/products' className={s.link}>Products</Link>
                </span>
                <span className={s.navigationItem}>
                    <Link to='/about' className={s.link}>About us</Link>
                </span>
                <span className={s.navigationItem}>
                    <Link to='/portfolio' className={s.link}>Portfolio</Link>
                </span>
                <span className={s.navigationItem}>
                    <Link to='/faq' className={s.link}>FAQ</Link>
                </span>
                <span className={s.navigationItem}>
                    <Link to='/contacts' className={s.link}>Contacts</Link>
                </span>

                <Link to='/request'>
                    <button className={s.btnRequest}>
                        <img src={data} alt='' />
                        <span className={s.btnSpan}>Make request</span>            
                    </button>
                </Link>
                <Link to='/calculation'>
                    <button className={s.btnCalculation}>
                        <img src={calc} alt=''/>
                        <span className={s.btnSpan}>Calculation</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Nav;
