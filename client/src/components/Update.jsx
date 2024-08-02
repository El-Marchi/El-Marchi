import React, { useState } from 'react'
import axios from 'axios'


const Update = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(`http://localhost:5000/api/user/3 `, {
        firstName:firstName,
        lastName:lastName,
        email:email,
        address:address,
       
      })

      console.log('Profile updated:', response.data)
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error('Error updating profile:', error)
      // Handle error (e.g., show an error message)
    }
  }
  const Submit= async(e)=>{
    e.preventDefault()
    try{
      const response=await axios.put(`http://localhost:5000/api/user/updatePassword/23 `,{
        currentPassword:currentPassword,
        newPassword:newPassword
        
      })
      console.log('Password updated:', response.data)
    } catch (error) {
      console.error('Error updating password:', error)
    }

  }




  return (
    <div className="Account w-96 h-96 relative bg-white">
      {/* Horizontal line */}
      <div className="Line3 w-96 h-px left-0 top-[142px] absolute justify-center items-center inline-flex">
        <div className="Line3 w-96 h-px origin-top-left rotate-180 opacity-30 border border-black"></div>
      </div>

      {/* Breadcrumb */}
      <div className="Roadmap left-[135px] top-[222px] absolute justify-start items-center gap-3 inline-flex">
        <div className="Account opacity-50 text-black text-sm font-normal font-['Poppins'] leading-tight">Home</div>
        <div className="Line13 w-3.5 h-px origin-top-left rotate-[117.05deg] border border-black/50"></div>
        <div className="Nothing text-black text-sm font-normal font-['Poppins'] leading-tight">My Account</div>
      </div>

      {/* Left sidebar */}
      <div className="left-[135px] top-[323px] absolute flex flex-col gap-8">
        <div>
          <div className="text-black text-base font-medium font-['Poppins'] leading-normal mb-4">Manage My Account</div>
          <div className="flex flex-col gap-2 ml-9">
            <div className="text-red-500 text-base font-normal font-['Poppins'] leading-normal">My Profile</div>
            <div className="opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal">Address Book</div>
            <div className="opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal">My Payment Options</div>
          </div>
        </div>
        <div>
          <div className="text-black text-base font-medium font-['Poppins'] leading-normal mb-4">My Orders</div>
          <div className="flex flex-col gap-2 ml-9">
            <div className="opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal">My Returns</div>
            <div className="opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal">My Cancellations</div>
          </div>
        </div>
        <div className="text-black text-base font-medium font-['Poppins'] leading-normal">My WishList</div>
      </div>

      {/* Main content */}
      <div className="w-96 h-96 left-[380px] top-[311px] absolute bg-white rounded shadow p-10">
        <h2 className="text-red-500 text-xl font-medium font-['Poppins'] leading-7 mb-6">Edit Your Profile</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="flex flex-wrap gap-12 mb-6">
            <InputField label="First Name" placeholder="Ahlem" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <InputField label="Last Name" placeholder="Calech" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <InputField label="Email" placeholder="Ahlemmm@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputField label="Address" placeholder="Kingston, 5236, United State" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>

          {/* Password change section */}
          <div className="mb-8">
            <h3 className="text-black text-base font-normal font-['Poppins'] leading-normal mb-2">Password Changes</h3>
            <div className="flex flex-col gap-4">
              <InputField placeholder="Current Password" type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
              <InputField placeholder="New Password" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
              <InputField placeholder="Confirm New Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex justify-end items-center gap-8">
            <button type="button" className="text-black text-base font-normal font-['Poppins'] leading-normal">Cancel</button>
            <button type="submit" className="px-12 py-4 bg-red-500 rounded text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// Helper component for input fields
const InputField = ({ label, placeholder, type = "text", value, onChange }) => (
  <div className="flex-col justify-start items-start gap-2 inline-flex">
    {label && <div className="text-black text-base font-normal font-['Poppins'] leading-normal">{label}</div>}
    <div className="w-80 h-12 relative">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-80 h-12 bg-neutral-100 rounded px-4 text-black text-base font-normal font-['Poppins'] leading-normal placeholder-black placeholder-opacity-50"
      />
    </div>
  </div>
)

export default Update