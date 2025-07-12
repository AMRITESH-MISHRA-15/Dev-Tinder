

import React from 'react'
import UpdatePasswordAPI from '../api/UpdatePasswordAPI'
import { useState } from 'react'
import toast from 'react-hot-toast'


const usePasswordUpdate = () => {

    const [Password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const newPasswordHandler = (e) => {
        setNewPassword(e.target.value);
    }

    const updatePasswordHandler = (e) => {
        setPassword(e.target.value);
    }

    const updatePasswordCall = async (e) => {
        e.preventDefault();
        try {
            const response = await UpdatePasswordAPI(Password, newPassword);
            toast.success(response.message)
        } catch (error) {
            const errorMessage = await error.text();
            toast.error(errorMessage);
        }
    }

  return {
    newPasswordHandler,
    updatePasswordHandler,
    updatePasswordCall
  }
}

export default usePasswordUpdate