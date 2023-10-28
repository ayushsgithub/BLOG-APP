import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        //TODO: to make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false


        // If "authentication" is true and if "authStatus" is not true (meaning the user is not logged in). It navigates the user to a login page
        if(authentication && authStatus !== authentication){
            navigate("/login")

        // If "authentication" is false and "authStatus" is not false (meaning the user is logged in), it navigates the user to the home page
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>}

  Protected.propTypes = {
    children: PropTypes.node.isRequired,
    authentication: PropTypes.bool
  }