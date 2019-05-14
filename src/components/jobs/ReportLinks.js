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
            
    const handleClick = (e) => {
        //e.preventDefault();
        job.bind(e.target.value);
        
        console.log('click happened', job)
        
    }

    // console.log(props)

    return (
        <ul>
            <li><Link to={{pathname: '/epoxy', state: {job}}}>Epoxy</Link></li>
            <li><a href="/concrete">Concrete</a></li>
        </ul>
    )
}

export default ReportLinks