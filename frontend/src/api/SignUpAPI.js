const SignUpAPI = async (firstName, email, password) => {
  try {
    const response = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        emailId: email,
        password: password,
      }),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default SignUpAPI;
