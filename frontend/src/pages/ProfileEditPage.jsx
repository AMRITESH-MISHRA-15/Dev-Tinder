import React from 'react'
import ProfileEditForm from '../components/ProfileEditForm'

const ProfileEditPage = () => {
  return (
    <div className="min-h-dvh flex flex-col w-[100%] my-container bg-[var(--bg-color-2)] pt-[var(--navbar-height)] pb-8">
      <ProfileEditForm/>
    </div>
  );
}

export default ProfileEditPage  