export default function ContactSection() {
  return (
    <section className="py-24 px-6 bg-gray-600 relative overflow-hidden">
  <div className="max-w-7xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-16">
      <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">
        Contact Us
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Let’s Plan Your Next Big Project <span className="text-orange-300">Together</span>
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto">
        Have questions about installations, licensing, partnerships, or the
        mobile app? Reach out to us and our team will get back to you quickly.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-10 items-start">
      {/* GOOGLE MAP */}
      <div className="space-y-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl h-[500px]">
          <iframe
            title="Botswana Music Events Locations"
            src="https://www.google.com/maps?q=Gaborone,Botswana&z=6&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0 w-full h-full"
            allowFullScreen
          ></iframe>
        </div>

        {/* Physical Addresses */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Gaborone */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">
              Gaborone Office
            </h3>

            <div className="space-y-3 text-gray-300">
              <p>
                Plot 1234, CBD Square
                <br />
                Gaborone, Botswana
              </p>

              <p className="text-gray-300">
                +267 71 234 567
              </p>

              <p className="text-sm text-gray-300">
                support@utmprojects.com
              </p>
            </div>
          </div>

          {/* Francistown */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              Francistown Office
            </h3>

            <div className="space-y-3 text-gray-300">
              <p className="text-gray-300">
                Plot 5678, Blue Jacket Street
                <br />
                Francistown, Botswana
              </p>

              <p>+267 72 987 654</p>
              <p className="text-sm text-gray-300">
                support@utmprojects.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
        <div className="mb-8">
          <p className="text-orange-400 uppercase tracking-widest text-sm mb-2">
            Send A Message
          </p>

          <h3 className="text-3xl font-bold mb-3">
            We’d Love To Hear From You
          </h3>

          <p className="text-gray-400">
            Fill in the form below and our support team will respond as soon as
            possible.
          </p>
        </div>

        <form action="mailto:support@utmprojects.com" method="post" className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-black/40 border border-white/10 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-black/40 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 transition"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Subject
            </label>

            <input
              type="text"
              placeholder="Message subject"
              className="w-full bg-black/40 border border-white/10 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Message
            </label>

            <textarea
              rows={6}
              placeholder="Write your message here..."
              className="w-full bg-black/40 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 transition resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:opacity-90 transition py-4 rounded-2xl font-semibold text-lg shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

  );
}