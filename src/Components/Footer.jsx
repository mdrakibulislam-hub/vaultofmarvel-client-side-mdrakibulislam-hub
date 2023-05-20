import React from 'react';
import logo from "../assets/logo.svg";

const Footer = () => {
    return (
        <div className='bg-slate-800'>

            <footer className="footer main-container py-16 bg-slate-800 text-neutral-content">
                <div>
                    <img className='w-1/2' src={logo} alt="" />
                    <p>MARVEL Industries Ltd.<br />&copy; Copyright Marvel since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>

        </div>
    );
};

export default Footer;