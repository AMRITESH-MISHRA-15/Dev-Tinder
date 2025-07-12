const UpdatePasswordAPI = async (password, newPassword) => {
  try {
    const response = await fetch("/profile/password", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: password, newPassword: newPassword }),
      credentials: "include",
    });
    console.log(response);
    
    if (!response.ok) {
      throw new Error("Failed to update password");
    }
    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default UpdatePasswordAPI;
