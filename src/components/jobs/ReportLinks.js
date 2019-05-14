import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Epoxy from '../forms/Epoxy'
import { compose } from 'redux'
import { connect } from 'react-redux'

{/* <Link to='/concrete'>Concrete</Link><br/>
            <a href={'/epoxy'} onClick={handleClick}>Epoxy</a><br/>
            <a href={'/resteel'}>Resteel</a><br/>
            <a href={'/grout'}>Grout</a><br/>
            <Link to={'/const'}>Construction</Link> */}


const ReportLinks = ({job}) => {
            
    return (
        <ul>
            <li><Link to={{pathname: '/concrete', state: {job}}}>Concrete</Link></li>
            <li><Link to={{pathname: '/resteel', state: {job}}}>Resteel</Link></li>
            <li><Link to={{pathname: '/grout', state: {job}}}>Grout</Link></li>
            <li><Link to={{pathname: '/epoxy', state: {job}}}>Epoxy</Link></li>
            <li><Link to={{pathname: '/construction', state: {job}}}>Construction</Link></li>
        </ul>
    )
}

export default ReportLinks