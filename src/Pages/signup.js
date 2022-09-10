import { signInWithGoogle } from '../firebase';
import { GoogleButton } from 'react-google-button';
import { useEffect, useState } from 'react';
import '../Styles/signup.css'

function Signup({ handleSubmit }) {

	return (
		<div className="centre2">
			<div className="form2">
				<div className="">

					<form className="box2">

						<span className='' >
							<p className="signup1">SIGN UP</p>
						</span>

						<div className="username2" data-validate="Enter email">
							<input className="" type="" name="email" placeholder="Email" required />
							<span className="" data-placeholder="&#xe82a;"></span>
						</div>

						<div className="pwd2" data-validate="Enter password">
							<input className="" type="password" name="pass" placeholder="Password" required />
							<span className="" data-placeholder="&#xe80f;"></span>
							<div className="">
								<button className="bsignup">
									Sign up
								</button>
							</div>
							<div className="google-login">
								<GoogleButton className="google-signup-btn" onClick={signInWithGoogle} />
							</div>
							<div>
								<a href="/login" className="login">Already have an account? Login</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Signup;