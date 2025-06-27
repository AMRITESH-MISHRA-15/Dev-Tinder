
const LogoutAPI = async() => {
    try{
        const response = await fetch("/logout", {
            method: "POST",
            credentials: "include",
        });
        return response;
    }catch(error){
        console.log(error);
    }
}

export default LogoutAPI