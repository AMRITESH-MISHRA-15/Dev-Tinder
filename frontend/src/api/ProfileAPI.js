
const ProfileAPI = async() => {
    const token = localStorage.getItem("token");
    try {
        const response = await fetch("/profile/view", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        
        if(!response.ok){
            throw new Error("Failed to fetch user details");
        }
        return response.json();
    } catch (error) {
        console.log(error);
        throw error
    }


}

export default ProfileAPI