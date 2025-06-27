const LoginAPI = async (email, password) => {
  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ emailId: email, password: password }),
    });
    return response
  } catch (error) {
    console.log(error);
  }
};

export default LoginAPI;
