import React from 'react'

export default function AdminPanel() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4  p-6">
      <div className="bg-cyan-300 shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Admin Panel</h2>

        <form className="space-y-4">
          

          {/* Select Dropdown */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Select Role</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-400 outline-none">
              <option value="">Choose a role</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="user">User</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>


      <div tabIndex={0} className="collapse collapse-close bg-cyan-300 border-base-300 border w-[450px]">
  <div className="collapse-title font-semibold">I have collapse-open class</div>
  <div className="collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
    </div>
  )
}
