export default function ContactPage() {
  return (
    <div className="min-h-screen  text-[#F8EDDF] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-[#122823] p-8 rounded-xl border border-[#F8EDDF]/20 shadow-xl">
        <h2 className="text-4xl font-bold mb-2 text-center">Get in Touch</h2>
        <p className="text-sm text-center mb-8 text-[#F8EDDF]/80">
          Have questions or want to work together? Drop a message below.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-[#F8EDDF] text-[#122823] rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-[#F8EDDF] text-[#122823] rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Your Message</label>
            <textarea
              rows="5"
              placeholder="Type your message..."
              className="w-full px-4 py-2 bg-[#F8EDDF] text-[#122823] rounded-md focus:outline-none"
            ></textarea>
          </div>

          <button
            type="button"
            className="w-full bg-[#F8EDDF] text-[#122823] py-2 rounded-md font-semibold hover:bg-[#f3e3c2] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
