
const ProfileAPI = async() => {
    try {
        const response = await fetch("/profile/view", {
          method: "GET",
          credentials: "include",
        });
        
        if(!response.ok){
            throw new Error("Failed to fetch user details");
        }
        return await response.json();
    } catch (error) {
        console.log(error);
        throw error
    }


}

export default ProfileAPI