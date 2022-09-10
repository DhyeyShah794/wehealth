import { signInWithGoogle } from '../firebase';
import { GoogleButton } from 'react-google-button';
import '../Styles/login.css'

const Login = () => {
	return (
		<div className="centre">
			<div className="form">
				<div className="">

					<form className="primary">
						<span className="">
							<p className='heading'>LOGIN</p>
						</span>
						<div className="username" data-validate="Enter username">
							<input className="" type="" name="username" placeholder="User name" />
							<span className="" data-placeholder="&#xe82a;"></span>
						</div>

						<div className="pwd" data-validate="Enter password">
							<input className="" type="password" name="pass" placeholder="Password" />
							<span className="" data-placeholder="&#xe80f;"></span>
						</div>

						<div className="login">
							<button className='loginb'>Login</button>
						</div>
						<div>
							<a href="" className="forgot">Forgot Password?</a>
						</div>
						<div className="google-login">
							{/* <GoogleButton onClick={ handleGoogleSignIn } /> */}
							<GoogleButton onClick={signInWithGoogle} />
						</div>
						<div className="register">
							<a href="/signup" className="signup">Don't have an account? Register here</a>
						</div>		
					</form>
				</div>
			</div>
		</div>



	);
}

export default Login;