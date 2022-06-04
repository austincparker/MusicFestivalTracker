import React from 'react';
import PropTypes from 'prop-types';
import { signInUser } from '../api/auth/auth';
export default function SignInView({ user }){
    return (
        <div>
          {user === null ? (
            <>
            <h2>...loading</h2>
            </>
          ) : (
            <>
          <h1>Welcome! Sign In!</h1>
          <button
            type="button"
            className="btn btn-success"
            onClick={signInUser}
          >SIGN IN </button>
          </>
          )}

          </div>
        
    )
}
SignInView.propTypes = {
  user: PropTypes.node
}
SignInView.defaultProps = {
  user : null,
}