export default function SettingsPage() {
  return (
    <div className="min-h-screen  text-[#F8EDDF] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-[#122823] p-8 rounded-xl border border-[#F8EDDF]/20 shadow-xl">
        <h2 className="text-4xl font-bold mb-2 text-center">Account Settings</h2>
        <p className="text-sm text-center mb-8 text-[#F8EDDF]/80">
          Update your account information below.
        </p>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-[#F8EDDF] text-[#122823] rounded-md focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-[#F8EDDF] text-[#122823] rounded-md focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full px-4 py-2 bg-[#F8EDDF] text-[#122823] rounded-md focus:outline-none"
            />
          </div>

          {/* Save Button */}
          <button
            type="button"
            className="w-full bg-[#F8EDDF] text-[#122823] py-2 rounded-md font-semibold hover:bg-[#f2dfbb] transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  )
}
