import '../Styles/signup.css'

const Signup = () => {
    return (
<div className="">
		<div className="">
			<div className="">
				<span className="">
					Account Login
				</span>
				<form className="">

					<div className="" data-validate = "Enter username">
						<input className="" type="" name="username" placeholder="User name" />
						<span className="" data-placeholder="&#xe82a;"></span>
					</div>

					<div className="" data-validate="Enter password">
						<input className="" type="password" name="pass" placeholder="Password" />
						<span className="" data-placeholder="&#xe80f;"></span>
					</div>

					<div className="">
						<button className="">
							Sign up
						</button>
					</div>

				</form>
			</div>
		</div>
	</div>
	


    );
}

export default Signup;